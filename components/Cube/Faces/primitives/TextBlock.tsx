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
  /** Horizontal alignment (justifyContent). Default: 'center'. */
  alignHorizontal?: 'start' | 'center' | 'end';
  /** Vertical alignment (alignItems). Default: 'center'. */
  alignVertical?: 'start' | 'center' | 'end';
  /** Padding in cqi units. Default: 0. */
  padding?: number;
  /** Text alignment within the block (for multi-line text). Default: 'left'. */
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  /** Line height (unitless multiplier of font size). Default: 1.15 (avoids clipping italic/descenders). */
  lineHeight?: number;
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
  alignHorizontal = 'center',
  alignVertical = 'center',
  padding = 0,
  textAlign = 'left',
  lineHeight = 1.15,
  children,
}: TextBlockProps) {
  const alignMap = { start: 'flex-start', center: 'center', end: 'flex-end' };

  return (
    <div
      data-component="TextBlock"
      className="flex w-full h-full select-none"
      style={{
        alignItems: alignMap[alignVertical],
        justifyContent: alignMap[alignHorizontal],
        padding: padding ? `${padding}cqi` : undefined,
      }}
    >
      <span
        className="leading-none min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
        style={{
          fontSize: `${fontSize}cqi`,
          color,
          opacity,
          fontWeight,
          letterSpacing,
          textAlign,
          lineHeight,
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
