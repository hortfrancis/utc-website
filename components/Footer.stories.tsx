import type { Meta, StoryObj } from '@storybook/nextjs';
import Footer from './Footer';

/**
 * Global site footer with copyright and social media links.
 *
 * - Copyright text auto-updates to the current year
 * - Social icons (LinkedIn, Instagram, YouTube) link to UTC profiles
 * - Icons use Pressable + Icon primitives from the design system
 * - Responsive sizing: icons scale from 16px (mobile) to 24px (desktop)
 */
const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site footer with copyright and social media links. Black background with white/cyan hover states.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default footer as used throughout the site. */
export const Default: Story = {};

/**
 * Footer in a page context. Demonstrates how it sits at the bottom
 * of a page with content above it.
 */
export const InPageContext: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[var(--background-faded-orange)] to-[var(--background-faded-cyan)]">
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Page Content</h1>
          <p className="text-lg">The footer sits below all page content.</p>
        </div>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Footer at the bottom of a full-height page. The `mt-auto` class pushes it to the bottom when used in a flex column layout.',
      },
    },
  },
};
