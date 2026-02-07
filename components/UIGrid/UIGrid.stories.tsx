import type { Meta, StoryObj } from '@storybook/nextjs';
import { UIGrid, GridBlock } from './index';
import { Frame } from '../Frame';
import Accent from '../Accent/Accent';
import clsx from 'clsx';

/**
 * UIGrid: the site-wide layout grid. Every cell is a perfect square.
 *
 * Cell size is computed from the available space so cells never stretch or
 * squash — resize the window to see them stay square. Use GridBlock to
 * place atoms/molecules at specific grid positions with optional spanning.
 *
 * Intended for site-wide UI positioning (LCARS-style panel layouts).
 * For cube face layouts, use FaceGrid instead.
 */
const meta = {
  title: 'Layout/UIGrid',
  component: UIGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site-wide layout grid with square cells. Covers the viewport or parent container. Cell size = min((w - gaps) / cols, (h - gaps) / rows). Use GridBlock for placement.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cols: { control: { type: 'number', min: 2, max: 16 }, description: 'Number of columns' },
    rows: { control: { type: 'number', min: 2, max: 12 }, description: 'Number of rows' },
    gap: { control: { type: 'number', min: 0, max: 16 }, description: 'Gap between cells (px)' },
    fullViewport: { control: 'boolean', description: 'Fill viewport (100dvh × 100vw)' },
  },
} satisfies Meta<typeof UIGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  LCARS-style full-viewport layout                                   */
/* ------------------------------------------------------------------ */

/**
 * Full-viewport LCARS-inspired layout. Sidebar nav panel on the left
 * with accent strips, content area on the right, status bar along the
 * bottom. All built from real design system atoms (Frame, Accent).
 */
export const LCARSLayout: Story = {
  args: {
    cols: 12,
    rows: 8,
    gap: 4,
    fullViewport: true,
  },
  render: (args) => (
    <UIGrid {...args}>
      {/* ---- Left sidebar: accent + nav panel ---- */}
      <GridBlock col={1} row={1} colSpan={1} rowSpan={8}>
        <Accent
          direction="vertical"
          gradient="magenta-green"
          borderSides={['top', 'right', 'bottom', 'left']}
          className="h-full w-full"
        />
      </GridBlock>

      <GridBlock col={2} row={1} colSpan={2} rowSpan={6}>
        <Frame
          borderSides={['top', 'right', 'bottom']}
          roundedCorners={['top-right']}
          className="h-full w-full bg-theme-black flex flex-col justify-between p-3"
        >
          <div className="space-y-2">
            <div className="h-5 rounded bg-theme-cyan/80" />
            <div className="h-5 rounded bg-theme-purple/80" />
            <div className="h-5 rounded bg-theme-magenta/80" />
            <div className="h-5 rounded bg-theme-orange/60" />
          </div>
          <div className="text-[10px] text-theme-cyan/60 font-mono select-none">NAV PANEL</div>
        </Frame>
      </GridBlock>

      <GridBlock col={2} row={7} colSpan={2} rowSpan={2}>
        <Frame
          borderSides={['right', 'bottom']}
          roundedCorners={['bottom-right']}
          className="h-full w-full bg-theme-purple flex items-center justify-center"
        >
          <span className="text-xs font-bold text-theme-white select-none">UTC</span>
        </Frame>
      </GridBlock>

      {/* ---- Main content area ---- */}
      <GridBlock col={4} row={1} colSpan={6} rowSpan={2}>
        <Frame
          borderSides={['top', 'right', 'bottom', 'left']}
          roundedCorners={['top-right']}
          className="h-full w-full bg-theme-white flex items-end p-3"
        >
          <span className="text-lg font-black text-theme-black">XR: Extended Reality</span>
        </Frame>
      </GridBlock>

      <GridBlock col={4} row={3} colSpan={6} rowSpan={4}>
        <Frame
          borderSides={['right', 'bottom', 'left']}
          className="h-full w-full bg-theme-white/90 p-3"
        >
          <div className="text-xs text-theme-black/60 mb-2 font-semibold">CONTENT AREA</div>
          <div className="space-y-1.5">
            <div className="h-3 w-4/5 rounded bg-theme-black/10" />
            <div className="h-3 w-3/5 rounded bg-theme-black/10" />
            <div className="h-3 w-full rounded bg-theme-black/10" />
            <div className="h-3 w-2/3 rounded bg-theme-black/10" />
          </div>
        </Frame>
      </GridBlock>

      {/* ---- Right accent strip ---- */}
      <GridBlock col={10} row={1} colSpan={1} rowSpan={6}>
        <Accent
          direction="vertical"
          gradient="purple-orange"
          borderSides={['top', 'right', 'bottom', 'left']}
          className="h-full w-full"
        />
      </GridBlock>

      <GridBlock col={11} row={1} colSpan={2} rowSpan={3}>
        <Frame
          borderSides={['top', 'right', 'bottom']}
          roundedCorners={['top-right']}
          className="h-full w-full bg-theme-black p-2 flex flex-col justify-end"
        >
          <div className="text-[10px] text-theme-orange/80 font-mono select-none">STATUS</div>
        </Frame>
      </GridBlock>

      <GridBlock col={11} row={4} colSpan={2} rowSpan={3}>
        <Frame
          borderSides={['right', 'bottom']}
          className="h-full w-full bg-theme-cyan/20 p-2 flex items-center justify-center"
        >
          <div className="text-[10px] text-theme-black/50 font-semibold select-none">INFO</div>
        </Frame>
      </GridBlock>

      {/* ---- Bottom status bar ---- */}
      <GridBlock col={4} row={7} colSpan={5} rowSpan={1}>
        <Accent
          direction="horizontal"
          gradient="orange-purple"
          borderSides={['top', 'bottom', 'left', 'right']}
          className="h-full w-full"
        />
      </GridBlock>

      <GridBlock col={4} row={8} colSpan={8} rowSpan={1}>
        <Frame
          borderSides={['bottom', 'left', 'right']}
          roundedCorners={['bottom-left', 'bottom-right']}
          className="h-full w-full bg-theme-black flex items-center px-3"
        >
          <span className="text-[9px] text-theme-green/70 font-mono select-none tracking-wider">
            URBAN TECH CREATIVE — SYSTEM READY
          </span>
        </Frame>
      </GridBlock>

      <GridBlock col={9} row={7} colSpan={1} rowSpan={1}>
        <Frame
          borderSides={['top', 'right', 'bottom']}
          className={clsx(
            'h-full w-full bg-theme-magenta/80',
          )}
        />
      </GridBlock>

      <GridBlock col={10} row={7} colSpan={3} rowSpan={1}>
        <Frame
          borderSides={['top', 'right', 'bottom']}
          roundedCorners={['bottom-right']}
          className="h-full w-full bg-theme-orange/70 flex items-center justify-center"
        >
          <span className="text-[9px] text-theme-black font-bold select-none">ALERTS: 0</span>
        </Frame>
      </GridBlock>
    </UIGrid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Full-viewport LCARS-inspired layout (12×8). Sidebar nav, accent strips, content area, status bar — all built from Frame and Accent atoms. Resize the window to see cells stay square.',
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/*  6×6 grid — cube face scale                                         */
/* ------------------------------------------------------------------ */

/**
 * 6×6 grid (matching cube face sub-grid). Shows how Frames can be placed
 * at the sub-grid scale — each cell is one sub-grid square, a 2×2 block
 * maps to one master grid cell.
 */
export const SixBySix: Story = {
  args: {
    cols: 6,
    rows: 6,
    gap: 4,
    fullViewport: false,
  },
  render: (args) => (
    <UIGrid {...args}>
      {/* Top-left 2×2 (= 1 master cell): colored block */}
        <GridBlock col={1} row={1} colSpan={2} rowSpan={2}>
          <Frame
            borderSides={['top', 'right', 'bottom', 'left']}
            roundedCorners={['top-left']}
            className="h-full w-full bg-theme-cyan flex items-center justify-center"
          >
            <span className="text-xs font-black text-theme-black select-none">XR</span>
          </Frame>
        </GridBlock>

        {/* Top-right 4×2: heading area */}
        <GridBlock col={3} row={1} colSpan={4} rowSpan={2}>
          <Frame
            borderSides={['top', 'right', 'bottom']}
            className="h-full w-full bg-theme-black flex items-end p-2"
          >
            <span className="text-sm font-bold text-theme-white select-none">Extended Reality</span>
          </Frame>
        </GridBlock>

        {/* Left column 2×4 */}
        <GridBlock col={1} row={3} colSpan={2} rowSpan={2}>
          <Frame
            borderSides={['bottom', 'left', 'right']}
            className="h-full w-full bg-theme-purple flex items-center justify-center"
          >
            <span className="text-[10px] font-semibold text-theme-white select-none">AR</span>
          </Frame>
        </GridBlock>

        <GridBlock col={1} row={5} colSpan={2} rowSpan={2}>
          <Frame
            borderSides={['bottom', 'left', 'right']}
            roundedCorners={['bottom-left']}
            className="h-full w-full bg-theme-magenta flex items-center justify-center"
          >
            <span className="text-[10px] font-semibold text-theme-white select-none">VR</span>
          </Frame>
        </GridBlock>

        {/* Center content 4×4 */}
        <GridBlock col={3} row={3} colSpan={4} rowSpan={4}>
          <Frame
            borderSides={['right', 'bottom']}
            roundedCorners={['bottom-right']}
            className="h-full w-full bg-theme-white/80 p-2"
          >
            <div className="text-[9px] text-theme-black/50 font-mono select-none">
              Content area — 4×4 cells (2×2 in master grid)
            </div>
          </Frame>
        </GridBlock>
      </UIGrid>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          '6×6 grid matching the cube face sub-grid. A 2×2 block here equals one cell in the 3×3 master grid. Shows Frame placement at sub-grid scale.',
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/*  3×3 grid — master grid scale                                       */
/* ------------------------------------------------------------------ */

/**
 * 3×3 master grid. Each cell is one "conceptual block" — the same
 * scale as the logomark cube faces.
 */
export const ThreeByThree: Story = {
  args: {
    cols: 3,
    rows: 3,
    gap: 4,
    fullViewport: false,
  },
  render: (args) => (
    <UIGrid {...args}>
      <GridBlock col={1} row={1} colSpan={2} rowSpan={1}>
          <div className="h-full w-full flex">
            <Accent
              direction="vertical"
              gradient="magenta-green"
              borderSides={['top', 'left', 'bottom']}
              className="h-full"
            />
            <Frame
              borderSides={['top', 'right', 'bottom']}
              roundedCorners={['top-right']}
              className="h-full flex-1 bg-theme-black flex items-center px-3"
            >
              <span className="text-sm font-black text-theme-white select-none">Title</span>
            </Frame>
          </div>
        </GridBlock>

        <GridBlock col={3} row={1} colSpan={1} rowSpan={3}>
          <Frame
            borderSides={['top', 'right', 'bottom', 'left']}
            roundedCorners={['top-right', 'bottom-right']}
            className="h-full w-full bg-theme-cyan/20 p-2 flex flex-col justify-between"
          >
            <span className="text-[10px] font-semibold text-theme-black select-none">Aside</span>
            <span className="text-[9px] text-theme-black/40 select-none">3 rows</span>
          </Frame>
        </GridBlock>

        <GridBlock col={1} row={2} colSpan={2} rowSpan={2}>
          <Frame
            borderSides={['bottom', 'left', 'right']}
            roundedCorners={['bottom-left']}
            className="h-full w-full bg-theme-white p-3 flex items-end"
          >
            <span className="text-xs text-theme-black/60 select-none">Main content — 2×2 block</span>
          </Frame>
        </GridBlock>
      </UIGrid>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          '3×3 master grid — each cell is one conceptual block (same scale as logomark). Accent + Frame sidebar, 2×2 content area, tall aside column.',
      },
    },
  },
};
