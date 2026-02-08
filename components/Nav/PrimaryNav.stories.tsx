import type { Meta, StoryObj } from '@storybook/nextjs';
import PrimaryNav from './PrimaryNav';

const meta = {
  title: 'Organisms/PrimaryNav',
  component: PrimaryNav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary navigation: floating menu in the top-right. Composes NavMenu + Button trigger ("Navigation", arrow-down) + NavList in a Frame. Toggle opens/closes; click outside or Escape closes. Intended to live inside the site header.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state (e.g. for reviewing the dropdown)',
    },
  },
} satisfies Meta<typeof PrimaryNav>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Closed by default — click "Navigation" to open. */
export const Closed: Story = {
  args: {
    defaultOpen: false,
  },
};

/** Starts open for reviewing dropdown layout and links. */
export const Open: Story = {
  args: {
    defaultOpen: true,
  },
};
