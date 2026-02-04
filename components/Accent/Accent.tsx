import clsx from 'clsx';
import type { CSSProperties } from 'react';

export const ACCENT_DATA_TESTID = 'Accent';

export type AccentDirection = 'vertical' | 'horizontal';

export type AccentGradient =
  | 'magenta-green'
  | 'purple-orange'
  | 'orange-purple';

export type AccentBorderSide = 'top' | 'right' | 'bottom' | 'left';

export interface AccentProps {
  /** Gradient direction (vertical = top-to-bottom, horizontal = left-to-right). */
  direction: AccentDirection;
  /** Theme gradient pair. */
  gradient: AccentGradient;
  /** Which sides get the black border; others are flush. */
  borderSides?: AccentBorderSide[];
  /**
   * When true, border and gradient use CSS variables (--button-border-color,
   * --button-accent-from, --button-accent-to) so the accent responds to Button
   * hover/focus (orange border and gradient). Use when Accent is inside a Button.
   */
  interactive?: boolean;
  /** Optional class overrides (e.g. z-index, rounded). */
  className?: string;
}

const gradientFromTo: Record<AccentGradient, string> = {
  'magenta-green': 'from-theme-magenta to-theme-green',
  'purple-orange': 'from-theme-purple to-theme-orange',
  'orange-purple': 'from-theme-orange to-theme-purple',
};

/** CSS variable values for interactive gradient (used with --button-accent-from/to on hover). */
const gradientVars: Record<
  AccentGradient,
  { from: string; to: string }
> = {
  'magenta-green': { from: 'var(--theme-magenta)', to: 'var(--theme-green)' },
  'purple-orange': { from: 'var(--theme-purple)', to: 'var(--theme-orange)' },
  'orange-purple': { from: 'var(--theme-orange)', to: 'var(--theme-purple)' },
};

const borderSideZero: Record<AccentBorderSide, string> = {
  top: 'border-t-0',
  right: 'border-r-0',
  bottom: 'border-b-0',
  left: 'border-l-0',
};

/**
 * Reusable gradient accent to draw the eye and add colour next to
 * interactive elements. Compose next to logos, buttons, or nav panels.
 * No intrinsic size—use className or layout for dimensions.
 */
export default function Accent({
  direction,
  gradient,
  borderSides = ['top', 'right', 'bottom', 'left'],
  interactive = false,
  className,
}: AccentProps) {
  const gradientAxis =
    direction === 'vertical' ? 'bg-gradient-to-b' : 'bg-gradient-to-r';
  const gradientClass = clsx(gradientAxis, gradientFromTo[gradient]);

  const borderZeroClasses = (['top', 'right', 'bottom', 'left'] as const)
    .filter((side) => !borderSides.includes(side))
    .map((side) => borderSideZero[side]);

  const sizeClass = direction === 'vertical' ? 'w-4' : 'h-4';

  const vars = gradientVars[gradient];
  const gradientLine =
    direction === 'vertical'
      ? 'linear-gradient(to bottom, var(--button-accent-from, var(--accent-from)), var(--button-accent-to, var(--accent-to)))'
      : 'linear-gradient(to right, var(--button-accent-from, var(--accent-from)), var(--button-accent-to, var(--accent-to)))';

  const interactiveStyle: CSSProperties | undefined = interactive
    ? {
        ['--accent-from' as string]: vars.from,
        ['--accent-to' as string]: vars.to,
        background: gradientLine,
      }
    : undefined;

  const styles = clsx(
    sizeClass,
    'border-4',
    interactive
      ? 'border-[color:var(--button-border-color,var(--theme-black))] transition-[border-color,background] duration-200'
      : 'border-theme-black',
    !interactive && gradientClass,
    borderZeroClasses,
    className
  );

  return (
    <div
      data-testid={ACCENT_DATA_TESTID}
      className={styles}
      style={interactiveStyle}
      aria-hidden
    />
  );
}
