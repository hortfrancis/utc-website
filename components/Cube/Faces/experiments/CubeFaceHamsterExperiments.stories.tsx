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
