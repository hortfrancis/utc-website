'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface UIGridProps {
  /** Number of columns. */
  cols: number;
  /** Number of rows. */
  rows: number;
  /** Gap between cells (CSS length, e.g. "4px" or "0.25rem"). */
  gap?: string;
  /** Whether the grid fills the viewport (100dvh × 100vw). If false, fills parent. */
  fullViewport?: boolean;
  /** Optional class for the outer wrapper. */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Full-area layout grid with square cells. Covers the whole screen (or parent);
 * cell size is computed so every cell is a square: min(width/cols, height/rows).
 * Responsive: uses ResizeObserver to recompute on resize.
 */
export default function UIGrid({
  cols,
  rows,
  gap = '4px',
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
    const size = Math.min(width / cols, height / rows);
    setCellSizePx(Math.max(0, Math.floor(size)));
  }, [cols, rows]);

  useEffect(() => {
    measure();
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const gridWidth = cellSizePx * cols;
  const gridHeight = cellSizePx * rows;

  return (
    <div
      ref={containerRef}
      className={clsx(
        'flex items-center justify-center overflow-hidden',
        fullViewport && 'h-[100dvh] w-screen',
        !fullViewport && 'h-full w-full',
        className
      )}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSizePx}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSizePx}px)`,
          gap,
          width: gridWidth,
          height: gridHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
}
