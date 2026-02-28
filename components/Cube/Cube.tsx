'use client';

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Face from "./Face";
import "./Cube.css";

/**
 * Cube interaction modes.
 *
 * - `"AUTO"`: Cube is not being dragged. An animation loop (requestAnimationFrame)
 *   may be running to spin the cube and/or return it to its "attract" pose.
 * - `"DRAG"`: User is actively dragging; animation is suspended and the cube is
 *   driven directly from pointer movement.
 */
type Mode = "AUTO" | "DRAG";

/**
 * Logical identifiers for each cube face.
 *
 * Used by tap / click detection to map DOM events (via `data-face`) to
 * a specific face so higher-level behaviour (e.g. navigation) can be
 * implemented per face.
 */
export type FacePosition = "front" | "back" | "left" | "right" | "top" | "bottom";

/** Human-readable label for each cube face / site section. */
export const FACE_LABELS: Record<FacePosition, string> = {
  front: "Work",
  back: "News",
  left: "Vision",
  right: "Showcase",
  top: "XR",
  bottom: "Hamster",
};

/** Default face-tap handler: shows an alert with the section name. */
const defaultOnFaceTap = (face: FacePosition) => {
  const label = FACE_LABELS[face] ?? face;
  alert(`Face clicked: ${label}`);
};

interface CubeProps {
  /** Called when a face is tapped. Defaults to an alert with the face label. */
  onFaceTap?: (face: FacePosition) => void;
}

/**
 * Interactive CSS 3D cube used as an interactive homepage menu.
 *
 * Rendering:
 * - The cube geometry is defined in CSS (`Cube.css`) using `translateZ()` + `rotateX/Y`
 *   on each face.
 * - The cube's current rotation is applied imperatively via `cubeRef.current.style.transform`
 *   to avoid 60fps React re-renders.
 *
 * Motion model:
 * - Default: spin slowly around Y (vertical axis) (as 'attract' motion).
 * - Drag: user rotates cube with pointer/touch. While dragging, AUTO spin is disabled.
 * - Release: cube freezes in the released pose for `WAIT_MS`, then smoothly returns
 *   the X tilt back to `ATTRACT_X` over `RETURN_DURATION_MS`.
 *
 * Input model:
 * - Pointer Events are used (works for mouse + touch).
 * - Pointer capture is used when possible; window-level listeners provide a safety net
 *   so we don't get stuck in DRAG if pointerup happens off-element or off-window.
 *
 * Tab visibility:
 * - When the document is hidden, animation is stopped to avoid wasted work.
 * - When visible again, animation resumes at the place it was when the document became hidden.
 * 
 * Abbreviations:
 * - RAF = requestAnimationFrame 
 * - DT = delta time
 */
export default function Cube({ onFaceTap = defaultOnFaceTap }: CubeProps = {}) {
  /**
   * UI state used only for coarse mode decisions (cursor class, etc).
   * (High-frequency motion state lives in refs to avoid React re-render on every frame.)
   */
  const [mode, setMode] = useState<Mode>("AUTO");

  /**
   * Mode ref is used by the RAF tick loop to avoid stale closures.
   * (React state updates are async; reading `mode` in tick would sometimes see old values.)
   */
  const modeRef = useRef<Mode>("AUTO");

  /**
   * Sets both the React state and the ref-backed mode.
   * @param next Next mode
   */
  const setModeBoth = (next: Mode) => {
    modeRef.current = next;
    setMode(next);
  };

  /** DOM reference to the cube element whose transform we update imperatively. */
  const cubeRef = useRef<HTMLDivElement | null>(null);

  // ---------------------------------------------------------------------------
  // Timing + animation state (refs to avoid re-render)
  // ---------------------------------------------------------------------------

  /** Active RAF id, if any. */
  const rafRef = useRef<number | null>(null);

  /** Timestamp of the previous RAF callback; used to compute dt. */
  const lastTimeRef = useRef<number>(0);

  /**
   * Current cube rotation (degrees).
   *
   * Axis mapping:
   * - rotX: tilt up/down (reveals top/bottom faces)
   * - rotY: spin left/right around vertical axis (reveals side faces)
   */
  const rotXRef = useRef<number>(-30);
  const rotYRef = useRef<number>(0);

  // ---------------------------------------------------------------------------
  // Drag state (refs)
  // ---------------------------------------------------------------------------

  /** Pointer id for the active drag interaction (ensures we ignore unrelated pointers). */
  const pointerIdRef = useRef<number | null>(null);

  /** Pointer position at drag start. */
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);

  /** Rotation at drag start (used as baseline for deltas). */
  const dragStartRotXRef = useRef<number>(0);
  const dragStartRotYRef = useRef<number>(0);

  // ---------------------------------------------------------------------------
  // Tap / click detection (refs)
  // For detecting quick taps on faces to trigger 'onClick' behaviour.
  // ---------------------------------------------------------------------------

  /** Starting pointer position for tap detection. */
  const tapStartXRef = useRef<number>(0);
  const tapStartYRef = useRef<number>(0);

  /** Timestamp when tap began. */
  const tapStartTimeRef = useRef<number>(0);

  /** Face under the pointer at tap start, if any. */
  const tapFaceRef = useRef<FacePosition | null>(null);

  /** Whether the current interaction is still a tap candidate. */
  const tapActiveRef = useRef<boolean>(false);

  // ---------------------------------------------------------------------------
  // Tunable constants
  // ---------------------------------------------------------------------------

  /** Default tilt angle used in 'attract' pose. */
  const ATTRACT_X = -30;

  /** Degrees per second for automatic spin (Y axis). */
  const AUTO_SPEED = 15;

  /** Degrees per pixel during drag. */
  const DRAG_SPEED = 0.3;

  /**
   * Maximum frame delta (ms). Prevents huge time jumps after background tab throttling,
   * and avoids "catch up" rotation spikes.
   */
  const MAX_DT = 50;

  /**
   * After a drag ends, the cube stays frozen in the released pose for this duration
   * before returning X tilt to ATTRACT_X.
   */
  const WAIT_MS = 1000;

  /** Duration of the smooth X return animation. */
  const RETURN_DURATION_MS = 600;

  /** Maximum pointer movement (px) for an interaction to count as a tap. */
  const TAP_MOVE_TOLERANCE_PX = 10;

  /** Maximum duration (ms) for an interaction to count as a tap. */
  const TAP_TIME_MAX_MS = 300;

  // ---------------------------------------------------------------------------
  // "Wait then return X" state (refs)
  // ---------------------------------------------------------------------------

  /** Timeout id for the wait phase. */
  const waitTimeoutRef = useRef<number | null>(null);

  /** Whether the X return animation is active. */
  const returnActiveRef = useRef<boolean>(false);

  /** Timestamp when the X return animation began (from RAF time). */
  const returnStartTimeRef = useRef<number>(0);

  /** Starting X rotation for the current return animation. */
  const returnFromXRef = useRef<number>(ATTRACT_X);

  /**
   * Whether automatic Y spin is currently enabled.
   * - Disabled during drag.
   * - Disabled during the post-release wait period.
   * - Re-enabled when X return begins (configurable).
   */
  const spinEnabledRef = useRef<boolean>(true);

  // ---------------------------------------------------------------------------
  // Core imperative operations
  // ---------------------------------------------------------------------------

  /**
   * Applies the current rotation refs to the cube element.
   * This avoids per-frame React rendering and leverages the browser compositor.
   */
  const applyTransform = () => {
    const el = cubeRef.current;
    if (!el) return;
    el.style.transform = `rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`;
  };

  /** Cancels any active RAF loop. */
  const stopRAF = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  /**
   * Starts the RAF loop. We reset `lastTimeRef` so the first tick uses the RAF timestamp
   * instead of calling `performance.now()` (keeps render-time purity tooling happy).
   */
  const startRAF = () => {
    stopRAF();
    lastTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
  };

  /** Clears the wait timeout if present. */
  const clearWait = () => {
    if (waitTimeoutRef.current !== null) {
      window.clearTimeout(waitTimeoutRef.current);
      waitTimeoutRef.current = null;
    }
  };

  /**
   * Clears any pending wait and cancels return animation.
   * Called when user starts dragging again or on unmount.
   */
  const clearReturn = () => {
    clearWait();
    returnActiveRef.current = false;
    returnStartTimeRef.current = 0;
  };

  /**
   * Schedules the post-drag "freeze" then starts a smooth return of rotX to ATTRACT_X.
   *
   * Behavior:
   * - Immediately disables Y spin.
   * - After WAIT_MS, begins return animation and re-enables Y spin.
   */
  const scheduleWaitThenReturnX = () => {
    clearReturn();

    // Freeze in released pose during wait (no Y spin)
    spinEnabledRef.current = false;

    waitTimeoutRef.current = window.setTimeout(() => {
      // Start smooth X return
      returnFromXRef.current = rotXRef.current;
      returnStartTimeRef.current = 0; // initialized on first tick of return
      returnActiveRef.current = true;

      // Resume Y spin while returning X
      spinEnabledRef.current = true;
    }, WAIT_MS);
  };

  /**
   * Smoothstep easing function for the return animation.
   * @param t Normalized time in [0..1]
   */
  const easeInOut = (t: number) => t * t * (3 - 2 * t);

  /**
   * RAF tick: updates automatic Y spin and/or X return animation while in AUTO mode.
   * @param t RAF timestamp in ms
   */
  const tick = (t: number) => {
    if (modeRef.current !== "AUTO") return;

    // Initialize timestamp on first frame
    if (lastTimeRef.current === 0) lastTimeRef.current = t;

    // Compute dt (clamped)
    let dt = t - lastTimeRef.current;
    lastTimeRef.current = t;
    dt = Math.min(dt, MAX_DT);

    // Automatic Y spin (when enabled)
    if (spinEnabledRef.current) {
      rotYRef.current += AUTO_SPEED * (dt / 1000);

      // Long-run numeric stability: keep rotY bounded to avoid huge values.
      if (Math.abs(rotYRef.current) > 1e6) rotYRef.current %= 360;
    }

    // Return-to-attract X animation
    if (returnActiveRef.current) {
      if (returnStartTimeRef.current === 0) returnStartTimeRef.current = t;

      const elapsed = t - returnStartTimeRef.current;
      const u = Math.min(1, elapsed / RETURN_DURATION_MS);
      const eased = easeInOut(u);

      rotXRef.current =
        returnFromXRef.current + (ATTRACT_X - returnFromXRef.current) * eased;

      if (u >= 1) {
        rotXRef.current = ATTRACT_X;
        returnActiveRef.current = false;
      }
    }

    applyTransform();
    rafRef.current = requestAnimationFrame(tick);
  };

  // ---------------------------------------------------------------------------
  // Drag "safety net" (global listeners)
  // ---------------------------------------------------------------------------

  /**
   * Removes global drag listeners (installed on pointerdown).
   * We install them in capture phase so we still receive pointerup even if it occurs off-element.
   */
  const cleanupGlobalDragListeners = () => {
    window.removeEventListener("pointerup", onWindowPointerUp, true);
    window.removeEventListener("pointercancel", onWindowPointerCancel, true);
    window.removeEventListener("blur", onWindowBlur, true);
  };

  /**
   * Ends a drag interaction.
   * @param pointerId Optional pointer id to validate (ignored if it doesn't match current drag).
   */
  const endDrag = (pointerId?: number) => {
    // Ignore unrelated pointers.
    if (
      pointerId !== undefined &&
      pointerIdRef.current !== null &&
      pointerId !== pointerIdRef.current
    ) {
      return;
    }

    // If not currently dragging, just clean up.
    if (modeRef.current !== "DRAG") {
      cleanupGlobalDragListeners();
      pointerIdRef.current = null;
      return;
    }

    // Best-effort release pointer capture.
    const el = cubeRef.current;
    if (el && pointerIdRef.current !== null) {
      try {
        el.releasePointerCapture(pointerIdRef.current);
      } catch {
        // Safari/edge cases: capture may already be lost; ignore.
      }
    }

    pointerIdRef.current = null;
    cleanupGlobalDragListeners();

    // Return to AUTO mode, but first freeze then re-center X.
    setModeBoth("AUTO");
    scheduleWaitThenReturnX();
    startRAF();
  };

  /** Window-level pointerup handler (capture phase). */
  const onWindowPointerUp = (ev: PointerEvent) => {
    const cubeEl = cubeRef.current;

    // If the pointerup occurs on the cube (or a descendant), let the
    // React onPointerUp handler manage drag end + tap detection.
    if (cubeEl && ev.target instanceof Node && cubeEl.contains(ev.target)) {
      return;
    }

    // Pointerup happened elsewhere -> cancel any pending tap and end drag.
    tapActiveRef.current = false;
    tapFaceRef.current = null;
    endDrag(ev.pointerId);
  };

  /** Window-level pointercancel handler (capture phase). */
  const onWindowPointerCancel = (ev: PointerEvent) => {
    tapActiveRef.current = false;
    tapFaceRef.current = null;
    endDrag(ev.pointerId);
  };

  /** Window blur handler (e.g., user alt-tabs mid-drag). */
  const onWindowBlur = () => {
    tapActiveRef.current = false;
    tapFaceRef.current = null;
    endDrag();
  };

  // ---------------------------------------------------------------------------
  // Pointer handlers (attached to cube element)
  // ---------------------------------------------------------------------------

  /**
   * Starts dragging.
   * - Cancels any pending return animation.
   * - Stops RAF.
   * - Captures pointer.
   * - Installs global safety listeners.
   */
  const onPointerDown = (e: React.PointerEvent) => {
    // Belt-and-braces guard against native gestures (scroll, swipe-back,
    // pull-to-refresh). touch-action:none in CSS handles compliant browsers;
    // this covers iOS Safari, which does not fully honour that property.
    e.preventDefault();

    const el = cubeRef.current;
    if (!el) return;

    // Record tap baseline and which face (if any) was pressed.
    tapActiveRef.current = true;
    tapStartXRef.current = e.clientX;
    tapStartYRef.current = e.clientY;
    tapStartTimeRef.current = e.timeStamp;

    // Find the face element (if the pointer started on a face).
    const nativeTarget = e.target as HTMLElement | null;
    let face: FacePosition | null = null;

    if (nativeTarget) {
      const faceEl = nativeTarget.closest<HTMLElement>("[data-face]");
      if (faceEl && el.contains(faceEl)) {
        const dataFace = faceEl.getAttribute("data-face");
        if (
          dataFace === "front" ||
          dataFace === "back" ||
          dataFace === "left" ||
          dataFace === "right" ||
          dataFace === "top" ||
          dataFace === "bottom"
        ) {
          face = dataFace;
        }
      }
    }

    tapFaceRef.current = face;

    // User takes control -> cancel pending return and stop spin.
    clearReturn();
    spinEnabledRef.current = false;

    setModeBoth("DRAG");
    stopRAF();

    pointerIdRef.current = e.pointerId;

    // Pointer capture helps keep receiving events; not 100% reliable across all devices,
    // so we also add window-level safety listeners.
    try {
      el.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if capture is not supported/available.
    }

    window.addEventListener("pointerup", onWindowPointerUp, true);
    window.addEventListener("pointercancel", onWindowPointerCancel, true);
    window.addEventListener("blur", onWindowBlur, true);

    // Record drag baseline
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    dragStartRotXRef.current = rotXRef.current;
    dragStartRotYRef.current = rotYRef.current;
  };

  /**
   * Updates cube rotation based on pointer movement while dragging.
   */
  const onPointerMove = (e: React.PointerEvent) => {
    if (modeRef.current !== "DRAG") return;
    if (pointerIdRef.current !== e.pointerId) return;

    // Prevent the browser from scrolling or triggering native gestures
    // (e.g. Safari pull-to-refresh / swipe-back) while the cube is being dragged.
    e.preventDefault();

    const dx = e.clientX - dragStartXRef.current;
    const dy = e.clientY - dragStartYRef.current;

    rotYRef.current = dragStartRotYRef.current + dx * DRAG_SPEED;
    rotXRef.current = dragStartRotXRef.current - dy * DRAG_SPEED;

    // If movement exceeds tap tolerance, no longer consider this a tap.
    if (tapActiveRef.current) {
      const movementFromTapStartX = e.clientX - tapStartXRef.current;
      const movementFromTapStartY = e.clientY - tapStartYRef.current;

      // Math.hypot(dx, dy) computes the straight-line distance (Euclidean
      // distance) from the tap start point, combining X and Y movement.
      if (
        Math.hypot(movementFromTapStartX, movementFromTapStartY) >
        TAP_MOVE_TOLERANCE_PX
      ) {
        tapActiveRef.current = false;
      }
    }

    applyTransform();
  };

  /** Pointerup handler on cube (best-effort; global handler is primary). */
  const onPointerUp = (e: React.PointerEvent) => {
    endDrag(e.pointerId);

    // Detect "tap" interactions that should count as face clicks.
    if (!tapActiveRef.current || !tapFaceRef.current) {
      return;
    }

    const dt = e.timeStamp - tapStartTimeRef.current;
    const movementFromTapStartX = e.clientX - tapStartXRef.current;
    const movementFromTapStartY = e.clientY - tapStartYRef.current;

    // Same distance check as onPointerMove: use Euclidean distance from the
    // original tap point to decide whether this interaction was a tap vs drag.
    const movedTooFar =
      Math.hypot(movementFromTapStartX, movementFromTapStartY) >
      TAP_MOVE_TOLERANCE_PX;
    const tookTooLong = dt > TAP_TIME_MAX_MS;

    const face = tapFaceRef.current;

    tapActiveRef.current = false;
    tapFaceRef.current = null;

    if (movedTooFar || tookTooLong || !face) {
      return;
    }

    handleFaceTap(face);
  };

  /** Called if the browser revokes pointer capture. */
  const onLostPointerCapture = () => endDrag();

  /** Delegates to the onFaceTap prop (defaulted at the parameter level). */
  const handleFaceTap = (face: FacePosition) => onFaceTap(face);

  // ---------------------------------------------------------------------------
  // Lifecycle: tab visibility + mount/unmount
  // ---------------------------------------------------------------------------

  /**
   * Stops animation when the tab is hidden, resumes when visible (if in AUTO mode).
   */
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        stopRAF();
      } else if (modeRef.current === "AUTO") {
        startRAF();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Mount initial state:
   * - Set initial attract pose.
   * - Start auto animation.
   * Cleanup:
   * - Stop RAF and remove any global listeners/timeouts.
   */
  useEffect(() => {
    rotXRef.current = ATTRACT_X;
    rotYRef.current = 0;
    applyTransform();

    setModeBoth("AUTO");
    clearReturn();
    spinEnabledRef.current = true;
    startRAF();

    return () => {
      stopRAF();
      cleanupGlobalDragListeners();
      clearReturn();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="scene">
        <div
          ref={cubeRef}
          className={`cube ${mode === "DRAG" ? "cube--dragging" : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onLostPointerCapture={onLostPointerCapture}
        >
          <Face position="front" />
          <Face position="back" />
          <Face position="left" />
          <Face position="right" />
          <Face position="top" />
          <Face position="bottom" />
        </div>
      </div>
    </Container>
  );
}
