export interface ColorBlockProps {
  /** CSS colour value or theme variable. */
  color: string;
  /** Opacity (0–1). Default: 1. */
  opacity?: number;
  /** Optional className. */
  className?: string;
}

/**
 * Fills its parent cell with a solid colour.
 */
export default function ColorBlock({
  color,
  opacity = 1,
  className,
}: ColorBlockProps) {
  return (
    <div
      data-component="ColorBlock"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: color,
        opacity,
      }}
    />
  );
}
