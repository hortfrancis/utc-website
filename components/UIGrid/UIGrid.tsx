'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export const UI_GRID_DATA_TESTID = 'UIGrid';

export interface UIGridProps {
  /** Number of columns. */
  cols: number;
  /** Number of rows. */
  rows: number;
  /** Gap between cells in pixels. */
  gap?: number;
  /** Whether the grid fills the viewport (100dvh × 100vw). If false, fills parent. */
  fullViewport?: boolean;
  /** Optional class for the outer wrapper. */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Site-wide layout grid with square cells. Covers the whole screen (or parent
 * container); cell size is computed so every cell is a perfect square:
 *   min((width - gaps) / cols, (height - gaps) / rows)
 *
 * Responsive: uses ResizeObserver to recompute on resize.
 *
 * Use for site-wide UI positioning (LCARS-style panel layouts). For cube face
 * layouts, use FaceGrid instead (pure CSS, no ResizeObserver needed since
 * cube faces are already square).
 */
export default function UIGrid({
  cols,
  rows,
  gap = 4,
  fullViewport = true,
  className,
  children,
}: UIGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cellSizePx, setCellSizePx] = useState(0);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth;
    const height = el.clientHeight;

    // Subtract total gap space before dividing by cell count
    const cellFromWidth = (width - gap * (cols - 1)) / cols;
    const cellFromHeight = (height - gap * (rows - 1)) / rows;
    const size = Math.min(cellFromWidth, cellFromHeight);

    setCellSizePx(Math.max(0, Math.floor(size)));
  }, [cols, rows, gap]);

  useEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const gridWidth = cellSizePx * cols + gap * (cols - 1);
  const gridHeight = cellSizePx * rows + gap * (rows - 1);

  return (
    <div
      ref={containerRef}
      data-testid={UI_GRID_DATA_TESTID}
      className={clsx(
        'flex items-center justify-center overflow-hidden',
        fullViewport && 'h-dvh w-screen',
        !fullViewport && 'h-full w-full',
        className
      )}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSizePx}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSizePx}px)`,
          gap: `${gap}px`,
          width: gridWidth,
          height: gridHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
}
