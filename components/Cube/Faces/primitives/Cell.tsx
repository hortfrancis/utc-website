export interface CellProps {
  /** Column start (1–6). */
  col: number;
  /** Row start (1–6). */
  row: number;
  /** Number of columns to span (default 1). */
  colSpan?: number;
  /** Number of rows to span (default 1). */
  rowSpan?: number;
  /** Explicit z-index for controlling layer stacking order. */
  zIndex?: number;
  /** Optional className on the cell div. */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Grid positioning primitive. Renders a `<div>` placed at the specified
 * column/row with the given span. Use inside `<FaceGrid>`.
 *
 * Full-face usage: `<Cell col={1} row={1} colSpan={6} rowSpan={6}>`
 * — or equivalently, set `gridColumn: '1 / -1'` manually.
 */
export default function Cell({
  col,
  row,
  colSpan = 1,
  rowSpan = 1,
  zIndex,
  className,
  children,
}: CellProps) {
  return (
    <div
      data-component="Cell"
      className={className}
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
        ...(zIndex !== undefined && { zIndex }),
      }}
    >
      {children}
    </div>
  );
}
