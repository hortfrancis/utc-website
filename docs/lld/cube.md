# Cube

> Quick reference: see `.cursor/rules/design-system.mdc` (Cube Face Mapping, Organisms section).

## Overview

The homepage 'cube menu' is a 3D cube that:

- Spins slowly by default (attract behaviour).
- Can be rotated manually via mouse/touch drag.
- Treats each whole face as a clickable/tappable region (for each section in the website).

The cube is implemented using pure CSS 3D transforms + imperative DOM transforms -- no 3rd party 3D library is used.

---

## Approach

- **Smooth interaction**
  - Drag should feel direct and responsive.
  - Clicking a face button should not initiate dragging.
- **Performance**
  - Avoid 60fps React re-renders.
  - Keep work per frame minimal (one transform assignment).
- **Robustness**
  - No “stuck dragging” state, even if pointerup happens off-element.
  - Pause animation in background tabs.
- **Maintainability**
  - Geometry lives in `Cube.css`.
  - Behaviour lives in `Cube.tsx`.
  - Face content lives in `Face.tsx` and `./Faces/*`.

---

## Files

- [`Cube.tsx`](../../components/Cube/Cube.tsx)

  - Owns motion model (AUTO spin, DRAG, wait-then-return).
  - Owns input handling (pointer events + global safety listeners).
  - Imperatively applies `transform` to `.cube`.

- [`Cube.css`](../../components/Cube/Cube.css)

  - Defines cube sizing variables.
  - Defines 3D geometry for each face using `translateZ`, `rotateX`, `rotateY`.
  - Defines cursor state and shared face styling.

- [`Face.tsx`](../../components/Cube/Face.tsx)
  - Renders one face at a given position (`front/back/left/right/top/bottom`).
  - Renders the face’s content component (e.g. `XR`, `Work`, etc.).
  - Sets a `data-face` attribute on the face root (`data-face="front" | "back" | …`).
  - This lets `Cube.tsx` walk up from `event.target` on pointerdown to identify which face was pressed.
  - Combined with tap detection in `Cube.tsx` (low movement + short duration), a quick tap anywhere on the face is treated as a face click.

---

## Motion model

### Axes

- `rotX`: tilt up/down (reveals top/bottom).
- `rotY`: spin around vertical axis (reveals side faces).

### States

- **AUTO**

  - May run a RAF loop.
  - Optionally spins around Y at `AUTO_SPEED` (deg/sec).
  - Optionally performs a return animation on X back to the attract tilt.

- **DRAG**
  - RAF loop is stopped.
  - Pointer movement directly sets `rotX` and `rotY`.

### Post-drag behaviour (wait then return)

On drag end:

1. Enter AUTO.
2. Freeze for `WAIT_MS`:
   - Y spin disabled (`spinEnabledRef = false`).
3. Begin X return animation:
   - animate `rotX` back to `ATTRACT_X` over `RETURN_DURATION_MS`.
   - Y spin resumes while X is returning (current design choice).

Easing uses smoothstep: `t*t*(3-2*t)`.

---

## Input handling

### Pointer events

- Uses `onPointerDown`, `onPointerMove`, `onPointerUp`.
- Uses `setPointerCapture` when available.
- Tracks pointer via `pointerIdRef` to ignore unrelated pointers.

### “Stuck drag” prevention

Pointer capture is not perfectly reliable across browsers/devices.
The user may release the mouse button / lift their finger off-window away from the cube element,
or the browser tab itself.  
To prevent the cube getting stuck in DRAG mode if the pointerup event is missed:

- On pointerdown, install window-level listeners in capture phase:
  - `pointerup`, `pointercancel`, `blur`
- Any of these events end the drag and clean up listeners.

Also handles:

- `onLostPointerCapture` on the cube element.

---

## Background tab behaviour

- Listens to `document.visibilitychange`.
- If hidden: cancels RAF.
- If visible and mode is AUTO: restarts RAF.

Additionally:

- RAF time delta is clamped (`MAX_DT`) to prevent large catch-up jumps.

---

## Tunables constants

In `Cube.tsx`:

- `ATTRACT_X`: default tilt angle.
- `AUTO_SPEED`: default spin speed.
- `DRAG_SPEED`: drag sensitivity.
- `WAIT_MS`: post-drag pause duration.
- `RETURN_DURATION_MS`: return animation duration.
- `MAX_DT`: dt clamp for tab throttling.
