import type { Meta, StoryObj } from '@storybook/nextjs';
import Breadcrumbs from './Breadcrumbs';

/**
 * Breadcrumb navigation for hierarchical page context.
 * Renders a sequence of links with separators; the current page is plain text.
 */
const meta = {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Breadcrumb navigation. Items with `path` render as links; items with `current: true` render as plain text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Breadcrumb items. Use `current: true` for the current page.',
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-theme-white text-theme-black min-w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Typical two-level breadcrumb (section → page). */
export const Default: Story = {
  args: {
    items: [
      { label: 'Work', path: '/work' },
      { label: 'Afghan Project', current: true },
    ],
  },
};

/** Deep hierarchy. */
export const DeepHierarchy: Story = {
  args: {
    items: [
      { label: 'Work', path: '/work' },
      { label: 'Projects', path: '/work/projects' },
      { label: 'XR Experiences', path: '/work/projects/xr' },
      { label: 'Construct AR', current: true },
    ],
  },
};

/** Single item — current page only. */
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', current: true }],
  },
};

/** Minimal breadcrumb for top-level section. */
export const SectionOnly: Story = {
  args: {
    items: [
      { label: 'Work', path: '/work' },
      { label: 'All projects', current: true },
    ],
  },
};
