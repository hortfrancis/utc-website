import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { Frame } from '@/components/Frame';
import Accent from '@/components/Accent';

/**
 * Button wraps any UI block to make it a button. Sets CSS custom properties
 * (--button-border-color, --button-bg) that change on hover/focus to
 * theme-orange and theme-cyan. Use with Frame (interactive) or any block
 * that reads those variables.
 */
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Wraps a block (e.g. Frame with interactive) to add pointer, focus ring, and hover/focus colours (border → orange, background → cyan). Pass href to render as Link.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: { description: 'When provided, renders as Next Link' },
    onClick: { action: 'clicked', description: 'Click handler (button only)' },
    'aria-label': { description: 'Accessible label' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWithFrame: Story = {
  args: {
    'aria-label': 'Default button',
    children: undefined,
  },
  render: (args) => (
    <Button {...args}>
      <Frame
        borderSides={['top', 'right', 'bottom', 'left']}
        roundedCorners={[]}
        interactive
        className="w-40 h-24 flex items-center justify-center"
      >
        <span className="text-sm font-bold text-theme-black">Default</span>
      </Frame>
    </Button>
  ),
};

export const WithCurve: Story = {
  args: {
    'aria-label': 'Button with curve',
    children: undefined,
  },
  render: (args) => (
    <Button {...args}>
      <Frame
        borderSides={['top', 'right', 'bottom', 'left']}
        roundedCorners={['bottom-right']}
        interactive
        className="w-40 h-24 flex items-center justify-center"
      >
        <span className="text-sm font-bold text-theme-black">With curve</span>
      </Frame>
    </Button>
  ),
};

export const WithAccentLeft: Story = {
  args: {
    'aria-label': 'Button with accent left',
    children: undefined,
  },
  render: (args) => (
    <Button {...args}>
      <div className="flex items-stretch">
        <Accent
          direction="vertical"
          gradient="orange-purple"
          borderSides={['top', 'bottom', 'left']}
          interactive
        />
        <Frame
          borderSides={['top', 'right', 'bottom', 'left']}
          roundedCorners={[]}
          interactive
          className="w-40 h-24 flex items-center justify-center"
        >
          <span className="text-sm font-bold text-theme-black">With accent left</span>
        </Frame>
      </div>
    </Button>
  ),
};
