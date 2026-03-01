export interface GradientStop {
  /** CSS colour value or theme variable. */
  color: string;
  /** Position as a percentage (0–100). Optional — browser distributes evenly if omitted. */
  position?: number;
}

export interface GradientBlockProps {
  /** Gradient colour stops. At least 2 required. */
  stops: GradientStop[];
  /** CSS gradient direction. Default: 'to bottom'. */
  direction?: string;
  /** Opacity (0–1). Default: 1. */
  opacity?: number;
  /** Optional className. */
  className?: string;
}

/**
 * Fills its parent cell with a CSS linear gradient.
 * Use inside `<Cell>` for cell-scoped gradients, or full-spanning
 * for a face-wide colour overlay.
 */
export default function GradientBlock({
  stops,
  direction = 'to bottom',
  opacity = 1,
  className,
}: GradientBlockProps) {
  const stopsStr = stops
    .map((s) =>
      s.position !== undefined ? `${s.color} ${s.position}%` : s.color,
    )
    .join(', ');

  return (
    <div
      data-component="GradientBlock"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(${direction}, ${stopsStr})`,
        opacity,
      }}
    />
  );
}
