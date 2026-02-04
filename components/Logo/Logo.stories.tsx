import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/components/Logo';
import { Button } from '@/components/Button';
import { Frame } from '@/components/Frame';
import Accent from '@/components/Accent';

/**
 * Presentational logo: logomark + logotype (pure atom).
 * No Frame — wrap in Frame for stamp-style border (e.g. "In a Button" story).
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
          'Brand logo (3D cube logomark + company name). Presentational only; use "In a Button" story or wrap in Button + Frame when you want hover/click behaviour.',
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
 * Logo inside a Frame (hard box — full border, no rounded corners).
 */
export const InAFrame: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
  },
  render: (args) => (
    <Frame className="bg-theme-white flex items-center justify-center gap-6 w-48 h-24">
      <Logo {...args} />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo composed inside a Frame (default hard box). Frame is provided by the parent.',
      },
    },
  },
};

/**
 * Logo in a Frame with Accent on the left (header-style lockup).
 */
export const InAFrameWithAccent: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
  },
  render: (args) => (
    <div className="flex items-stretch">
      <Accent
        direction="vertical"
        gradient="magenta-green"
        borderSides={['top', 'left', 'bottom']}
      />
      <Frame className="bg-theme-white flex items-center justify-center gap-6 w-48 h-24">
        <Logo {...args} />
      </Frame>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo in a Frame (hard box) with Accent on the left — same composition as the header.',
      },
    },
  },
};

export const InAFrameWithCurve: Story = {
  args: {
    cubeSize: 36,
  },
  render: (args) => (
    <Frame
      borderSides={['top', 'right', 'bottom', 'left']}
      roundedCorners={['bottom-right']}
      className="bg-theme-white flex items-center justify-center gap-6 w-48 h-24"
    >
      <Logo {...args} />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo in a Frame with only the bottom-right corner rounded — mimics the stamp/badge style cut.',
      },
    },
  },
};

/**
 * Logo inside a Button with stamp-style Frame: hover for orange border and cyan background.
 */
export const InAButton: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    spinOnHover: true,
  },
  render: (args) => (
    <Button href="#" aria-label="Urban Tech Creative – home">
      <Frame
        // borderSides={['right', 'bottom', 'left']}
        // roundedCorners={['bottom-right']}
        interactive
        className="flex items-center justify-center gap-6 w-48 h-24"
      >
        <Logo {...args} />
      </Frame>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo composed as Button → Frame (stamp) → Logo. Hover for orange border and cyan background; logomark spins on hover.',
      },
    },
  },
};
