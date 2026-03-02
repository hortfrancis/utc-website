export interface VerticalTextBlockProps {
  /**
   * Rotation direction.
   * 'up'   — text reads bottom-to-top (rotate -90deg).
   * 'down' — text reads top-to-bottom (rotate 90deg). Default.
   */
  direction?: 'up' | 'down';
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
  /**
   * Alignment along the vertical axis of the cell (i.e. which end of the
   * column the text sits at). Default: 'center'.
   *
   * Because the text is rotated, this maps to the horizontal axis of the
   * rotated span — 'start' anchors to the top of the cell, 'end' to the
   * bottom.
   */
  align?: 'start' | 'center' | 'end';
  /** Line height (unitless multiplier). Default: 1. */
  lineHeight?: number;
  children?: React.ReactNode;
}

/**
 * CQI-scaled text rendered vertically (rotated sideways). Fills its parent
 * Cell. Use `direction="up"` for bottom-to-top text (most common for left
 * margin labels) or `direction="down"` for top-to-bottom.
 *
 * Implementation note: the outer wrapper is sized to fill the cell normally
 * (w-full h-full). An inner absolute container is rotated and its dimensions
 * are swapped (width = cell height, height = cell width) so the text always
 * fills the full column height after rotation without overflowing.
 *
 * @example
 * <Cell col={1} row={1} rowSpan={6}>
 *   <VerticalTextBlock fontSize={7} direction="up" mono uppercase letterSpacing="0.15em">
 *     URBAN TECH
 *   </VerticalTextBlock>
 * </Cell>
 */
export default function VerticalTextBlock({
  direction = 'down',
  fontSize,
  color = 'var(--theme-white)',
  opacity = 1,
  fontWeight = 900,
  letterSpacing = '-0.04em',
  mono = false,
  uppercase = false,
  align = 'center',
  lineHeight = 1,
  children,
}: VerticalTextBlockProps) {
  const rotation = direction === 'up' ? -90 : 90;
  const alignMap = { start: 'flex-start', center: 'center', end: 'flex-end' };

  return (
    <div
      data-component="VerticalTextBlock"
      className="relative w-full h-full overflow-hidden select-none"
    >
      {/*
       * The rotated inner div uses absolute positioning so it can swap its
       * own width/height dimensions. `translate(-50%, -50%)` + `top/left 50%`
       * keeps the pivot at the cell centre regardless of direction.
       */}
      <div
        className="absolute flex items-center pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          width: '100cqb',   /* cell height becomes our width */
          height: '100cqi',  /* cell width becomes our height */
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          justifyContent: alignMap[align],
        }}
      >
        <span
          className="leading-none whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            fontSize: `${fontSize}cqi`,
            color,
            opacity,
            fontWeight,
            letterSpacing,
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
    </div>
  );
}
