import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import Cube from '@/components/Cube';
import SectionDetail from '@/components/SectionDetail';
import type { FacePosition } from './Cube';

/**
 * Interactive 3D cube component with drag-to-rotate and tap-to-navigate functionality.
 *
 * Features:
 * - Auto-spinning animation in idle state
 * - Drag with mouse or touch to rotate the cube
 * - Tap on any face to trigger face-specific actions
 * - Smooth animations and easing
 * - Tab visibility awareness (pauses when tab is hidden)
 */
const meta = {
  title: 'Organisms/Cube',
  component: Cube,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'An interactive CSS 3D cube used as a navigational menu. Drag to rotate, tap faces to interact. Uses pointer events for both mouse and touch support.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cube>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default cube with the built-in alert on face tap.
 *
 * Try dragging the cube to rotate it, or tap on any face to see an alert.
 * The cube automatically spins when idle, and smoothly returns to its attract pose after being released.
 */
export const Default: Story = {};

/**
 * Cube with SectionDetail overlay — mirrors the homepage behaviour.
 *
 * Tap a face to open the section detail overlay. Click the backdrop,
 * press Escape, or use the Close button to dismiss it.
 */
export const WithSectionDetail: Story = {
  render: function CubeWithSectionDetail() {
    const [activeFace, setActiveFace] = useState<FacePosition | null>(null);

    return (
      <>
        <Cube onFaceTap={(face) => setActiveFace(face)} />
        <SectionDetail
          face={activeFace}
          onClose={() => setActiveFace(null)}
        />
      </>
    );
  },
};
