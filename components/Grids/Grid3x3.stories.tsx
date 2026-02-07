import type { Meta, StoryObj } from '@storybook/nextjs';
import Grid3x3 from './Grid3x3';
import type { GridSquare } from './types';

/**
 * 3×3 grid (9 squares). Used by the logomark cube faces and elsewhere.
 */
const meta = {
  title: 'Utilities/Grids/Grid3x3',
  component: Grid3x3,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A 3×3 grid of squares. Each cell can be opaque or clear, with optional corner rounding. Used by the logomark cube faces.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'number', min: 0, max: 24, step: 1 },
      description: 'Gap between squares in pixels',
    },
  },
} satisfies Meta<typeof Grid3x3>;

export default meta;

type Story = StoryObj<typeof meta>;

const containerClass = 'border border-neutral-300 bg-neutral-50';

const sampleOneCell: GridSquare[] = [
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'clear' },
];

const sampleChecker: GridSquare[] = [
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque' },
];

/** Logomark 'U' — same 3×3 data as the left face of the UTC cube (rounded inner corners). */
const logomarkU: GridSquare[] = [
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque', corner: 'top-left' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'opaque', corner: 'bottom-left' },
  { colour: 'opaque' },
  { colour: 'opaque' },
];

/** Logomark 'T' — same 3×3 data as the top face of the UTC cube (rounded bottom-right on bar). */
const logomarkT: GridSquare[] = [
  { colour: 'opaque' },
  { colour: 'opaque' },
  { colour: 'opaque', corner: 'bottom-right' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'clear' },
];

/** Logomark 'C' — same 3×3 data as the front face of the UTC cube (rounded top-right and bottom-right). */
const logomarkC: GridSquare[] = [
  { colour: 'opaque' },
  { colour: 'opaque' },
  { colour: 'opaque', corner: 'top-right' },
  { colour: 'opaque' },
  { colour: 'clear' },
  { colour: 'clear' },
  { colour: 'opaque' },
  { colour: 'opaque' },
  { colour: 'opaque', corner: 'bottom-right' },
];

export const Default: Story = {
  args: {
    gap: 6,
    squares: sampleOneCell,
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid3x3 {...args} />
    </div>
  ),
};

export const Checkerboard: Story = {
  args: {
    gap: 6,
    squares: sampleChecker,
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid3x3 {...args} />
    </div>
  ),
};

/**
 * Logomark 'U' — the 3×3 grid used for the left face of the UTC cube.
 * Rounded corners on the inner top-left and bottom-left of the U.
 */
export const LogomarkU: Story = {
  args: {
    gap: 6,
    squares: logomarkU,
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid3x3 {...args} />
    </div>
  ),
};

/**
 * Logomark 'T' — the 3×3 grid used for the top face of the UTC cube.
 * Rounded corner on the bottom-right of the T bar.
 */
export const LogomarkT: Story = {
  args: {
    gap: 6,
    squares: logomarkT,
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid3x3 {...args} />
    </div>
  ),
};

/**
 * Logomark 'C' — the 3×3 grid used for the front face of the UTC cube.
 * Rounded corners on the top-right and bottom-right of the C.
 */
export const LogomarkC: Story = {
  args: {
    gap: 6,
    squares: logomarkC,
  },
  render: (args) => (
    <div className={containerClass} style={{ width: 180, height: 180 }}>
      <Grid3x3 {...args} />
    </div>
  ),
};
