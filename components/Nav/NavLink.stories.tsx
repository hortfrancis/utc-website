import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';

const meta = {
  title: 'Components/Nav/NavLink',
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

const workLink = navLinks[0];
const xrLink = navLinks[1];
const newsLink = navLinks[2];
const aboutLink = navLinks[3];
const contactLink = navLinks[4];

export const Work: Story = {
  args: {
    href: workLink.href,
    label: workLink.label,
    size: 'desktop',
  },
};

export const XR: Story = {
  args: {
    href: xrLink.href,
    label: xrLink.label,
    size: 'desktop',
  },
};

export const News: Story = {
  args: {
    href: newsLink.href,
    label: newsLink.label,
    size: 'desktop',
  },
};

export const About: Story = {
  args: {
    href: aboutLink.href,
    label: aboutLink.label,
    size: 'desktop',
  },
};

export const Contact: Story = {
  args: {
    href: contactLink.href,
    label: contactLink.label,
    size: 'desktop',
  },
};
