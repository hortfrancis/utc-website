import type { Meta, StoryObj } from '@storybook/nextjs';
import NavList from './NavList';
import { navLinks } from './navLinks';

const meta = {
  title: 'Organisms/NavList',
  component: NavList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Vertical column of NavLinks. Owns the `<nav>` landmark (NavLink is purely presentational). No chrome — decoration is the parent\'s job.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    links: { description: 'Nav items to render' },
    size: {
      control: { type: 'radio' },
      options: ['mobile', 'desktop'],
      description: 'Sizing passed through to each NavLink',
    },
    onLinkClick: {
      action: 'link clicked',
      description: 'Fired when any link is clicked',
    },
  },
} satisfies Meta<typeof NavList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    links: navLinks,
    size: 'desktop',
  },
};

export const Mobile: Story = {
  args: {
    links: navLinks,
    size: 'mobile',
  },
};

export const FewerLinks: Story = {
  args: {
    links: navLinks.slice(0, 3),
    size: 'desktop',
  },
};
