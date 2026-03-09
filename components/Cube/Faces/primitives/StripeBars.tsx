export interface StripeBarsProps {
  /**
   * Ordered list of CSS colours for the stripe segments.
   * Defaults to the standard acid palette (6 colours).
   */
  colors?: string[];
  /** Bar thickness in cqi units. Default: ~3.33 (20% of one grid square). */
  thickness?: number;
  /**
   * Bar orientation. Default: 'horizontal'.
   * 'horizontal' — thin row with segments side by side (classic)
   * 'vertical'   — thin column with segments stacked top-to-bottom
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Position within the Cell along the cross-axis.
   * For horizontal bars: vertical position — 'start' (top, default) | 'center' | 'end' (bottom)
   * For vertical bars:   horizontal position — 'start' (left, default) | 'center' | 'end' (right)
   */
  align?: 'start' | 'center' | 'end';
  /**
   * @deprecated Use `align` instead.
   * Vertical position within the Cell (horizontal bars only).
   */
  verticalAlign?: 'start' | 'center' | 'end';
}

const DEFAULT_COLORS: string[] = [
  'var(--theme-purple)',
  'var(--theme-cyan)',
  'var(--theme-orange)',
  'var(--theme-green)',
  'var(--theme-magenta)',
  'var(--theme-cyan)',
];

/**
 * Renders a thin colour-stripe bar (horizontal or vertical).
 * Fills its parent cell — place inside a `<Cell>` to control position.
 *
 * @example
 * // Horizontal bar at the top of row 3
 * <Cell col={1} row={3} colSpan={6} zIndex={5}>
 *   <StripeBars />
 * </Cell>
 *
 * // Vertical bar on the left edge of col 4
 * <Cell col={4} row={1} rowSpan={6} zIndex={5}>
 *   <StripeBars direction="vertical" />
 * </Cell>
 */
export default function StripeBars({
  colors = DEFAULT_COLORS,
  thickness = 100 / 6 * 0.2,
  direction = 'horizontal',
  align,
  verticalAlign,
}: StripeBarsProps) {
  const resolvedAlign = align ?? verticalAlign ?? 'start';
  const justifyMap = { start: 'flex-start', center: 'center', end: 'flex-end' };

  if (direction === 'vertical') {
    return (
      <div
        data-component="StripeBars"
        className="flex flex-row w-full h-full pointer-events-none"
        style={{ justifyContent: justifyMap[resolvedAlign] }}
      >
        <div className="flex flex-col h-full" style={{ width: `${thickness}cqi`, flexShrink: 0 }}>
          {colors.map((color, i) => (
            <div key={i} style={{ flex: 1, background: color }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      data-component="StripeBars"
      className="flex flex-col w-full h-full pointer-events-none"
      style={{ justifyContent: justifyMap[resolvedAlign] }}
    >
      <div className="flex w-full" style={{ height: `${thickness}cqi`, flexShrink: 0 }}>
        {colors.map((color, i) => (
          <div key={i} style={{ flex: 1, background: color }} />
        ))}
      </div>
    </div>
  );
}
