import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';
import { Button } from '@/components/Button';
import { Frame } from '@/components/Frame';

/**
 * Presentational logo: logomark + logotype, optionally in a Frame.
 * No link or button behaviour — wrap in Button (or Link) when you want it clickable.
 */
const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Brand logo (3D cube logomark + company name). Presentational only; use "In a Button" story or wrap in Button when you want hover/click behaviour.',
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

/**
 * Logo inside a Button: hover for orange border and cyan background.
 */
export const InAButton: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    showFrame: true,
    spinOnHover: true,
  },
  render: (args) => (
    <Button href="#" aria-label="Urban Tech Creative – home">
      <Logo {...args} />
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo wrapped in a Button. Hover for orange border and cyan background; logomark spins on hover.',
      },
    },
  },
};
