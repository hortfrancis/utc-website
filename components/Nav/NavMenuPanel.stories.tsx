import type { Meta, StoryObj } from '@storybook/nextjs';
import NavMenuPanel from './NavMenuPanel';
import { primaryNavLinks } from './primaryNavLinks';

const meta = {
  title: 'Organisms/NavMenuPanel',
  component: NavMenuPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Presentational panel: Frame + NavList. No trigger or open/close — use inside NavMenu for dropdown content or standalone for layout review.',
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
      description: 'Cross-axis alignment of the list (default: left)',
    },
    onLinkClick: {
      action: 'link clicked',
      description: 'Fired when any link is clicked',
    },
  },
} satisfies Meta<typeof NavMenuPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default: left-aligned list in Frame. */
export const Default: Story = {
  args: {
    links: primaryNavLinks,
    size: 'desktop',
  },
};

/** Right-aligned list (e.g. as used in PrimaryNav dropdown). */
export const RightAligned: Story = {
  args: {
    links: primaryNavLinks,
    size: 'desktop',
    align: 'right',
  },
};
