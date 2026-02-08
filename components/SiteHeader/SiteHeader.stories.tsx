import type { Meta, StoryObj } from '@storybook/nextjs';
import SiteHeader from './SiteHeader';

/**
 * Site header: logo + primary nav (Navigation button with dropdown).
 * Same layout at all viewports. Use viewport control to see behaviour at different widths.
 */
const meta = {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top navigation: logo (left) and PrimaryNav dropdown (right). Tap "Navigation" to open the menu.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default header. */
export const Default: Story = {
  args: {},
};
