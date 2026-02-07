import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import Overlay from './Overlay';
import { Frame } from '../Frame';

const meta = {
  title: 'Atoms/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-viewport overlay with backdrop. Closes on backdrop click or Escape. Renders via portal.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default open overlay with simple text content.
 */
export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: (
      <div className="bg-theme-white p-8 rounded-lg text-theme-black text-lg font-bold">
        Overlay content
      </div>
    ),
  },
};

/**
 * Overlay with a Frame as the content container, matching the design system.
 */
export const WithFrame: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: (
      <Frame
        roundedCorners={['top-right']}
        className="bg-theme-white p-8 max-w-md"
      >
        <h2 className="text-2xl font-black text-theme-black mb-2">Section Title</h2>
        <p className="text-theme-black/70">
          This is an overlay using a Frame as the content container. Click the
          backdrop or press Escape to close.
        </p>
      </Frame>
    ),
  },
};

/**
 * Interactive story: toggle the overlay open and closed with a button.
 */
export const Interactive: Story = {
  render: function InteractiveOverlay() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex items-center justify-center h-screen bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-theme-black text-theme-white font-bold rounded-lg"
        >
          Open Overlay
        </button>

        <Overlay open={open} onClose={() => setOpen(false)}>
          <Frame
            roundedCorners={['top-right']}
            className="bg-theme-white p-8 max-w-md"
          >
            <h2 className="text-2xl font-black text-theme-black mb-4">
              Hello!
            </h2>
            <p className="text-theme-black/70 mb-4">
              Click the backdrop or press Escape to close this overlay.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-theme-black text-theme-white font-bold rounded"
            >
              Close
            </button>
          </Frame>
        </Overlay>
      </div>
    );
  },
  args: { open: false, onClose: () => {}, children: null },
};
