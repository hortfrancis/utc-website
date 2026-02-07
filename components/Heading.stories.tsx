import type { Meta, StoryObj } from '@storybook/nextjs';
import Heading from './Heading';

/**
 * Semantic heading component with predefined size/weight classes per level.
 * Uses the Recursive variable font. Levels 1-4 cover most use cases.
 */
const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Semantic heading (h1-h6) with predefined Tailwind size/weight classes. Uses the Recursive variable font.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level (1-6)',
    },
    children: {
      control: 'text',
      description: 'Heading text content',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
  parameters: {
    docs: {
      description: {
        story: '`text-4xl font-black` — Page titles, hero headings.',
      },
    },
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
  parameters: {
    docs: {
      description: {
        story: '`text-3xl font-extrabold` — Section headings.',
      },
    },
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
  parameters: {
    docs: {
      description: {
        story: '`text-2xl font-bold` — Sub-section headings.',
      },
    },
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
  parameters: {
    docs: {
      description: {
        story: '`text-xl font-bold` — Card titles, minor headings.',
      },
    },
  },
};

/** All four heading levels stacked to show the visual hierarchy. */
export const Hierarchy: Story = {
  args: { level: 1, children: '' },
  render: () => (
    <div className="flex flex-col">
      <Heading level={1}>XR: Extended Reality</Heading>
      <Heading level={2}>Augmented Reality</Heading>
      <Heading level={3}>Virtual Reality</Heading>
      <Heading level={4}>Mixed Reality</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All four heading levels stacked to show the typographic hierarchy.',
      },
    },
  },
};
