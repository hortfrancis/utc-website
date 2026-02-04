import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';
import { Frame } from '@/components/Frame';

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
  args: {
    showFrame: false,
  },
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
    showFrame: {
      control: 'boolean',
      description: 'Show the Frame (curved border); turn off to inspect logo on its own',
    },
    spinOnHover: {
      control: 'boolean',
      description: 'When false, the logomark does not spin on hover',
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
 * Logo alone with no spin on hover.
 */
export const LogoNoSpin: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    showFrame: false,
    spinOnHover: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo alone (no Frame). The logomark does not spin when hovered.',
      },
    },
  },
};

/**
 * Logo in default configuration inside a Frame (default: hard box).
 * Logo’s own Frame is off so only the block provides the border.
 */
export const InABlock: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    showFrame: false,
  },
  render: (args) => (
    <Frame className="p-4 bg-theme-white">
      <Logo {...args} />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo in default configuration inside a Frame (default: hard box). Only the outer Frame is used; the logo’s own curved border is off so the block alone defines the border.',
      },
    },
  },
};
