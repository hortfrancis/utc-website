import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { Button } from '@/components/Button';
import NavMenu from './NavMenu';

const meta = {
  title: 'Utilities/NavMenu',
  component: NavMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Utility: show/hide and positioning of a dropdown menu. Handles click-outside and Escape to close. No visual opinion on panel content — parent provides trigger and panel.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the panel is visible' },
    onClose: { action: 'onClose', description: 'Fired when user requests close' },
  },
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive: toggle with the trigger button. */
function NavMenuDemo() {
  const [open, setOpen] = useState(false);
  const trigger = (
    <Button
      variant="secondary"
      label="Menu"
      icon="arrow-down"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      aria-haspopup="menu"
    />
  );
  return (
    <NavMenu open={open} onClose={() => setOpen(false)} trigger={trigger}>
      <div className="bg-theme-white border-4 border-theme-black rounded-bl-3xl p-4 min-w-48">
        <p className="font-semibold text-theme-black">Panel content</p>
        <p className="text-sm text-theme-black/80">Click outside or Escape to close.</p>
      </div>
    </NavMenu>
  );
}

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    trigger: <button>Menu</button>,
    children: <div>Content</div>,
  },
  render: () => <NavMenuDemo />,
};

/** Menu starts open (for layout review). */
export const Open: Story = {
  args: {
    open: false,
    onClose: () => {},
    trigger: <button>Menu</button>,
    children: <div>Content</div>,
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const trigger = (
      <Button
        variant="secondary"
        label="Menu"
        icon="arrow-down"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
      />
    );
    return (
      <NavMenu open={open} onClose={() => setOpen(false)} trigger={trigger}>
        <div className="bg-theme-white border-4 border-theme-black rounded-bl-3xl p-4 min-w-48">
          <p className="font-semibold text-theme-black">Panel content</p>
        </div>
      </NavMenu>
    );
  },
};
