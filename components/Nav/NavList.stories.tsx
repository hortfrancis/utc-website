import type { Meta, StoryObj } from '@storybook/nextjs';
import { workProjectLinks } from '@/app/work/projectLinks';
import NavList from './NavList';
import { primaryNavLinks } from './primaryNavLinks';

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
    align: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Cross-axis alignment of the list',
    },
    inPanel: {
      control: 'boolean',
      description: 'When true, NavList computes frameBorderSides per row so stacked links share single strokes (no double borders)',
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
    links: primaryNavLinks,
    size: 'desktop',
  },
};

export const Mobile: Story = {
  args: {
    links: primaryNavLinks,
    size: 'mobile',
  },
};

export const FewerLinks: Story = {
  args: {
    links: primaryNavLinks.slice(0, 3),
    size: 'desktop',
  },
};

export const RightAligned: Story = {
  args: {
    links: primaryNavLinks,
    size: 'desktop',
    align: 'right',
  },
};

/** Stacked in panel: single-stroke borders between rows (as in NavMenuPanel). */
export const InPanel: Story = {
  args: {
    links: primaryNavLinks,
    size: 'desktop',
    inPanel: true,
  },
};

/** Work page: all project links (as on /work). */
export const WorkProjects: Story = {
  args: {
    links: workProjectLinks,
    size: 'desktop',
  },
};
