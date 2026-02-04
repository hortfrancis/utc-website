import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { Frame } from '@/components/Frame';

/**
 * Button wraps any UI block to make it a button. Sets CSS custom properties
 * (--button-border-color, --button-bg) that change on hover/focus to
 * theme-orange and theme-cyan. Use with Frame (interactive) or any block
 * that reads those variables.
 */
const meta = {
  title: 'Components/Button',
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

/** Frame (interactive) inside Button: hover for orange border and cyan background. */
export const WithFrame: Story = {
  args: {
    'aria-label': 'Example block button',
  },
  render: (args) => (
    <Button {...args}>
      <Frame
        borderSides={['right', 'bottom', 'left']}
        roundedCorners={['bottom-right']}
        interactive
        className="w-48 h-24 flex items-center justify-center"
      >
        <span className="text-sm font-bold text-theme-black">Block button</span>
      </Frame>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Frame with interactive uses Button’s CSS variables. Hover or focus to see border → orange, background → cyan.',
      },
    },
  },
};

/** Hard box (full border, no rounded corners) as button. */
export const HardBox: Story = {
  args: {
    'aria-label': 'Hard box button',
  },
  render: (args) => (
    <Button {...args}>
      <Frame
        borderSides={['top', 'right', 'bottom', 'left']}
        roundedCorners={[]}
        interactive
        className="w-40 h-24 flex items-center justify-center"
      >
        <span className="text-sm font-bold text-theme-black">Hard box</span>
      </Frame>
    </Button>
  ),
};
