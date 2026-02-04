import type { Meta, StoryObj } from '@storybook/react';
import SiteHeader from './SiteHeader';

/**
 * Full site header: logo, top border, and responsive nav.
 *
 * - **Mobile (narrow viewport):** Logo + hamburger; tap to open slide-out nav.
 * - **Desktop (md and up):** Logo + horizontal nav links.
 *
 * Use the viewport control in the toolbar (or the mobile story) to see mobile layout.
 * These are the same components used in the Next.js app—design here, they update in the app.
 */
const meta = {
  title: 'Components/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top navigation and header. Switch viewport to mobile (e.g. 375px) to see the mobile header and menu.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultMobileNavOpen: {
      control: 'boolean',
      description: 'Start with mobile nav open (for design/review).',
    },
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default header. Use toolbar viewport to switch between mobile and desktop. */
export const Default: Story = {
  args: {},
};

/** Mobile width: only the mobile header (logo + menu button) is visible. */
export const MobileViewport: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

/** Mobile width with menu open so you can finesse the nav drawer. */
export const MobileMenuOpen: Story = {
  args: {
    defaultMobileNavOpen: true,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
