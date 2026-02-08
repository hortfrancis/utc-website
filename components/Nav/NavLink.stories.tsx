import type { Meta, StoryObj } from '@storybook/nextjs';
import NavLink from './NavLink';
import { primaryNavLinks } from './primaryNavLinks';

const meta = {
  title: 'Molecules/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single nav item: icon cell + label cell. Used in desktop and mobile nav. One story per nav link.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: { description: 'Link target' },
    label: { description: 'Link label' },
    size: {
      control: { type: 'radio' },
      options: ['mobile', 'desktop'],
      description: 'Sizing of text and icon',
    },
    onClick: { action: 'clicked', description: 'Optional click handler (e.g. close mobile menu)' },
  },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const workLink = primaryNavLinks[0];
const xrLink = primaryNavLinks[1];
const newsLink = primaryNavLinks[2];
const aboutLink = primaryNavLinks[3];
const contactLink = primaryNavLinks[4];

export const Work: Story = {
  args: {
    href: workLink.href,
    label: workLink.label,
    icon: workLink.icon,
    size: 'desktop',
  },
};

export const XR: Story = {
  args: {
    href: xrLink.href,
    label: xrLink.label,
    icon: xrLink.icon,
    size: 'desktop',
  },
};

export const News: Story = {
  args: {
    href: newsLink.href,
    label: newsLink.label,
    icon: newsLink.icon,
    size: 'desktop',
  },
};

export const About: Story = {
  args: {
    href: aboutLink.href,
    label: aboutLink.label,
    icon: aboutLink.icon,
    size: 'desktop',
  },
};

export const Contact: Story = {
  args: {
    href: contactLink.href,
    label: contactLink.label,
    icon: contactLink.icon,
    size: 'desktop',
  },
};
