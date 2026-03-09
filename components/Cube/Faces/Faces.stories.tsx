import type { Meta, StoryObj } from '@storybook/nextjs';
import { XR, Work, Collaborators, AI, Showcase, Hamster } from './index';

/**
 * Cube face components. Each face is rendered inside the 3D cube and uses
 * the shared Layout (full size, centered, dark bg, hover dim).
 * Shown here in a square frame to match the cube face aspect.
 */
const meta = {
  title: 'Cube/Faces',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Content components for each face of the Cube. Rendered in a square frame to match the cube face aspect.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[300px] h-[300px] overflow-hidden rounded border border-theme-black/20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const FaceXR: Story = {
  name: 'XR (top)',
  render: () => <XR />,
};

export const FaceWork: Story = {
  name: 'Work (front)',
  render: () => <Work />,
};

export const FaceCollaborators: Story = {
  name: 'Collaborators (left)',
  render: () => <Collaborators />,
};

export const FaceAI: Story = {
  name: 'AI (back)',
  render: () => <AI />,
};

export const FaceShowcase: Story = {
  name: 'Showcase (right)',
  render: () => <Showcase />,
};

export const FaceHamster: Story = {
  name: 'Hamster (bottom)',
  render: () => <Hamster />,
};
