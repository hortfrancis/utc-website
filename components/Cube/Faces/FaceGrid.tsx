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
 *
 * Children are typically:
 * 1. A grid layer: `<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 ...">` with
 *    items placed using Tailwind grid classes (col-start-*, row-start-*, col-span-*, row-span-*).
 * 2. Overlay layers: `<div className="absolute inset-0 ...">` for blend-mode effects, gradients, etc.
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
    >
      {children}
    </div>
  );
}
