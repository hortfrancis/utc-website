import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import SectionDetail from './SectionDetail';
import type { FacePosition } from '../Cube/Cube';

const meta = {
  title: 'Organisms/SectionDetail',
  component: SectionDetail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Detail overlay shown when a cube face is tapped. Displays section info with a CTA link.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** XR section detail. */
export const XR: Story = {
  args: { face: 'top', onClose: () => {} },
};

/** Work section detail. */
export const Work: Story = {
  args: { face: 'front', onClose: () => {} },
};

/** Vision section detail. */
export const Vision: Story = {
  args: { face: 'left', onClose: () => {} },
};

/** News section detail. */
export const News: Story = {
  args: { face: 'back', onClose: () => {} },
};

/** Showcase section detail. */
export const Showcase: Story = {
  args: { face: 'right', onClose: () => {} },
};

/** Hamster easter egg. */
export const Hamster: Story = {
  args: { face: 'bottom', onClose: () => {} },
};

/**
 * Interactive: click buttons to open different section details.
 */
export const Interactive: Story = {
  render: function InteractiveSectionDetail() {
    const [face, setFace] = useState<FacePosition | null>(null);

    const faces: { pos: FacePosition; label: string }[] = [
      { pos: 'top', label: 'XR' },
      { pos: 'front', label: 'Work' },
      { pos: 'left', label: 'Vision' },
      { pos: 'back', label: 'News' },
      { pos: 'right', label: 'Showcase' },
      { pos: 'bottom', label: 'Hamster' },
    ];

    return (
      <div className="flex flex-wrap items-center justify-center gap-3 h-screen bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)">
        {faces.map(({ pos, label }) => (
          <button
            key={pos}
            type="button"
            onClick={() => setFace(pos)}
            className="px-4 py-2 bg-theme-black text-theme-white font-bold rounded"
          >
            {label}
          </button>
        ))}

        <SectionDetail face={face} onClose={() => setFace(null)} />
      </div>
    );
  },
  args: { face: null, onClose: () => {} },
};
