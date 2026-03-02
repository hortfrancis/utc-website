import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import { Cell, TextBlock } from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face News Experiments                                         */
/*                                                                     */
/*  Layout explorations for the News cube face.                        */
/*  Each story explores a different way to represent news,            */
/*  newsletter, and weekly videos on a single 6×6 FaceGrid.           */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Face News',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the News cube face. 300px square frame. ' +
          'Explores ways to represent news, newsletter, and weekly videos on a 6×6 grid. ' +
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
export const Placeholder: Story = {
  name: '1 – Placeholder',
  render: () => (
    <FaceGrid>
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <TextBlock fontSize={18} color="var(--theme-cyan)" fontWeight={700} align="center" padding={4}>
          News
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};
