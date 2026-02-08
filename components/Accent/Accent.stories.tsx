import type { Meta, StoryObj } from '@storybook/nextjs';
import Accent from './Accent';

/**
 * Reusable gradient accent to draw the eye and add colour next to
 * interactive elements (logo, menu button, nav panels). Compose it beside
 * UI blocks; placement and size are controlled by the parent.
 */
const meta = {
  title: 'Atoms/Accent',
  component: Accent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Gradient accent with optional black borders. Use next to logos, buttons, or nav to add zazz and signal interactivity.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Strip orientation; gradient runs along the long axis.',
    },
    gradient: {
      control: 'select',
      options: ['magenta-green', 'purple-orange', 'orange-purple'],
      description: 'Theme gradient pair.',
    },
    borderSides: {
      control: 'multi-select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Which sides get the black border; others are flush.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accent>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default: no gradient, solid theme-black fill. */
export const Default: Story = {
  args: {
    direction: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 80, display: 'flex', alignItems: 'stretch' }}>
        <Story />
      </div>
    ),
  ],
};

/** All borders (standalone block). */
export const AllBorders: Story = {
  args: {
    direction: 'vertical',
    gradient: 'magenta-green',
    borderSides: ['top', 'right', 'bottom', 'left'],
  },
  decorators: [
    (Story) => (
      <div style={{ height: 120, display: 'flex', alignItems: 'stretch' }}>
        <Story />
      </div>
    ),
  ],
};

/** No borders (pure gradient strip). */
export const NoBorders: Story = {
  args: {
    direction: 'vertical',
    gradient: 'purple-orange',
    borderSides: [],
  },
  decorators: [
    (Story) => (
      <div style={{ height: 80, display: 'flex', alignItems: 'stretch' }}>
        <Story />
      </div>
    ),
  ],
};
