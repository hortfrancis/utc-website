import type { Meta, StoryObj } from '@storybook/nextjs';
import Anchor from './Anchor';

/**
 * Unified inline link atom.
 *
 * - Internal paths use `next/link` for client-side navigation.
 * - External URLs open in a new tab with `rel="noopener noreferrer"`.
 * - Styled consistently with theme-purple, semibold, underline on hover.
 */
const meta = {
  title: 'Atoms/Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Inline link component. Detects internal vs external URLs automatically.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-8 bg-theme-white text-theme-black">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Internal link — uses next/link for client-side navigation. */
export const Internal: Story = {
  args: {
    href: '/about',
    children: 'About us',
  },
};

/** External link — opens in a new tab. */
export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'example.com',
  },
};

/** Mailto link. */
export const Email: Story = {
  args: {
    href: 'mailto:hello@example.com',
    children: 'hello@example.com',
  },
};

/** Anchor inline within a paragraph. */
export const InParagraph: Story = {
  args: {
    href: '/about',
  },
  render: () => (
    <p className="text-sm leading-relaxed">
      Read more on <Anchor href="https://example.com">our website</Anchor> or{' '}
      <Anchor href="/contact">get in touch</Anchor>.
    </p>
  ),
};
