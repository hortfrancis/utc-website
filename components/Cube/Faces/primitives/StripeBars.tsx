export interface StripeBarDef {
  /** Vertical position as a row boundary (e.g. 2 = between row 2 and 3). */
  row: number;
  /** Ordered list of CSS colours for the stripe segments. */
  colors: string[];
}

export interface StripeBarsProps {
  /**
   * Array of stripe bar definitions. Each bar is a thin horizontal
   * line placed at the boundary between grid rows.
   *
   * Defaults to two bars at rows 2 and 4 with the standard acid palette.
   */
  bars?: StripeBarDef[];
  /** Bar thickness in cqi units. Default: ~3.33 (20% of one grid square). */
  thickness?: number;
  /** z-index for the overlay layer. Default: 5. */
  zIndex?: number;
}

const DEFAULT_BARS: StripeBarDef[] = [
  {
    row: 2,
    colors: [
      'var(--theme-purple)',
      'var(--theme-cyan)',
      'var(--theme-orange)',
      'var(--theme-green)',
      'var(--theme-magenta)',
      'var(--theme-cyan)',
    ],
  },
  {
    row: 4,
    colors: [
      'var(--theme-green)',
      'var(--theme-magenta)',
      'var(--theme-orange)',
      'var(--theme-purple)',
      'var(--theme-cyan)',
      'var(--theme-orange)',
    ],
  },
];

/**
 * Renders thin horizontal colour-stripe bars across the full face width.
 * Designed to sit inside a FaceGrid as a decorative overlay.
 * Each bar is a flex row of equal-width colour segments.
 */
export default function StripeBars({
  bars = DEFAULT_BARS,
  thickness = 100 / 6 * 0.2,
  zIndex = 5,
}: StripeBarsProps) {
  return (
    <div
      data-component="StripeBars"
      style={{
        gridColumn: '1 / -1',
        gridRow: '1 / -1',
        zIndex,
        pointerEvents: 'none',
      }}
    >
      <div className="relative w-full h-full">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 flex"
            style={{
              top: `calc(100% * ${bar.row} / 6)`,
              height: `${thickness}cqi`,
            }}
          >
            {bar.colors.map((color, j) => (
              <div key={j} style={{ flex: 1, background: color }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
