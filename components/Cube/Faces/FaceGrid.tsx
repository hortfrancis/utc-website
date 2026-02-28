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
 * - Full-size white background (bg-theme-white)
 * - Overflow hidden (clips to face bounds)
 * - CSS container (inline-size) so children can use `cqi` units
 *   for responsive sizing that scales with the cube face
 * - A 6×6 CSS grid — all children are grid items
 *
 * ## Layout model
 *
 * Children are placed on a 6×6 grid using `gridColumn` / `gridRow`
 * (or the `<Cell>` helper component).
 *
 * Full-face layers (images, gradients, overlays) use
 * `gridColumn: '1 / -1'` and `gridRow: '1 / -1'` to span
 * all columns and rows. Overlapping children stack by DOM order
 * (later = on top). No absolute positioning needed.
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
 */
export default function FaceGrid({ className, children }: FaceGridProps) {
  return (
    <div
      data-testid={FACE_GRID_DATA_TESTID}
      className={clsx(
        'w-full h-full',
        'grid grid-cols-6 grid-rows-6',
        'bg-theme-white',
        'overflow-hidden',
        className,
      )}
      style={{ containerType: 'inline-size' }}
    >
      {children}
    </div>
  );
}
