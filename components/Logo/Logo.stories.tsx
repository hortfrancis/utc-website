import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';

/**
 * Urban Tech Creative logo component with interactive 3D logomark.
 *
 * The logo consists of:
 * - Logomark: A 3D cube displaying 'U', 'T', 'C' on its visible faces
 * - Logotype: The full company name "Urban Tech Creative"
 *
 * Features:
 * - Hover to trigger cube spin animation
 * - Configurable cube size
 * - Multiple display types (logomark only, logotype only, or full logo)
 * - Flexible layouts (horizontal/vertical lockup, single-line/stacked text)
 */
const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Brand logo component featuring a 3D CSS cube logomark and company name. Hover over the logo to see the cube spin.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cubeSize: {
      control: { type: 'range', min: 20, max: 100, step: 1 },
      description: 'Size of the cube logomark in pixels',
    },
    type: {
      control: 'select',
      options: ['logomark', 'logotype', 'full'],
      description: 'Display mode for the logo',
    },
    lockup: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Spatial arrangement of logomark and logotype',
    },
    textLayout: {
      control: 'select',
      options: ['single-line', 'stacked'],
      description: 'Text layout for the logotype',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Full logo with both logomark and logotype in horizontal layout.
 * Hover to see the cube spin animation.
 */
export const Default: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
  },
};

/**
 * Logomark only - just the 3D cube with UTC letters.
 */
export const LogomarkOnly: Story = {
  args: {
    cubeSize: 36,
    type: 'logomark',
    lockup: 'horizontal',
    textLayout: 'stacked',
  },
};

/**
 * Logotype only - just the company name text.
 */
export const LogotypeOnly: Story = {
  args: {
    type: 'logotype',
    textLayout: 'stacked',
  },
};

/**
 * Vertical layout with larger cube size.
 */
export const VerticalLockup: Story = {
  args: {
    cubeSize: 50,
    type: 'full',
    lockup: 'vertical',
    textLayout: 'stacked',
  },
};

/**
 * Single-line text layout.
 */
export const SingleLineText: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'single-line',
  },
};

/**
 * Large cube size for emphasis.
 */
export const LargeCube: Story = {
  args: {
    cubeSize: 72,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
  },
};
