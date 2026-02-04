import type { Meta, StoryObj } from '@storybook/react';
import { UIGrid, GridBlock } from './index';
import Accent from '../Accent/Accent';
import clsx from 'clsx';

/**
 * UI Grid: a full-area layout grid with square cells. Blocks (any UI components)
 * are composed into the grid via GridBlock. Responsive: cell size is
 * min(width/cols, height/rows) so cells stay square on resize.
 */
const meta = {
  title: 'Components/UIGrid',
  component: UIGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Layout grid that covers the screen (or container). Cells are always square. Use GridBlock to place UI components in cells.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cols: { control: { type: 'number', min: 2, max: 16 }, description: 'Number of columns' },
    rows: { control: { type: 'number', min: 2, max: 12 }, description: 'Number of rows' },
    gap: { control: 'text', description: 'Gap between cells (CSS length)' },
    fullViewport: { control: 'boolean', description: 'Fill viewport (100dvh × 100vw)' },
  },
} satisfies Meta<typeof UIGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Placeholder block: nav-style panel (gradient + border). */
function NavPlaceholder() {
  return (
    <div
      className={clsx(
        'h-full w-full flex flex-col',
        'border-4 border-theme-black rounded-lg overflow-hidden',
        'bg-gradient-to-b from-theme-purple to-theme-orange'
      )}
    >
      <div className="p-2 flex-1 flex flex-col gap-1">
        <div className="h-6 w-full bg-theme-black/20 rounded" />
        <div className="h-6 w-full bg-theme-black/20 rounded" />
        <div className="h-6 w-full bg-theme-black/20 rounded" />
      </div>
      <div className="h-3 bg-theme-black" />
    </div>
  );
}

/** Placeholder block: card with text. */
function CardPlaceholder() {
  return (
    <div
      className={clsx(
        'h-full w-full p-3 flex flex-col',
        'border-4 border-theme-black bg-theme-white rounded-lg'
      )}
    >
      <div className="text-sm font-bold text-theme-black mb-2">Card title</div>
      <div className="text-xs text-theme-black/80 flex-1">
        Any UI component can sit in a grid block. This one looks like a content card.
      </div>
    </div>
  );
}

/** Placeholder block: accent strip (uses real Accent). */
function AccentBlock() {
  return (
    <div className="h-full w-full flex items-stretch">
      <Accent
        direction="vertical"
        gradient="magenta-green"
        borderSides={['left', 'bottom']}
        className="h-full"
      />
      <div className="flex-1 border-4 border-theme-black border-l-0 flex items-center justify-center bg-theme-white/90">
        <span className="text-xs font-semibold text-theme-black">Accent + content</span>
      </div>
    </div>
  );
}

/** Placeholder block: empty cell with visible border (shows grid structure). */
function EmptyBlock() {
  return (
    <div className="h-full w-full border-2 border-theme-black/30 rounded bg-theme-black/5" />
  );
}

export const FullAreaWithBlocks: Story = {
  args: {
    cols: 8,
    rows: 6,
    gap: '6px',
    fullViewport: true,
  },
  render: (args) => (
    <UIGrid {...args}>
      <GridBlock col={1} row={1} rowSpan={6}>
        <NavPlaceholder />
      </GridBlock>
      <GridBlock col={2} row={1} colSpan={2} rowSpan={2}>
        <CardPlaceholder />
      </GridBlock>
      <GridBlock col={4} row={1} colSpan={2} rowSpan={2}>
        <CardPlaceholder />
      </GridBlock>
      <GridBlock col={2} row={3} colSpan={3} rowSpan={2}>
        <AccentBlock />
      </GridBlock>
      <GridBlock col={5} row={3} colSpan={2} rowSpan={2}>
        <EmptyBlock />
      </GridBlock>
      <GridBlock col={6} row={1} colSpan={2} rowSpan={3}>
        <div className="h-full w-full border-4 border-theme-black bg-theme-cyan/30 rounded-lg flex items-center justify-center">
          <span className="text-sm font-bold text-theme-black">Large block</span>
        </div>
      </GridBlock>
    </UIGrid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Full viewport grid (8×6) with square cells. Blocks: nav-style panel, cards, accent strip, empty cell, large block. Resize the window to see cells stay square.',
      },
    },
  },
};

export const InContainer: Story = {
  args: {
    cols: 6,
    rows: 4,
    gap: '4px',
    fullViewport: false,
  },
  render: (args) => (
    <div className="h-[480px] w-full max-w-2xl border border-neutral-300 bg-neutral-100">
      <UIGrid {...args}>
        <GridBlock col={1} row={1} colSpan={2} rowSpan={2}>
          <NavPlaceholder />
        </GridBlock>
        <GridBlock col={3} row={1} colSpan={2} rowSpan={2}>
          <CardPlaceholder />
        </GridBlock>
        <GridBlock col={5} row={1} colSpan={2} rowSpan={4}>
          <AccentBlock />
        </GridBlock>
        <GridBlock col={1} row={3} colSpan={4} rowSpan={2}>
          <div className="h-full w-full border-4 border-theme-black bg-theme-orange/20 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-theme-black">Wide footer block</span>
          </div>
        </GridBlock>
      </UIGrid>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'Grid inside a fixed container (not full viewport). Cells stay square; grid is centered in the container.',
      },
    },
  },
};
