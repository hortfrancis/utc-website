import clsx from 'clsx';

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
  /** Optional class overrides (e.g. z-index, rounded). */
  className?: string;
}

const gradientFromTo: Record<AccentGradient, string> = {
  'magenta-green': 'from-theme-magenta to-theme-green',
  'purple-orange': 'from-theme-purple to-theme-orange',
  'orange-purple': 'from-theme-orange to-theme-purple',
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
  className,
}: AccentProps) {
  const gradientAxis =
    direction === 'vertical' ? 'bg-gradient-to-b' : 'bg-gradient-to-r';
  const gradientClass = clsx(gradientAxis, gradientFromTo[gradient]);

  const borderZeroClasses = (['top', 'right', 'bottom', 'left'] as const)
    .filter((side) => !borderSides.includes(side))
    .map((side) => borderSideZero[side]);

  const sizeClass = direction === 'vertical' ? 'w-4' : 'h-4';

  const styles = clsx(
    sizeClass,
    'border-4',
    'border-theme-black',
    gradientClass,
    borderZeroClasses,
    className
  );

  return (
    <div
      data-testid={ACCENT_DATA_TESTID}
      className={styles}
      aria-hidden
    />
  );
}
