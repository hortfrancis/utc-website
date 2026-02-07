import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './index';

/**
 * Self-contained interactive button with semantic variants:
 * `primary`, `secondary`, and `tertiary`.
 * Supports text, icon, or text+icon content. Uses Pressable internally
 * for element selection (Link / a / button).
 */
const meta = {
  title: 'Molecules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Opinionated button molecule with primary/secondary/tertiary variants, optional icon, and magenta focus ring. Uses Pressable for Link/a/button polymorphism.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    icon: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary variant — the main action. */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Explore',
  },
};

/** Secondary variant — supporting action. */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Close',
  },
};

/** Tertiary variant — low-emphasis, borderless. */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Cancel',
  },
};

/** Primary with icon after label. */
export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    label: 'Explore',
    icon: 'arrow-right',
  },
};

/** Secondary with icon after label. */
export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    label: 'Back',
    icon: 'arrow-left',
  },
};

/** Tertiary with icon. */
export const TertiaryWithIcon: Story = {
  args: {
    variant: 'tertiary',
    label: 'Learn more',
    icon: 'arrow-right',
  },
};

/** Icon-only primary button. */
export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: 'arrow-right',
    iconOnly: true,
    'aria-label': 'Next',
  },
};

/** Renders as a Next.js Link (internal navigation). */
export const AsLink: Story = {
  args: {
    variant: 'primary',
    label: 'Go to XR',
    icon: 'arrow-right',
    href: '/xr',
  },
};

/** Renders as an external anchor. */
export const AsExternalLink: Story = {
  args: {
    variant: 'secondary',
    label: 'Visit Site',
    icon: 'share',
    href: 'https://example.com',
  },
};

/** All variants side by side for comparison. */
export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="primary" label="Primary" />
        <Button variant="primary" label="With Icon" icon="arrow-right" />
        <Button variant="primary" icon="arrow-right" iconOnly aria-label="Next" />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary" label="Secondary" />
        <Button variant="secondary" label="With Icon" icon="arrow-left" />
        <Button variant="secondary" icon="x" iconOnly aria-label="Close" />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="tertiary" label="Tertiary" />
        <Button variant="tertiary" label="With Icon" icon="arrow-right" />
        <Button variant="tertiary" icon="x" iconOnly aria-label="Dismiss" />
      </div>
    </div>
  ),
  args: { variant: 'primary' },
};
