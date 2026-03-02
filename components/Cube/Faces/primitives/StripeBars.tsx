export interface StripeBarsProps {
  /**
   * Ordered list of CSS colours for the stripe segments.
   * Defaults to the standard acid palette (6 colours).
   */
  colors?: string[];
  /** Bar thickness in cqi units. Default: ~3.33 (20% of one grid square). */
  thickness?: number;
  /**
   * Vertical position within the Cell.
   * 'start'  — top edge of cell (default)
   * 'center' — vertically centred (sits on the row mid-line)
   * 'end'    — bottom edge of cell (sits on the next row boundary)
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
 * Renders a thin horizontal colour-stripe bar.
 * Fills its parent cell — place inside a `<Cell>` to control position.
 *
 * @example
 * // Bar at the top of row 3
 * <Cell col={1} row={3} colSpan={6} zIndex={5}>
 *   <StripeBars />
 * </Cell>
 *
 * // Bar centred within row 5 (sits on the row 4/5 mid-line)
 * <Cell col={1} row={5} colSpan={6} zIndex={5}>
 *   <StripeBars verticalAlign="center" />
 * </Cell>
 *
 * // Bar at the bottom edge of row 4 (sits on the row 4/5 boundary)
 * <Cell col={1} row={4} colSpan={6} zIndex={5}>
 *   <StripeBars verticalAlign="end" />
 * </Cell>
 */
export default function StripeBars({
  colors = DEFAULT_COLORS,
  thickness = 100 / 6 * 0.2,
  verticalAlign = 'start',
}: StripeBarsProps) {
  const justifyMap = { start: 'flex-start', center: 'center', end: 'flex-end' };

  return (
    <div
      data-component="StripeBars"
      className="flex flex-col w-full h-full pointer-events-none"
      style={{ justifyContent: justifyMap[verticalAlign] }}
    >
      <div className="flex w-full" style={{ height: `${thickness}cqi`, flexShrink: 0 }}>
        {colors.map((color, i) => (
          <div key={i} style={{ flex: 1, background: color }} />
        ))}
      </div>
    </div>
  );
}
