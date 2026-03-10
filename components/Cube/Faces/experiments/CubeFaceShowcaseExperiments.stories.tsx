import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  ColorBlock,
  GradientBlock,
  GridLines,
  IconSingle,
  IconQuad,
  ImageBlock,
  StripeBars,
  TextBlock,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Showcase Experiments                                     */
/*                                                                     */
/*  Layout explorations for the Showcase cube face.                   */
/*  Each story explores a different way to represent the Showcase     */
/*  section on a single 6×6 FaceGrid.                                 */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Faces/Showcase',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Showcase cube face. 300px square frame. ' +
          'Explores ways to present the Showcase section on a 6×6 grid. ' +
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
/*  1 · DOCK STORIES                                                    */
/*  Full-bleed left crop of the Dock Stories LED artwork. Gradient     */
/*  fade bottom-right for text, "Showcase" label anchored bottom-left, */
/*  stripe bar divider, cyan accent corner.                            */
/* ------------------------------------------------------------------ */

// ─── 1 · Dock Stories ───────────────────────────────────────────────────────
export const DockStories: Story = {
  name: '1 – Dock Stories',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Full-face image — panned to the left of the artwork */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/images/work/dock-stories-02.webp"
          alt="Dock Stories LED installation"
          objectPosition="left center"
        />
      </Cell>

      {/* Bottom gradient for text legibility */}
      <Cell col={1} row={4} colSpan={6} rowSpan={3}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.85}
        />
      </Cell>

      {/* Top-left dark fade so grid lines read cleanly */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to bottom right"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Cyan accent corner — top-right */}
      <Cell col={6} row={1}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.7} />
      </Cell>

      {/* Stripe bar divider — R5 top edge */}
      <Cell col={1} row={5} colSpan={6} zIndex={1}>
        <StripeBars
          colors={[
            'var(--theme-cyan)',
            'var(--theme-magenta)',
            'var(--theme-orange)',
            'var(--theme-purple)',
            'var(--theme-green)',
            'var(--theme-cyan)',
          ]}
        />
      </Cell>

      {/* "Showcase" label — bottom-left */}
      <Cell col={1} row={5} colSpan={5} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={13}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          Showcase
        </TextBlock>
      </Cell>

      {/* Eyebrow label — top-left */}
      <Cell col={1} row={1} colSpan={3} zIndex={2}>
        <TextBlock
          fontSize={2.2}
          color="var(--theme-cyan)"
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.2em"
          alignHorizontal="start"
          alignVertical="start"
          padding={2}
        >
          UTC · Work
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · DOCK STORIES — SPLIT LABELS + ICONS                            */
/*  Story 1 evolved: subtle full-face gradient tint, "Showcase" on    */
/*  R5 and "Dock Stories" on R6, icon quad anchored top-right.        */
/* ------------------------------------------------------------------ */

// ─── 2 · Dock Stories — Split Labels + Icons ────────────────────────────────
export const DockStoriesSplitLabels: Story = {
  name: '2 – Dock Stories — Split Labels + Icons',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Full-face image — panned to the left of the artwork */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/images/work/dock-stories-02.webp"
          alt="Dock Stories LED installation"
          objectPosition="left center"
        />
      </Cell>

      {/* Subtle gradient tint over the whole face — unifies the palette */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <GradientBlock
          direction="to bottom right"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
          opacity={0.2}
        />
      </Cell>

      {/* Bottom gradient for text legibility */}
      <Cell col={1} row={3} colSpan={6} rowSpan={4}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.9}
        />
      </Cell>

      {/* Top-left dark fade so eyebrow reads cleanly */}
      {/* <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to bottom right"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell> */}

      {/* Cyan accent corner — top-right */}
      <Cell col={6} row={1}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.9} />
      </Cell>

      <Cell col={6} row={2}>
        <ColorBlock color="var(--theme-orange)" opacity={0.9} />
      </Cell>

      <Cell col={6} row={3}>
        <ColorBlock color="var(--theme-green)" opacity={0.9} />
      </Cell>

      <Cell col={6} row={1} colSpan={1} rowSpan={1} zIndex={2}>
        <IconSingle
          name="cube"
          color="var(--theme-black)"
          opacity={1}
          iconSize={8}
        />
      </Cell>

      <Cell col={6} row={2} colSpan={1} rowSpan={1} zIndex={2}>
        <IconSingle
          name="anchor"
          color="var(--theme-black)"
          opacity={1}
          iconSize={8}
        />
      </Cell>

      {/* footprints icon below */}
      <Cell col={6} row={3} colSpan={1} rowSpan={1} zIndex={2}>
        <IconSingle
          name="footprints"
          color="var(--theme-black)"
          opacity={1}
          iconSize={8}
        />
      </Cell>

      {/* Stripe bar divider — R5 top edge */}
      <Cell col={1} row={5} colSpan={6} zIndex={1}>
        <StripeBars
          colors={[
            'var(--theme-cyan)',
            'var(--theme-magenta)',
            'var(--theme-orange)',
            'var(--theme-purple)',
            'var(--theme-green)',
            'var(--theme-cyan)',
          ]}
        />
      </Cell>

      {/* "Showcase" eyebrow — row 5 */}
      <Cell col={1} row={5} colSpan={6} zIndex={2}>
        <TextBlock
          fontSize={7}
          color="var(--theme-cyan)"
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.1em"
          alignHorizontal="start"
          alignVertical="end"
          padding={3.5}
        >
          Showcase
        </TextBlock>
      </Cell>

      {/* "Dock Stories" hero label — row 6 */}
      <Cell col={1} row={5} colSpan={6} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={13}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.025em"
          alignHorizontal="start"
          alignVertical="end"
          padding={3.5}
        >
          Dock Stories
        </TextBlock>
      </Cell>

      {/* Eyebrow label — top-left */}
      {/* <Cell col={1} row={1} colSpan={3} zIndex={3}>
        <TextBlock
          fontSize={3}
          color="var(--theme-white)"
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.2em"
          alignHorizontal="start"
          alignVertical="start"
          padding={4}
        >
          UTC &gt; Work
        </TextBlock>
      </Cell> */}
    </FaceGrid>
  ),
};
