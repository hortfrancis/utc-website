import type { Meta, StoryObj } from '@storybook/nextjs';
import Logo from '@/components/Logo';
import Logomark from '@/components/Logo/Logomark';
import { Pressable } from '@/components/Pressable';
import { Frame } from '@/components/Frame';
import Accent from '@/components/Accent';

/**
 * Presentational logo: logomark + logotype (pure atom).
 * No Frame — wrap in Frame for stamp-style border (e.g. "In a Pressable" story).
 * No link or button behaviour — wrap in Pressable when you want it clickable.
 */
const meta = {
  title: 'Molecules/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Brand logo (3D cube logomark + company name). Presentational only; use "In a Pressable" story or wrap in Pressable + Frame when you want hover/click behaviour.',
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
 * Favicon capture source — 128×128 white square with the logomark centred.
 * Screenshot at deviceScaleFactor:2 → 256×256 app/icon.png (browser tab favicon).
 * Use: npx tsx scripts/capture-favicon.ts
 */
export const FaviconCapture: Story = {
  name: 'Favicon Capture',
  render: () => (
    <div
      style={{
        width: 128,
        height: 128,
        background: 'var(--theme-white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Logomark cubeSize={96} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Apple touch icon capture source — 90×90 white square with the logomark centred.
 * Screenshot at deviceScaleFactor:2 → 180×180 app/apple-icon.png (iOS home screen).
 * Use: npx tsx scripts/capture-favicon.ts
 */
export const AppleFaviconCapture: Story = {
  name: 'Apple Favicon Capture',
  render: () => (
    <div
      style={{
        width: 90,
        height: 90,
        background: 'var(--theme-white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Logomark cubeSize={68} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Logo inside a Pressable with Frame: hover for cyan background.
 */
export const InAPressable: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    spinOnHover: true,
  },
  render: (args) => (
    <Pressable href="#" aria-label="Urban Tech Creative – home" className="group">
      <Frame
        className="flex items-center justify-center gap-6 w-48 h-24 group-hover:bg-theme-cyan transition-colors duration-200"
      >
        <Logo {...args} />
      </Frame>
    </Pressable>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo composed as Pressable → Frame → Logo. Hover for cyan background; logomark spins on hover.',
      },
    },
  },
};

/**
 * Logo in a Pressable with Accent on the left and Frame with bottom-right curve.
 * Hover for cyan background.
 */
export const InAPressableWithAccentAndCurve: Story = {
  args: {
    cubeSize: 36,
    type: 'full',
    lockup: 'horizontal',
    textLayout: 'stacked',
    spinOnHover: true,
  },
  render: (args) => (
    <Pressable href="#" aria-label="Urban Tech Creative – home" className="group flex items-stretch">
      <Accent
        direction="vertical"
        gradient="magenta-green"
        borderSides={['top', 'bottom', 'left']}
      />
      <Frame
        borderSides={['top', 'right', 'bottom', 'left']}
        roundedCorners={['bottom-right']}
        className="flex items-center justify-center gap-6 w-48 h-24 group-hover:bg-theme-cyan transition-colors duration-200"
      >
        <Logo {...args} />
      </Frame>
    </Pressable>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Logo in a Pressable with left Accent and stamp-style Frame (bottom-right curve). Hover for cyan background.',
      },
    },
  },
};
