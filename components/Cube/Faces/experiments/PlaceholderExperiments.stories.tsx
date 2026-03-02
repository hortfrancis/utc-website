import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import { Cell, TextBlock, StripeBars, GridLines, IconQuad } from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Placeholder Experiments                                  */
/*                                                                     */
/*  Layout explorations for placeholder cube faces.                    */
/*  Each story explores a different way to represent placeholder       */
/*  content on a single 6×6 FaceGrid.                                  */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Faces/Placeholder',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for placeholder cube faces. 300px square frame. ' +
          'Explores ways to represent placeholder content on a 6×6 grid. ' +
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

// ─── 1 · Placeholder ────────────────────────────────────────────────────────
export const Basic: Story = {
  name: '1 – Basic',
  render: () => (
    <FaceGrid>
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <TextBlock fontSize={18} color="var(--theme-cyan)" fontWeight={700} align="center" padding={4}>
          Placeholder
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · MINIMAL CORNER                                                 */
/*  Simple text only: "NEWS" bottom-left, "Newsletter" / "Videos"     */
/*  top-right. Add elements from this baseline.                         */
/* ------------------------------------------------------------------ */

// ─── 2 · Minimal Corner ─────────────────────────────────────────────────────
export const MultipleElements: Story = {
  name: '2 – Multiple Elements',
  render: () => (
    <FaceGrid>
      <GridLines color="var(--theme-cyan)" opacity={0.2} />
      {/* Top-left icons */}
      <Cell col={1} row={1}>
        <IconQuad
          icons={{ tl: 'cube', tr: 'sparkle', bl: 'rocket' }}
          showDivider={false}
          color="var(--theme-cyan)"
        />
      </Cell>
      {/* Top-right labels */}
      <Cell col={5} row={1} colSpan={2}>
        <div className="flex flex-col items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="text-theme-cyan/50 font-bold tracking-wider" style={{ fontSize: '5cqi' }}>Placeholder</span>
          <span className="text-theme-orange/50 font-bold tracking-wider mt-0.5" style={{ fontSize: '5cqi' }}>Placeholder</span>
          <span className="text-theme-green font-bold tracking-wider mt-0.5" style={{ fontSize: '5cqi' }}>Placeholder</span>
        </div>
      </Cell>

      {/* Hero type — bottom-left */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2}>
        <TextBlock
          fontSize={16}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          align="start"
          padding={2}
        >
          Placeholder
        </TextBlock>
      </Cell>

      <Cell col={1} row={5} colSpan={6} zIndex={5}>
        <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} verticalAlign="center" />
      </Cell>
    </FaceGrid>
  ),
};
