import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
  IconSingle,
} from '.';

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
  title: 'Cube/Face Primitives',
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
/*  STORIES                                                            */
/* ================================================================== */

/* ------------------------------------------------------------------ */
/*  1 · GRID LINES                                                     */
/*  Demonstrates the decorative GridLines overlay on a dark face.      */
/* ------------------------------------------------------------------ */

// ─── 1 · GridLines ─────────────────────────────────────────────────────────────
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

// ─── 2 · Cell Placement ────────────────────────────────────────────────────────
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

// ─── 3 · IconQuad ──────────────────────────────────────────────────────────────
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

// ─── 4 · TextBlock ─────────────────────────────────────────────────────────────
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

// ─── 5 · ImageBlock ────────────────────────────────────────────────────────────
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
/*  6 · GRADIENT BLOCK                                                 */
/*  Demonstrates GradientBlock as a standalone overlay.                */
/* ------------------------------------------------------------------ */

// ─── 6 · GradientBlock ─────────────────────────────────────────────────────────
export const GradientBlockDemo: Story = {
  name: '6 – GradientBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Full-face diagonal gradient — purple → cyan → transparent */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 50 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.6}
        />
      </Cell>

      {/* Cell-scoped gradient — magenta → orange */}
      <Cell col={1} row={5} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)' },
            { color: 'var(--theme-orange)' },
          ]}
        />
      </Cell>

      {/* Vertical gradient — green → transparent */}
      <Cell col={5} row={1} colSpan={2} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-green)' },
            { color: 'transparent' },
          ]}
          opacity={0.5}
        />
      </Cell>
    </FaceGrid>
  ),
};
