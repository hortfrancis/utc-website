import React from 'react';
import clsx from 'clsx';

export const GRID_BLOCK_DATA_TESTID = 'GridBlock';

export interface GridBlockProps {
  /** Column index (1-based). */
  col: number;
  /** Row index (1-based). */
  row: number;
  /** Number of columns to span (default 1). */
  colSpan?: number;
  /** Number of rows to span (default 1). */
  rowSpan?: number;
  /** Optional class for the block wrapper. */
  className?: string;
  children: React.ReactNode;
}

/**
 * Places a block (any UI component) into the UI grid at the given cell.
 * Uses CSS Grid placement; col/row are 1-based.
 */
export default function GridBlock({
  col,
  row,
  colSpan = 1,
  rowSpan = 1,
  className,
  children,
}: GridBlockProps) {
  return (
    <div
      data-testid={GRID_BLOCK_DATA_TESTID}
      className={clsx('min-w-0 min-h-0 overflow-hidden', className)}
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
}
