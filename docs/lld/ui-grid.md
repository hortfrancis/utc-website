# UIGrid

## Overview

**UIGrid** is the site-wide layout grid. Every cell is a perfect square, regardless of the container's aspect ratio. Use it to position UI atoms and molecules (Frames, Accents, NavLinks) on a grid with consistent proportions.

For cube face layouts (which are always square), use **FaceGrid** instead — it's a simpler CSS-only grid that doesn't need JavaScript.

---

## Why square cells?

Most viewport/container aspect ratios are not 1:1. A regular CSS Grid with `1fr` columns and rows will produce rectangular cells on non-square containers. UIGrid solves this by computing the largest square cell size that fits:

```
cellSize = min(
  (containerWidth  - gap * (cols - 1)) / cols,
  (containerHeight - gap * (rows - 1)) / rows
)
```

The grid is then centered within the container. This ensures visual consistency — a 2×2 block always looks like a square, a 3×1 block always has a 3:1 aspect ratio, etc.

---

## How it works

1. **ResizeObserver** measures the container (viewport or parent element).
2. Cell size is computed from the formula above.
3. CSS Grid is rendered with explicit pixel sizes: `grid-template-columns: repeat(cols, cellSizePx)`.
4. The inner grid `div` is centered in the outer container with flexbox.

This is a `'use client'` component (needs `useRef`, `useState`, `useEffect`).

---

## Grid scales

UIGrid supports any `cols × rows` configuration. Two configurations align with the design system's grid hierarchy:

- **3×3** — Master grid scale. Each cell = one conceptual block (matches the logomark cube face subdivisions).
- **6×6** — Sub-grid scale. Each master cell subdivides into 2×2 = 36 total cells.

For site-wide layouts, larger grids (e.g. 12×8) work well for LCARS-style panel positioning.

---

## Performance

ResizeObserver fires once per layout change — not per frame. The callback performs three divisions, a `Math.min`, and a single `setState`. This is microseconds of JS work, followed by one CSS Grid re-layout (which the browser would do for any responsive reflow anyway).

`Math.floor` on the cell size means small sub-pixel viewport changes don't trigger a re-render at all, because the floored value stays the same. In practice, resize events only fire when the user drags a browser edge or rotates a device — a handful of times, not continuously.

The only scenario that could cause excessive recalculation is a CSS animation on the container's own dimensions (continuously changing width/height). This is not a realistic use case for a layout grid. Normal viewport resizing, orientation changes, and page navigation are all fine.

---

## Responsive design

UIGrid handles **spatial** responsiveness automatically — cells scale to fit the available space while staying square.

**Structural** responsiveness (what goes where at different viewport sizes) lives *above* UIGrid, via breakpoints:

- **Mobile-first breakpoints** determine which grid configuration to render (e.g. 3×6 on mobile, 12×8 on desktop).
- At each breakpoint, render a different UIGrid with different `cols`/`rows` and a different set of GridBlocks — or use Tailwind's `hidden md:block` / `md:hidden` to swap entire layouts without JS breakpoint detection.
- Organisms and layout sections rearrange at breakpoints; UIGrid takes care of the rest.

This separates concerns cleanly: UIGrid scales proportionally, breakpoints restructure.

---

## Files

- [`UIGrid.tsx`](../../components/UIGrid/UIGrid.tsx) — Grid container with ResizeObserver-based square cell computation.
- [`GridBlock.tsx`](../../components/UIGrid/GridBlock.tsx) — Placement component. Props: `col`, `row` (1-based), `colSpan`, `rowSpan`.
- [`index.ts`](../../components/UIGrid/index.ts) — Barrel exports.

---

## API

### UIGrid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `number` | required | Number of columns |
| `rows` | `number` | required | Number of rows |
| `gap` | `number` | `4` | Gap between cells in pixels |
| `fullViewport` | `boolean` | `true` | Fill viewport (100dvh × 100vw) or fill parent |
| `className` | `string` | — | Optional class for the outer wrapper |

### GridBlock

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `col` | `number` | required | Column index (1-based) |
| `row` | `number` | required | Row index (1-based) |
| `colSpan` | `number` | `1` | Number of columns to span |
| `rowSpan` | `number` | `1` | Number of rows to span |
| `className` | `string` | — | Optional class for the block wrapper |
