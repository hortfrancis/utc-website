import type { Meta, StoryObj } from '@storybook/react';
import MobileNavPanel from './MobileNavPanel';
import { navLinks } from './navLinks';

/**
 * Mobile navigation menu panel in isolation—the pop-up menu that appears
 * when the burger is pressed. Use this story to finesse layout, spacing,
 * and styling without the header or click-outside behavior.
 *
 * Same component is composed by `MobileNav` in the app.
 */
const meta = {
  title: 'Organisms/MobileNavPanel',
  component: MobileNavPanel,
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        component:
          'The mobile nav menu panel (gradient box + links + underside bar). Shown in isolation so you can design it; used by MobileNav in the app.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    links: {
      description: 'Nav items to show in the menu',
    },
    onLinkClick: {
      action: 'link clicked',
      description: 'Fired when a link is clicked (e.g. close menu)',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 375,
          minHeight: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#ffffff',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileNavPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default mobile nav menu panel—how it looks when the burger is pressed. */
export const Default: Story = {
  args: {
    links: navLinks,
  },
};

/** With a custom subset of links (e.g. for testing layout). */
export const FewerLinks: Story = {
  args: {
    links: navLinks.slice(0, 3),
  },
};
