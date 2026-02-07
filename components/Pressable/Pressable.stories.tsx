import type { Meta, StoryObj } from '@storybook/nextjs';
import { Pressable } from './index';

/**
 * Utility component that makes any subtree interactive and accessible.
 * Renders `<Link>`, `<a>`, or `<button>` based on the `href` prop.
 * Zero visual opinion — styling is owned by the children.
 */
const meta = {
  title: 'Utilities/Pressable',
  component: Pressable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Makes any subtree clickable/linkable. Renders Link (internal), anchor (external), or button (action). No visual opinion.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pressable>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Renders as `<button>` — no href provided. */
export const AsButton: Story = {
  args: {
    onClick: () => alert('Clicked!'),
    'aria-label': 'Click me',
    children: (
      <div className="px-4 py-2 border-2 border-theme-black text-theme-black font-bold">
        I am a button
      </div>
    ),
  },
};

/** Renders as `next/link` — internal href. */
export const AsInternalLink: Story = {
  args: {
    href: '/about',
    'aria-label': 'Go to about page',
    children: (
      <div className="px-4 py-2 border-2 border-theme-black text-theme-black font-bold">
        Internal link (/about)
      </div>
    ),
  },
};

/** Renders as `<a target="_blank">` — external href. */
export const AsExternalLink: Story = {
  args: {
    href: 'https://example.com',
    'aria-label': 'Visit example.com',
    children: (
      <div className="px-4 py-2 border-2 border-theme-black text-theme-black font-bold">
        External link (example.com)
      </div>
    ),
  },
};
