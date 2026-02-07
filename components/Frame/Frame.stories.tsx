import type { Meta, StoryObj } from '@storybook/nextjs';
import Accent from '../Accent';
import { Frame } from './index';

/**
 * Composable frame: partial border and optional rounded corners.
 *
 * **Semantic use:** An open frame (missing one or more sides) suggests
 * "entry point", "panel edge", or "badge" — the content isn’t fully
 * boxed in. One rounded corner reads as stamp/badge cut (craft,
 * tangibility). Use for logo lockups, nav panels, or any block that
 * should feel like a distinct chunk without a full closed box.
 */
const meta = {
  title: 'Atoms/Frame',
  component: Frame,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Partial border and rounded corners. Control which sides have the border and which corners are rounded. Use for logo lockups, badges, or open panels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    borderSides: {
      control: 'multi-select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Which sides get the border; others are flush',
    },
    roundedCorners: {
      control: 'multi-select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Which corners are rounded',
    },
    borderWidth: {
      control: 'radio',
      options: ['border-2', 'border-4'],
      description: 'Border thickness',
    },
  },
} satisfies Meta<typeof Frame>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Full frame, no rounded corners (hard box). */
export const Default: Story = {
  args: {
    borderSides: ['top', 'right', 'bottom', 'left'],
    roundedCorners: [],
    borderWidth: 'border-4',
  },
  render: (args) => (
    <Frame {...args} className="w-40 h-24 bg-theme-white p-3">
      <span className="text-sm text-theme-black">Content</span>
    </Frame>
  ),
};

/** Full frame, one corner rounded (soft box). */
export const WithCurve: Story = {
  args: {
    borderSides: ['top', 'right', 'bottom', 'left'],
    roundedCorners: ['bottom-right'],
    borderWidth: 'border-4',
  },
  render: (args) => (
    <Frame {...args} className="w-40 h-24 bg-theme-white p-3">
      <span className="text-sm text-theme-black">Content</span>
    </Frame>
  ),
};

export const WithAllCornersCurve: Story = {
  args: {
    borderSides: ['top', 'right', 'bottom', 'left'],
    roundedCorners: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    borderWidth: 'border-4',
  },
  render: (args) => (
    <Frame {...args} className="w-40 h-24 bg-theme-white p-3">
      <span className="text-sm text-theme-black">Content</span>
    </Frame>
  ),
};

/** Frame with gradient Accent strip (e.g. logo lockup or badge). */
export const WithAccentLeft: Story = {
  render: (args) => (
    <div className="flex items-stretch">
      <Accent
        direction="vertical"
        gradient="orange-purple"
        borderSides={['top', 'bottom', 'left']}
      />
      <Frame {...args} className="w-32 h-20 bg-theme-white flex items-center justify-center ">
        <span className="text-xs font-semibold text-theme-black">Label</span>
      </Frame>
    </div>
  ),
};

export const WithAccentRight: Story = {
  render: (args) => (
    <div className="flex items-stretch">
      <Frame {...args} className="w-32 h-20 bg-theme-white flex items-center justify-center ">
        <span className="text-xs font-semibold text-theme-black">Label</span>
      </Frame>
      <Accent
        direction="vertical"
        gradient="orange-purple"
        borderSides={['top', 'bottom', 'right']}
      />
    </div>
  ),
};

export const WithAccentTop: Story = {
  render: (args) => (
    <div className="flex flex-col items-stretch">
      <Accent
        direction="horizontal"
        gradient="orange-purple"
        borderSides={['left', 'right', 'top']}
      />
      <Frame {...args} className="w-32 h-20 bg-theme-white flex items-center justify-center ">
        <span className="text-xs font-semibold text-theme-black">Label</span>
      </Frame>

    </div>
  ),
};

export const WithAccentBottom: Story = {
  render: (args) => (
    <div className="flex flex-col items-stretch">
      <Frame {...args} className="w-32 h-20 bg-theme-white flex items-center justify-center ">
        <span className="text-xs font-semibold text-theme-black">Label</span>
      </Frame>
      <Accent
        direction="horizontal"
        gradient="orange-purple"
        borderSides={['left', 'right', 'bottom']}
      />
    </div>
  ),
};
