import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconSingle,
  StripeBars,
  VerticalTextBlock,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Hamster Experiments                                      */
/*                                                                     */
/*  Layout explorations for the Haify the Hamster cube face.          */
/*  Each story explores a different way to feature our beloved         */
/*  mascot on a single 6×6 FaceGrid.                                  */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const IMG = {
  haify: '/images/cube/haify-hamster.jpeg',
} as const;

const meta = {
  title: 'Experiments/Cube Faces/Hamster',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Haify the Hamster cube face. 300px square frame. ' +
          'Explores ways to feature our mascot on a 6×6 grid. ' +
          'All sizing uses cqi units — 1cqi = 1% of the face width/height.',
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
/*  1 · HAIFY FULL BLEED                                               */
/* ------------------------------------------------------------------ */

// ─── 1 · Haify Full Bleed ───────────────────────────────────────────────────
export const HaifyFullBleed: Story = {
  name: '1 – Haify Image',
  render: () => (
    <FaceGrid>
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src={IMG.haify} alt="Haify the Hamster" />
      </Cell>

      <Cell col={1} row={6} colSpan={5} zIndex={3}>
        <TextBlock fontSize={14} color="var(--theme-white)" fontWeight={700} padding={2}>
          Haify
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 2 · Acid Margin Label ───────────────────────────────────────────────────
export const AcidMarginLabel: Story = {
  name: '2 – Acid Margin Label',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Full bleed image, slightly faded */}
      <Cell col={2} row={1} colSpan={5} rowSpan={6}>
        <ImageBlock src={IMG.haify} alt="Haify the Hamster" mask="fade-left" opacity={0.85} />
      </Cell>

      {/* Cyan vertical label running the full left column */}
      <Cell col={1} row={1} rowSpan={6} zIndex={3}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={1} row={1} rowSpan={6} zIndex={4}>
        <VerticalTextBlock fontSize={5} direction="up" mono uppercase letterSpacing="0.2em" color="var(--theme-black)">
          HAIFY THE HAMSTER
        </VerticalTextBlock>
      </Cell>

      {/* Name over image, bottom right */}
      <Cell col={3} row={5} colSpan={4} rowSpan={2} zIndex={3}>
        <TextBlock fontSize={16} fontWeight={900} alignHorizontal="end" alignVertical="end" padding={2}>
          Haify
        </TextBlock>
      </Cell>

      <GridLines opacity={0.06} />
      <Cell col={1} row={1} colSpan={6} zIndex={5}>
        <StripeBars />
      </Cell>
    </FaceGrid>
  ),
};

// ─── 3 · Duotone + Running Type ──────────────────────────────────────────────
export const DuotoneRunningType: Story = {
  name: '3 – Duotone + Running Type',
  render: () => (
    <FaceGrid className="bg-theme-magenta!">
      {/* Multiply-blended image gives a duotone look against the magenta bg */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock src={IMG.haify} alt="Haify the Hamster" mixBlendMode="multiply" opacity={0.9} />
      </Cell>

      {/* Dark overlay at the bottom for text legibility */}
      <Cell col={1} row={4} colSpan={6} rowSpan={3} zIndex={2}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'transparent', position: 0 },
            { color: 'var(--theme-black)', position: 100 },
          ]}
          opacity={0.7}
        />
      </Cell>

      {/* Left column: thin vertical label going up */}
      <Cell col={1} row={1} rowSpan={5} zIndex={4}>
        <VerticalTextBlock fontSize={3.5} direction="up" mono uppercase letterSpacing="0.25em" opacity={0.5}>
          UTC MASCOT
        </VerticalTextBlock>
      </Cell>

      {/* Right column: thin vertical label going down */}
      <Cell col={6} row={2} rowSpan={4} zIndex={4}>
        <VerticalTextBlock fontSize={3.5} direction="down" mono uppercase letterSpacing="0.25em" opacity={0.4}>
          2025
        </VerticalTextBlock>
      </Cell>

      {/* Large name */}
      <Cell col={1} row={5} colSpan={6} rowSpan={2} zIndex={5}>
        <TextBlock fontSize={20} fontWeight={900} alignHorizontal="center" alignVertical="end" padding={2}>
          Haify
        </TextBlock>
      </Cell>

      <Cell col={1} row={1} colSpan={6} zIndex={6}>
        <StripeBars thickness={2} />
      </Cell>
    </FaceGrid>
  ),
};

// ─── 4 · Quad Split ──────────────────────────────────────────────────────────
export const QuadSplit: Story = {
  name: '4 – Quad Split',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Top-left: image cropped to top half */}
      <Cell col={1} row={1} colSpan={5} rowSpan={3}>
        <ImageBlock src={IMG.haify} alt="Haify the Hamster" objectPosition="top center" mask="fade-down" />
      </Cell>

      {/* Bottom-right: image cropped to bottom half, inverted fade */}
      <Cell col={2} row={4} colSpan={5} rowSpan={3}>
        <ImageBlock src={IMG.haify} alt="Haify the Hamster" objectPosition="bottom center" mask="fade-up" opacity={0.7} />
      </Cell>

      {/* Right column: vertical accent stripe + label */}
      <Cell col={6} row={1} rowSpan={3} zIndex={3}>
        <ColorBlock color="var(--theme-orange)" opacity={0.9} />
      </Cell>
      <Cell col={6} row={1} rowSpan={3} zIndex={4}>
        <VerticalTextBlock fontSize={4} direction="down" mono uppercase letterSpacing="0.18em" color="var(--theme-black)">
          HAMSTER
        </VerticalTextBlock>
      </Cell>

      {/* Left column: vertical accent stripe + label */}
      <Cell col={1} row={4} rowSpan={3} zIndex={3}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.9} />
      </Cell>
      <Cell col={1} row={4} rowSpan={3} zIndex={4}>
        <VerticalTextBlock fontSize={4} direction="up" mono uppercase letterSpacing="0.18em" color="var(--theme-black)">
          HAIFY
        </VerticalTextBlock>
      </Cell>

      <GridLines opacity={0.08} />
    </FaceGrid>
  ),
};
