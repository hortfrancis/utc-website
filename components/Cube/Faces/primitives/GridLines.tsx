export interface GridLinesProps {
  /** Border colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Border opacity (0–1). Default: 0.2. */
  opacity?: number;
}

/**
 * Renders a 6×6 grid of bordered cells as a decorative overlay.
 * Spans the full face. Place early in the DOM to layer behind content.
 */
export default function GridLines({
  color = 'var(--theme-white)',
  opacity = 0.2,
}: GridLinesProps) {
  return (
    <div
      data-component="GridLines"
      className="grid grid-cols-6 grid-rows-6"
      style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
    >
      {Array.from({ length: 36 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: color,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
