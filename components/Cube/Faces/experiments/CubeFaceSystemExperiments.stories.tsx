import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import Icon from '../../../Icon/Icon';
import type { IconName } from '../../../Icon/Icon';
import type { IconWeight } from '../../../Icon/Icon';

/* ================================================================== */
/*                                                                     */
/*  Cube Face System Experiments                                       */
/*                                                                     */
/*  Modular, reusable primitives for composing cube face layouts.      */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/*  Primitives:                                                        */
/*    <Cell>       — grid positioning (col, row, spans)                */
/*    <GridLines>  — decorative 6×6 border overlay                     */
/*    <ColorBlock> — solid colour fill                                 */
/*    <ImageBlock> — image with optional gradient mask                 */
/*    <TextBlock>  — cqi-sized text                                    */
/*    <IconQuad>   — 4 icons in one cell with + divider                */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Face System',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modular primitives for cube face layouts. 300px square frame. ' +
          'All sizing uses cqi units — 1cqi = 1% of the face width/height. ' +
          'One grid cell ≈ 16.67cqi.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-75 h-75 overflow-hidden rounded border border-theme-black/20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* ================================================================== */
/*  PRIMITIVES                                                         */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  Cell                                                               */
/*  Core positioning primitive. Places children on the 6×6 grid.       */
/* ------------------------------------------------------------------ */

interface CellProps {
  /** Column start (1–6). */
  col: number;
  /** Row start (1–6). */
  row: number;
  /** Number of columns to span (default 1). */
  colSpan?: number;
  /** Number of rows to span (default 1). */
  rowSpan?: number;
  /** Optional className on the cell div. */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Grid positioning primitive. Renders a `<div>` placed at the specified
 * column/row with the given span. Use inside `<FaceGrid>`.
 *
 * Full-face usage: `<Cell col={1} row={1} colSpan={6} rowSpan={6}>`
 * — or equivalently, set `gridColumn: '1 / -1'` manually.
 */
function Cell({
  col,
  row,
  colSpan = 1,
  rowSpan = 1,
  className,
  children,
}: CellProps) {
  return (
    <div
      className={className}
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GridLines                                                          */
/*  Decorative 6×6 border overlay for visual structure.                */
/* ------------------------------------------------------------------ */

interface GridLinesProps {
  /** Border colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Border opacity (0–1). Default: 0.2. */
  opacity?: number;
}

/**
 * Renders a 6×6 grid of bordered cells as a decorative overlay.
 * Spans the full face. Place early in the DOM to layer behind content.
 */
function GridLines({ color = 'var(--theme-white)', opacity = 0.2 }: GridLinesProps) {
  return (
    <div
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

/* ------------------------------------------------------------------ */
/*  ColorBlock                                                         */
/*  Solid colour fill for a cell.                                      */
/* ------------------------------------------------------------------ */

interface ColorBlockProps {
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
function ColorBlock({ color, opacity = 1, className }: ColorBlockProps) {
  return (
    <div
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

/* ------------------------------------------------------------------ */
/*  ImageBlock                                                         */
/*  Image layer with optional gradient mask.                           */
/* ------------------------------------------------------------------ */

const MASK_GRADIENTS: Record<string, string> = {
  'fade-down': 'linear-gradient(to bottom, black 0%, transparent 100%)',
  'fade-up': 'linear-gradient(to top, black 0%, transparent 100%)',
  'fade-left': 'linear-gradient(to left, black 0%, transparent 100%)',
  'fade-right': 'linear-gradient(to right, black 0%, transparent 100%)',
};

interface ImageBlockProps {
  /** Image source URL. */
  src: string;
  /** Alt text. */
  alt: string;
  /** Gradient mask direction. Default: none. */
  mask?: 'fade-down' | 'fade-up' | 'fade-left' | 'fade-right';
  /** CSS object-fit. Default: 'cover'. */
  objectFit?: React.CSSProperties['objectFit'];
  /** Opacity (0–1). Default: 1. */
  opacity?: number;
}

/**
 * Image that fills its parent cell. Supports directional gradient masks
 * for fade effects. Typically used inside a full-spanning `<Cell>`.
 */
function ImageBlock({
  src,
  alt,
  mask,
  objectFit = 'cover',
  opacity = 1,
}: ImageBlockProps) {
  const maskValue = mask ? MASK_GRADIENTS[mask] : undefined;

  return (
    <div
      className="w-full h-full"
      style={{
        opacity,
        ...(maskValue && {
          maskImage: maskValue,
          WebkitMaskImage: maskValue,
        }),
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full"
        style={{ objectFit }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TextBlock                                                          */
/*  CQI-sized text element for face typography.                        */
/* ------------------------------------------------------------------ */

interface TextBlockProps {
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
function TextBlock({
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

/* ------------------------------------------------------------------ */
/*  IconQuad                                                           */
/*  Four icons arranged in a 2×2 layout within a single grid cell.     */
/*  Optionally shows a thin Phosphor plus icon as a centre divider.    */
/* ------------------------------------------------------------------ */

interface IconQuadProps {
  /** Icons for each quadrant. Omit a key for an empty quadrant. */
  icons: {
    tl?: IconName;
    tr?: IconName;
    bl?: IconName;
    br?: IconName;
  };
  /** Centre all icons within their quadrants instead of anchoring to corners. Default: false. */
  centered?: boolean;
  /** Show the plus divider in the centre. Default: true. */
  showDivider?: boolean;
  /** Icon colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Phosphor weight for the four icons. Default: 'fill'. */
  weight?: IconWeight;
  /** Overall opacity (0–1). Default: 1. */
  opacity?: number;
  /** Icon size in cqi units. Default: 5. */
  iconSize?: number;
  /** Divider size as a percentage of the cell (0–100). Default: 50. */
  dividerSize?: number;
  /** Divider opacity (0–1). Default: 0.5. */
  dividerOpacity?: number;
  /** Phosphor weight for the divider. Default: 'thin'. */
  dividerWeight?: IconWeight;
  /** Divider colour. Default: inherits from `color`. */
  dividerColor?: string;
}

/**
 * Four icons in a 2×2 layout within one grid cell, with an optional
 * Phosphor `plus` icon centred as a visual divider. Icon sizing uses
 * cqi units for responsive scaling.
 *
 * The component fills its parent cell. Use inside `<Cell>`.
 */
function IconQuad({
  icons,
  centered = false,
  showDivider = true,
  color = 'var(--theme-white)',
  weight = 'fill',
  opacity = 1,
  iconSize = 5,
  dividerSize = 50,
  dividerOpacity = 0.5,
  dividerWeight = 'thin',
  dividerColor,
}: IconQuadProps) {
  const positions = ['tl', 'tr', 'bl', 'br'] as const;

  const alignClasses: Record<string, string> = {
    tl: 'items-start justify-start',
    tr: 'items-start justify-end',
    bl: 'items-end justify-start',
    br: 'items-end justify-end',
    center: 'items-center justify-center',
  };

  return (
    <div
      className="relative grid grid-cols-2 grid-rows-2 w-full h-full"
      style={{ opacity }}
    >
      {positions.map((pos) => {
        const name = icons[pos];
        return (
          <div key={pos} className={`flex ${centered ? alignClasses.center : alignClasses[pos]} p-[1.5cqi]`}>
            {name && (
              <div
                className="flex items-center justify-center"
                style={{ width: `${iconSize}cqi`, height: `${iconSize}cqi` }}
              >
                <Icon
                  name={name}
                  size={999}
                  color={color}
                  weight={weight}
                  className="[&>svg]:w-full [&>svg]:h-full"
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Centre divider — Phosphor plus icon, sized as % of the cell */}
      {showDivider && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          style={{
            width: `${dividerSize}%`,
            height: `${dividerSize}%`,
            opacity: dividerOpacity,
          }}
        >
          <Icon
            name="plus"
            size={999}
            color={dividerColor ?? color}
            weight={dividerWeight}
            className="[&>svg]:w-full [&>svg]:h-full"
          />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  IconSingle                                                         */
/*  A single icon filling a grid cell. No divider, larger presence.    */
/* ------------------------------------------------------------------ */

interface IconSingleProps {
  /** Icon name from the registry. */
  name: IconName;
  /** Icon colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Phosphor weight. Default: 'fill'. */
  weight?: IconWeight;
  /** Overall opacity (0–1). Default: 1. */
  opacity?: number;
  /** Icon size in cqi units. Default: 12 (~72% of one cell). */
  iconSize?: number;
}

/**
 * A single icon centred within a grid cell. Sized larger than IconQuad
 * icons for when a cell should feature one prominent icon.
 * Use inside `<Cell>`.
 */
function IconSingle({
  name,
  color = 'var(--theme-white)',
  weight = 'fill',
  opacity = 1,
  iconSize = 12,
}: IconSingleProps) {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ opacity }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: `${iconSize}cqi`, height: `${iconSize}cqi` }}
      >
        <Icon
          name={name}
          size={999}
          color={color}
          weight={weight}
          className="[&>svg]:w-full [&>svg]:h-full"
        />
      </div>
    </div>
  );
}

/* ================================================================== */
/*  STORIES                                                            */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  1 · GRID LINES                                                     */
/*  Demonstrates the decorative GridLines overlay on a dark face.      */
/* ------------------------------------------------------------------ */

export const GridLinesDemo: Story = {
  name: '1 – GridLines',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · CELL PLACEMENT                                                 */
/*  Coloured blocks at various positions showing the grid system.      */
/* ------------------------------------------------------------------ */

export const CellPlacement: Story = {
  name: '2 – Cell Placement',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Single cell — top-left */}
      <Cell col={1} row={1}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>

      {/* 2×1 span — top-right area */}
      <Cell col={5} row={1} colSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>

      {/* 2×2 block — centre */}
      <Cell col={3} row={3} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>

      {/* Full row — bottom */}
      <Cell col={1} row={6} colSpan={6}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.6} />
      </Cell>

      {/* 1×3 column — left side */}
      <Cell col={1} row={2} rowSpan={3}>
        <ColorBlock color="var(--theme-green)" opacity={0.5} />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  3 · ICON QUAD                                                      */
/*  Four-icon cells with plus divider, various configurations.         */
/* ------------------------------------------------------------------ */

export const IconQuadDemo: Story = {
  name: '3 – IconQuad',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* All four quadrants filled */}
      <Cell col={1} row={1}>
        <IconQuad
          icons={{
            tl: 'google-cardboard',
            tr: 'virtual-reality',
            bl: 'cube-focus',
            br: 'globe',
          }}
        />
      </Cell>

      {/* Two icons, no divider */}
      <Cell col={3} row={1}>
        <IconQuad
          icons={{ tl: 'hard-hat', br: 'blueprint' }}
          showDivider={false}
          opacity={0.6}
        />
      </Cell>

      {/* Single icon — prominent, no quad */}
      <Cell col={5} row={1}>
        <IconSingle
          name="rocket"
          color="var(--theme-cyan)"
        />
      </Cell>

      {/* Different weight */}
      <Cell col={1} row={3}>
        <IconQuad
          icons={{
            tl: 'camera',
            tr: 'paintbrush',
            bl: 'code',
            br: 'browsers',
          }}
          weight="light"
          color="var(--theme-orange)"
          dividerColor="var(--theme-orange)"
        />
      </Cell>

      {/* Large icons — multi-cell span */}
      <Cell col={3} row={3} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{
            tl: 'cube',
            tr: 'atom',
            bl: 'lightning',
            br: 'sparkle',
          }}
          iconSize={10}
          centered
          color="var(--theme-purple)"
          dividerColor="var(--theme-purple)"
        />
      </Cell>

      {/* Single icon variants — row 5 */}
      <Cell col={1} row={5}>
        <IconSingle
          name="globe"
          color="var(--theme-green)"
          weight="duotone"
        />
      </Cell>
      <Cell col={2} row={5}>
        <IconSingle
          name="cube-transparent"
          color="var(--theme-green)"
          opacity={0.6}
          iconSize={10}
        />
      </Cell>

      {/* Subtle background icons */}
      <Cell col={5} row={5} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{
            tl: 'newspaper',
            tr: 'megaphone',
            bl: 'chat',
            br: 'rss',
          }}
          opacity={0.3}
          color="var(--theme-magenta)"
          dividerColor="var(--theme-magenta)"
        />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  4 · TEXT BLOCK                                                     */
/*  CQI-sized text at various scales.                                  */
/* ------------------------------------------------------------------ */

export const TextBlockDemo: Story = {
  name: '4 – TextBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Large heading — spans 3 cols */}
      <Cell col={1} row={1} colSpan={3} rowSpan={2}>
        <TextBlock fontSize={20} padding={2}>
          XR
        </TextBlock>
      </Cell>

      {/* Mono uppercase — smaller */}
      <Cell col={4} row={1} colSpan={3}>
        <TextBlock
          fontSize={5}
          mono
          uppercase
          letterSpacing="0.15em"
          fontWeight={750}
          opacity={0.7}
          padding={1.5}
          align="start"
        >
          Extended Reality
        </TextBlock>
      </Cell>

      {/* Body-scale text */}
      <Cell col={1} row={4} colSpan={6} rowSpan={2}>
        <TextBlock
          fontSize={3.5}
          fontWeight={400}
          letterSpacing="0"
          opacity={0.6}
          padding={2}
          align="start"
        >
          Immersive experiences bridging
          <br />
          virtual and physical worlds.
        </TextBlock>
      </Cell>

      {/* Accent colour */}
      <Cell col={1} row={6} colSpan={2}>
        <TextBlock
          fontSize={4}
          color="var(--theme-cyan)"
          mono
          uppercase
          letterSpacing="0.1em"
          padding={1.5}
          align="start"
        >
          VR · AR
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  5 · IMAGE BLOCK                                                    */
/*  Image with gradient mask options.                                  */
/* ------------------------------------------------------------------ */

export const ImageBlockDemo: Story = {
  name: '5 – ImageBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Full-face image with fade-down mask */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/images/experiments/vr02.png"
          alt="VR headset"
          mask="fade-down"
        />
      </Cell>

      <GridLines opacity={0.15} />

      {/* Text on top of the faded image */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <TextBlock fontSize={22.5} padding={2}>
          XR
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  6 · FULL COMPOSITION                                               */
/*  Recreates the XR layout from CubeFaceExperiments Story 15          */
/*  using the new system primitives.                                   */
/* ------------------------------------------------------------------ */

export const FullComposition: Story = {
  name: '6 – Full Composition (XR)',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* Layer 1: Grid lines */}
      <GridLines />

      {/* Layer 2: VR image — full face, fades top to bottom */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/images/experiments/vr02.png"
          alt="VR headset"
          mask="fade-down"
        />
      </Cell>

      {/* Layer 3: Icons + Typography */}

      {/* Top-left row of icons — C1/R1, C2/R1, C3/R1 */}
      <Cell col={1} row={1}>
        <IconQuad icons={{ tl: 'google-cardboard' }} showDivider={false} />
      </Cell>
      <Cell col={2} row={1}>
        <IconQuad icons={{ tl: 'cube-focus' }} showDivider={false} />
      </Cell>
      <Cell col={3} row={1}>
        <IconQuad icons={{ tl: 'virtual-reality' }} showDivider={false} />
      </Cell>

      {/* Bottom-right quad of icons — C5-C6/R3-R4 */}
      <Cell col={5} row={3}>
        <IconQuad icons={{ br: 'crane' }} showDivider={false} opacity={0.6} />
      </Cell>
      <Cell col={6} row={3}>
        <IconQuad icons={{ br: 'hard-hat' }} showDivider={false} opacity={0.6} />
      </Cell>
      <Cell col={5} row={4}>
        <IconQuad icons={{ br: 'cube' }} showDivider={false} opacity={0.6} />
      </Cell>
      <Cell col={6} row={4}>
        <IconQuad icons={{ br: 'blueprint' }} showDivider={false} opacity={0.6} />
      </Cell>

      {/* XR — fills C1-C2 / R5-R6 */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <TextBlock fontSize={22.5} padding={2}>
          XR
        </TextBlock>
      </Cell>

      {/* Extended Reality — C3-C6 / R5 */}
      <Cell col={3} row={5} colSpan={4}>
        <TextBlock
          fontSize={7}
          fontWeight={750}
          mono
          uppercase
          letterSpacing="0.1em"
          opacity={0.7}
          padding={1.5}
          align="start"
        >
          Extended Reality
        </TextBlock>
      </Cell>

      {/* VR + AR labels — C3-C5 / R6 */}
      <Cell col={3} row={6} colSpan={3}>
        <div
          className="flex items-center w-full h-full select-none"
          style={{ paddingInline: '1.5cqi', fontSize: '3cqi' }}
        >
          <span>
            <span className="font-bold text-theme-white/80">VR: </span>
            <span className="text-theme-white/60">Virtual Reality</span>
            <br />
            <span className="font-bold text-theme-white/80">AR: </span>
            <span className="text-theme-white/60">Augmented Reality</span>
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};
