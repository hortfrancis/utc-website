'use client';

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Face from "./Face";
import "./Cube.css";

type Mode = "AUTO" | "DRAG";

export default function Cube() {
  const [mode, setMode] = useState<Mode>("AUTO");

  // Mode ref prevents stale closure in RAF
  const modeRef = useRef<Mode>("AUTO");
  const setModeBoth = (next: Mode) => {
    modeRef.current = next;
    setMode(next);
  };

  const cubeRef = useRef<HTMLDivElement | null>(null);

  // RAF + timing
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Rotation refs
  const rotXRef = useRef<number>(-30);
  const rotYRef = useRef<number>(0);

  // Drag tracking
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef<number>(0);
  const dragStartYRef = useRef<number>(0);
  const dragStartRotXRef = useRef<number>(0);
  const dragStartRotYRef = useRef<number>(0);

  // Constants (tune)
  const ATTRACT_X = -30;
  const AUTO_SPEED = 15; // deg/sec
  const DRAG_SPEED = 0.3; // deg/px
  const MAX_DT = 50; // ms clamp

  const WAIT_MS = 1000;
  const RETURN_DURATION_MS = 600;

  // wait + return state
  const waitTimeoutRef = useRef<number | null>(null);
  const returnActiveRef = useRef<boolean>(false);
  const returnStartTimeRef = useRef<number>(0);
  const returnFromXRef = useRef<number>(ATTRACT_X);
  const spinEnabledRef = useRef<boolean>(true);

  const applyTransform = () => {
    const el = cubeRef.current;
    if (!el) return;
    el.style.transform = `rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`;
  };

  const stopRAF = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const startRAF = () => {
    stopRAF();
    lastTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
  };

  const clearWait = () => {
    if (waitTimeoutRef.current !== null) {
      window.clearTimeout(waitTimeoutRef.current);
      waitTimeoutRef.current = null;
    }
  };

  const clearReturn = () => {
    clearWait();
    returnActiveRef.current = false;
    returnStartTimeRef.current = 0;
  };

  const scheduleWaitThenReturnX = () => {
    clearReturn();
    spinEnabledRef.current = false;

    waitTimeoutRef.current = window.setTimeout(() => {
      returnFromXRef.current = rotXRef.current;
      returnStartTimeRef.current = 0;
      returnActiveRef.current = true;

      // resume Y spin while returning X
      spinEnabledRef.current = true;
    }, WAIT_MS);
  };

  const easeInOut = (t: number) => t * t * (3 - 2 * t);

  const tick = (t: number) => {
    if (modeRef.current !== "AUTO") return;

    if (lastTimeRef.current === 0) lastTimeRef.current = t;
    let dt = t - lastTimeRef.current;
    lastTimeRef.current = t;
    dt = Math.min(dt, MAX_DT);

    if (spinEnabledRef.current) {
      rotYRef.current += AUTO_SPEED * (dt / 1000);
      // Optional long-run stability:
      if (Math.abs(rotYRef.current) > 1e6) rotYRef.current %= 360;
    }

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

  // Global drag safety net
  const cleanupGlobalDragListeners = () => {
    window.removeEventListener("pointerup", onWindowPointerUp, true);
    window.removeEventListener("pointercancel", onWindowPointerCancel, true);
    window.removeEventListener("blur", onWindowBlur, true);
  };

  const endDrag = (pointerId?: number) => {
    if (
      pointerId !== undefined &&
      pointerIdRef.current !== null &&
      pointerId !== pointerIdRef.current
    ) {
      return;
    }

    if (modeRef.current !== "DRAG") {
      cleanupGlobalDragListeners();
      pointerIdRef.current = null;
      return;
    }

    const el = cubeRef.current;
    if (el && pointerIdRef.current !== null) {
      try {
        el.releasePointerCapture(pointerIdRef.current);
      } catch { }
    }

    pointerIdRef.current = null;
    cleanupGlobalDragListeners();

    setModeBoth("AUTO");
    scheduleWaitThenReturnX();
    startRAF();
  };

  const onWindowPointerUp = (ev: PointerEvent) => endDrag(ev.pointerId);
  const onWindowPointerCancel = (ev: PointerEvent) => endDrag(ev.pointerId);
  const onWindowBlur = () => endDrag();

  const onPointerDown = (e: React.PointerEvent) => {
    const el = cubeRef.current;
    if (!el) return;

    clearReturn();
    spinEnabledRef.current = false;

    setModeBoth("DRAG");
    stopRAF();

    pointerIdRef.current = e.pointerId;
    try {
      el.setPointerCapture(e.pointerId);
    } catch { }

    window.addEventListener("pointerup", onWindowPointerUp, true);
    window.addEventListener("pointercancel", onWindowPointerCancel, true);
    window.addEventListener("blur", onWindowBlur, true);

    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
    dragStartRotXRef.current = rotXRef.current;
    dragStartRotYRef.current = rotYRef.current;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (modeRef.current !== "DRAG") return;
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - dragStartXRef.current;
    const dy = e.clientY - dragStartYRef.current;

    rotYRef.current = dragStartRotYRef.current + dx * DRAG_SPEED;
    rotXRef.current = dragStartRotXRef.current - dy * DRAG_SPEED;

    applyTransform();
  };

  const onPointerUp = (e: React.PointerEvent) => endDrag(e.pointerId);
  const onLostPointerCapture = () => endDrag();

  // Visibility pause/resume
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
  }, []);

  // Mount
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

  // Button click handler (temporary)
  const onFaceButtonClick = (face: string) => {
    alert(`Clicked ${face}`);
  };

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
          {/* Faces stay as separate components */}
          <Face position="front" onButtonClick={onFaceButtonClick} />
          <Face position="back" onButtonClick={onFaceButtonClick} />
          <Face position="left" onButtonClick={onFaceButtonClick} />
          <Face position="right" onButtonClick={onFaceButtonClick} />
          <Face position="top" onButtonClick={onFaceButtonClick} />
          <Face position="bottom" onButtonClick={onFaceButtonClick} />
        </div>
      </div>
    </Container>
  );
}
