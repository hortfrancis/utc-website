import clsx from 'clsx';

export const FACE_GRID_DATA_TESTID = 'FaceGrid';

export interface FaceGridProps {
  /** Optional class overrides. */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Layout container for cube face content. Provides:
 *
 * - Full-size dark background (bg-theme-black)
 * - Relative positioning for stacking layers
 * - Overflow hidden (clips to face bounds)
 * - CSS container (inline-size) so children can use `cqi` units
 *   for responsive sizing that scales with the cube face
 *
 * Children are typically:
 * 1. A grid layer: `<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 ...">` with
 *    items placed using Tailwind grid classes (col-start-*, row-start-*, col-span-*, row-span-*).
 * 2. Overlay layers: `<div className="absolute inset-0 ...">` for blend-mode effects, gradients, etc.
 *
 * ## Container query units
 *
 * Because this element has `container-type: inline-size`, descendants can
 * use `cqi` (container query inline) units. Since cube faces are always
 * square, `1cqi` = 1% of the face width = 1% of the face height.
 *
 * Handy reference:
 * - Full face:    100cqi
 * - One grid cell: ~16.67cqi (100/6)
 * - Half a cell:   ~8.33cqi  (sub-square)
 *
 * This is the cube-face counterpart to UIGrid. Since cube faces are always
 * square, a simple CSS grid with 1fr units gives square cells automatically
 * — no ResizeObserver needed.
 */
export default function FaceGrid({ className, children }: FaceGridProps) {
  return (
    <div
      data-testid={FACE_GRID_DATA_TESTID}
      className={clsx(
        'w-full h-full',
        'relative',
        'bg-theme-black',
        'overflow-hidden',
        className
      )}
      style={{ containerType: 'inline-size' }}
    >
      {children}
    </div>
  );
}
