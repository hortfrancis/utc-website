import type { Meta, StoryObj } from '@storybook/react';
import FaceGrid from '../FaceGrid';

/**
 * Experiments for cube face designs. Each story is a self-contained
 * design variant — review in isolation, then combine elements that work.
 */
const meta = {
  title: 'Experiments/Cube Faces',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Design experiments for cube face content. Rendered in a square frame matching the cube face aspect ratio.',
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

export const HelloExperiment: Story = {
  name: 'Hello Experiment',
  render: () => (
    <FaceGrid>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-theme-cyan font-black text-2xl select-none">
          Experiment!
        </span>
      </div>
    </FaceGrid>
  ),
};
