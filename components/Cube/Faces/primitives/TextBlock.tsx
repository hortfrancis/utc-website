export interface TextBlockProps {
  /** Font size in cqi units. */
  fontSize: number;
  /** CSS colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Text opacity (0–1). Default: 1. */
  opacity?: number;
  /** Font weight (numeric). Default: 900. */
  fontWeight?: number;
  /** Letter spacing. Default: '-0.04em'. */
  letterSpacing?: string;
  /** Enable monospace axis (Recursive MONO 1, CASL 0). */
  mono?: boolean;
  /** Uppercase transform. */
  uppercase?: boolean;
  /** Flex alignment within the cell. Default: 'center'. */
  align?: 'start' | 'center' | 'end';
  /** Padding in cqi units. Default: 0. */
  padding?: number;
  children?: React.ReactNode;
}

/**
 * CQI-scaled text element. Renders a flex container with text styled
 * using container query units. Fills its parent cell.
 */
export default function TextBlock({
  fontSize,
  color = 'var(--theme-white)',
  opacity = 1,
  fontWeight = 900,
  letterSpacing = '-0.04em',
  mono = false,
  uppercase = false,
  align = 'center',
  padding = 0,
  children,
}: TextBlockProps) {
  const alignMap = { start: 'flex-start', center: 'center', end: 'flex-end' };

  return (
    <div
      data-component="TextBlock"
      className="flex w-full h-full select-none"
      style={{
        alignItems: alignMap[align],
        justifyContent: alignMap[align],
        padding: padding ? `${padding}cqi` : undefined,
      }}
    >
      <span
        className="leading-none"
        style={{
          fontSize: `${fontSize}cqi`,
          color,
          opacity,
          fontWeight,
          letterSpacing,
          textTransform: uppercase ? 'uppercase' : undefined,
          ...(mono && {
            fontVariationSettings: "'MONO' 1, 'CASL' 0",
          }),
        }}
      >
        {children}
      </span>
    </div>
  );
}
