import type { Meta, StoryObj } from '@storybook/react';
import Grid6x6 from './Grid6x6';
import type { GridSquare } from './types';

/**
 * 6×6 grid (36 squares). Each 2×2 block in the top-left corresponds to
 * one cell in the 3×3 grid — four small squares equal one large square.
 */
const meta = {
  title: 'Components/Grids/Grid6x6',
  component: Grid6x6,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A 6×6 grid of squares. Each 2×2 block maps to one cell in the 3×3 grid. Same square styling as Grid3x3.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'number', min: 0, max: 12, step: 1 },
      description: 'Gap between squares in pixels',
    },
  },
} satisfies Meta<typeof Grid6x6>;

export default meta;

type Story = StoryObj<typeof meta>;

const containerClass = 'border border-neutral-300 bg-neutral-50';

function oneBlock(): GridSquare[] {
  const squares: GridSquare[] = [];
  for (let i = 0; i < 36; i++) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    squares.push({ colour: row < 2 && col < 2 ? 'opaque' : 'clear' });
  }
  return squares;
}

function checker(): GridSquare[] {
  const squares: GridSquare[] = [];
  for (let i = 0; i < 36; i++) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    squares.push({ colour: (row + col) % 2 === 0 ? 'opaque' : 'clear' });
  }
  return squares;
}

export const Default: Story = {
  args: {
    gap: 4,
    squares: oneBlock(),
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid6x6 {...args} />
    </div>
  ),
};

export const Checkerboard: Story = {
  args: {
    gap: 4,
    squares: checker(),
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid6x6 {...args} />
    </div>
  ),
};
