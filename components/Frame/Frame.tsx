import type { ReactNode } from 'react';
import clsx from 'clsx';

export const FRAME_DATA_TESTID = 'Frame';

export type FrameBorderSide = 'top' | 'right' | 'bottom' | 'left';

export type FrameCorner =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface FrameProps {
  /**
   * Which sides get the border; others are flush (no border).
   * Use a partial set for an "open" frame (e.g. three sides = stamp/badge).
   */
  borderSides?: readonly FrameBorderSide[];
  /**
   * Which corners are rounded. Use one or two for a stamp/badge cut;
   * use all four for a pill or soft box.
   */
  roundedCorners?: readonly FrameCorner[];
  /** Border width class (default: border-4). */
  borderWidth?: 'border-2' | 'border-4';
  /** Background colour class (default: bg-theme-white). */
  background?: string;
  /** Optional class for the frame wrapper. */
  className?: string;
  /** Frame content (typically passed as JSX children). */
  children?: ReactNode;
}

const sideZeroClass: Record<FrameBorderSide, string> = {
  top: 'border-t-0',
  right: 'border-r-0',
  bottom: 'border-b-0',
  left: 'border-l-0',
};

const cornerRoundClass: Record<FrameCorner, string> = {
  'top-left': 'rounded-tl-3xl',
  'top-right': 'rounded-tr-3xl',
  'bottom-left': 'rounded-bl-3xl',
  'bottom-right': 'rounded-br-3xl',
};

/**
 * Composable frame: partial border and optional rounded corners.
 *
 * **Semantic use:** An open frame (missing one or more sides) suggests
 * "entry point", "panel edge", or "badge" — the content isn't fully
 * boxed in. One rounded corner reads as stamp/badge cut (craft,
 * tangibility). Use for logo lockups, nav panels, or any block that
 * should feel like a distinct chunk without a full closed box.
 */
export default function Frame({
  borderSides = ['top', 'right', 'bottom', 'left'],
  roundedCorners = [],
  borderWidth = 'border-4',
  background = 'bg-theme-white',
  className,
  children,
}: FrameProps) {
  const sidesToRemove = (['top', 'right', 'bottom', 'left'] as const).filter(
    (s) => !borderSides.includes(s)
  );
  const borderZeroClasses = sidesToRemove.map((s) => sideZeroClass[s]);
  const roundedClasses = roundedCorners.map((c) => cornerRoundClass[c]);

  return (
    <div
      data-testid={FRAME_DATA_TESTID}
      className={clsx(
        'box-border',
        background,
        borderWidth,
        'border-theme-black',
        borderZeroClasses,
        roundedClasses,
        roundedCorners.length > 0 && 'overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
}
