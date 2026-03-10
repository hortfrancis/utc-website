import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  ImageBlock,
  TextBlock,
  IconSingle,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face AI Experiments                                          */
/*                                                                     */
/*  Layout explorations for the AI cube face.                         */
/*  Each story explores a different way to represent AI on a 6×6     */
/*  FaceGrid. All sizing uses cqi units.                               */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Faces/AI',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the AI cube face. 300px square frame. ' +
          'Explores ways to represent AI on a 6×6 grid. ' +
          'All sizing uses cqi units — 1cqi = 1% of the face width/height.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-75 h-75 overflow-hidden rounded border border-theme-black/20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* ================================================================== */
/*  STORIES                                                            */
/* ================================================================== */

// ─── 1 · ColorBlock ────────────────────────────────────────────────────────
export const ColorBlockDemo: Story = {
  name: '1 – ColorBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Row 1 — opacity=1 (full), each theme colour */}
      <Cell col={1} row={1}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={1}><ColorBlock color="var(--theme-magenta)" /></Cell>
      <Cell col={3} row={1}><ColorBlock color="var(--theme-orange)" /></Cell>
      <Cell col={4} row={1}><ColorBlock color="var(--theme-green)" /></Cell>
      <Cell col={5} row={1}><ColorBlock color="var(--theme-purple)" /></Cell>
      <Cell col={6} row={1}><ColorBlock color="var(--theme-white)" /></Cell>

      {/* Row 2 — opacity=0.6 */}
      <Cell col={1} row={2}><ColorBlock color="var(--theme-cyan)" opacity={0.6} /></Cell>
      <Cell col={2} row={2}><ColorBlock color="var(--theme-magenta)" opacity={0.6} /></Cell>
      <Cell col={3} row={2}><ColorBlock color="var(--theme-orange)" opacity={0.6} /></Cell>
      <Cell col={4} row={2}><ColorBlock color="var(--theme-green)" opacity={0.6} /></Cell>
      <Cell col={5} row={2}><ColorBlock color="var(--theme-purple)" opacity={0.6} /></Cell>
      <Cell col={6} row={2}><ColorBlock color="var(--theme-white)" opacity={0.6} /></Cell>

      {/* Row 3 — opacity=0.25 */}
      <Cell col={1} row={3}><ColorBlock color="var(--theme-cyan)" opacity={0.25} /></Cell>
      <Cell col={2} row={3}><ColorBlock color="var(--theme-magenta)" opacity={0.25} /></Cell>
      <Cell col={3} row={3}><ColorBlock color="var(--theme-orange)" opacity={0.25} /></Cell>
      <Cell col={4} row={3}><ColorBlock color="var(--theme-green)" opacity={0.25} /></Cell>
      <Cell col={5} row={3}><ColorBlock color="var(--theme-purple)" opacity={0.25} /></Cell>
      <Cell col={6} row={3}><ColorBlock color="var(--theme-white)" opacity={0.25} /></Cell>

      {/* Rows 4–5 — spanning cells at low opacity (background use-case) */}
      <Cell col={1} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.12} />
      </Cell>
      <Cell col={4} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.12} />
      </Cell>

      {/* Full-face image overlay — no zIndex so mix-blend-mode can blend with cells below */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/faces/hypertensile-connections-01.webp"
          alt="Hypertensile connections"
          mixBlendMode="screen"
        />
      </Cell>

      {/* Row 6 — label */}
      <Cell col={1} row={6} colSpan={6} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.12em">
          opacity · 1.0 → 0.6 → 0.25
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 2 · Neon blobs ─────────────────────────────────────────────────────────
export const NeonBlobs: Story = {
  name: '2 – Neon blobs',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Row 1 — opacity=1 (full), each theme colour */}
      <Cell col={1} row={1}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={1}><ColorBlock color="var(--theme-magenta)" /></Cell>
      <Cell col={3} row={1}><ColorBlock color="var(--theme-orange)" /></Cell>
      <Cell col={4} row={1}><ColorBlock color="var(--theme-green)" /></Cell>
      <Cell col={5} row={1}><ColorBlock color="var(--theme-purple)" /></Cell>
      <Cell col={6} row={1}><ColorBlock color="var(--theme-white)" /></Cell>

      {/* Row 2 — opacity=0.6 */}
      <Cell col={1} row={2}><ColorBlock color="var(--theme-cyan)" opacity={0.6} /></Cell>
      <Cell col={2} row={2}><ColorBlock color="var(--theme-magenta)" opacity={0.6} /></Cell>
      <Cell col={3} row={2}><ColorBlock color="var(--theme-orange)" opacity={0.6} /></Cell>
      <Cell col={4} row={2}><ColorBlock color="var(--theme-green)" opacity={0.6} /></Cell>
      <Cell col={5} row={2}><ColorBlock color="var(--theme-purple)" opacity={0.6} /></Cell>
      <Cell col={6} row={2}><ColorBlock color="var(--theme-white)" opacity={0.6} /></Cell>

      {/* Row 3 — opacity=0.25 */}
      <Cell col={1} row={3}><ColorBlock color="var(--theme-cyan)" opacity={0.25} /></Cell>
      <Cell col={2} row={3}><ColorBlock color="var(--theme-magenta)" opacity={0.25} /></Cell>
      <Cell col={3} row={3}><ColorBlock color="var(--theme-orange)" opacity={0.25} /></Cell>
      <Cell col={4} row={3}><ColorBlock color="var(--theme-green)" opacity={0.25} /></Cell>
      <Cell col={5} row={3}><ColorBlock color="var(--theme-purple)" opacity={0.25} /></Cell>
      <Cell col={6} row={3}><ColorBlock color="var(--theme-white)" opacity={0.25} /></Cell>

      {/* Rows 4–5 — spanning cells at low opacity (background use-case) */}
      <Cell col={1} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.12} />
      </Cell>
      <Cell col={4} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.12} />
      </Cell>

      {/* Full-face image overlay — no zIndex so mix-blend-mode can blend with cells below */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/faces/neon-blobs-01.webp"
          alt="Neon blobs"
          mixBlendMode="screen"
        />
      </Cell>

      {/* Row 6 — label */}
      <Cell col={1} row={6} colSpan={6} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.12em">
          opacity · 1.0 → 0.6 → 0.25
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 3 · Neon blobs + AI copy ───────────────────────────────────────────────
export const NeonBlobsWithCopy: Story = {
  name: '3 – Neon blobs + AI copy',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Row 1 — opacity=1 (full), each theme colour */}
      <Cell col={1} row={1}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={1}><ColorBlock color="var(--theme-magenta)" /></Cell>
      <Cell col={3} row={1}><ColorBlock color="var(--theme-orange)" /></Cell>
      <Cell col={4} row={1}><ColorBlock color="var(--theme-green)" /></Cell>
      <Cell col={5} row={1}><ColorBlock color="var(--theme-purple)" /></Cell>
      <Cell col={6} row={1}><ColorBlock color="rgba(255, 255, 255, 0.8)" /></Cell>

      {/* Row 2 — opacity=0.6 */}
      <Cell col={1} row={2}><ColorBlock color="var(--theme-cyan)" opacity={0.6} /></Cell>
      <Cell col={2} row={2}><ColorBlock color="var(--theme-magenta)" opacity={0.6} /></Cell>
      <Cell col={3} row={2}><ColorBlock color="var(--theme-orange)" opacity={0.6} /></Cell>
      <Cell col={4} row={2}><ColorBlock color="var(--theme-green)" opacity={0.6} /></Cell>
      <Cell col={5} row={2}><ColorBlock color="var(--theme-purple)" opacity={0.6} /></Cell>
      <Cell col={6} row={2}><ColorBlock color="var(--theme-white)" opacity={0.6} /></Cell>

      {/* Row 3 — opacity=0.25 */}
      <Cell col={1} row={3}><ColorBlock color="var(--theme-cyan)" opacity={0.25} /></Cell>
      <Cell col={2} row={3}><ColorBlock color="var(--theme-magenta)" opacity={0.25} /></Cell>
      <Cell col={3} row={3}><ColorBlock color="var(--theme-orange)" opacity={0.25} /></Cell>
      <Cell col={4} row={3}><ColorBlock color="var(--theme-green)" opacity={0.25} /></Cell>
      <Cell col={5} row={3}><ColorBlock color="var(--theme-purple)" opacity={0.25} /></Cell>
      <Cell col={6} row={3}><ColorBlock color="var(--theme-white)" opacity={0.25} /></Cell>

      {/* Rows 4–5 — spanning cells at low opacity (background use-case) */}
      <Cell col={1} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.12} />
      </Cell>
      <Cell col={4} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.12} />
      </Cell>

      {/* Full-face image overlay — no zIndex so mix-blend-mode can blend with cells below */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/faces/neon-blobs-01.webp"
          alt="Neon blobs"
          mixBlendMode="screen"
          opacity={0.7}
        />
      </Cell>

      {/* AI copy — big title + smaller lines */}
      <Cell col={1} row={2} colSpan={2} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={20}
          color="var(--theme-white)"
          alignHorizontal="end"
          alignVertical="center"
          padding={3}
          fontWeight={800}
          mono
          letterSpacing="0.025em"
        >
          AI
        </TextBlock>
      </Cell>

      {/* AI copy — big title + smaller lines */}
      <Cell col={3} row={2} colSpan={4} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={6.3}
          color="var(--theme-white)"
          alignHorizontal="start"
          alignVertical="center"
          padding={2}
          fontWeight={600}
          lineHeight={1.5}
        >
          Artificial<br />Intelligence
        </TextBlock>
      </Cell>

      <Cell col={2} row={4} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
          <em>Large language models</em>
        </TextBlock>
      </Cell>
      <Cell col={2} row={5} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
          <em>Distributed agentic web</em>
        </TextBlock>
      </Cell>
      <Cell col={2} row={6} colSpan={5} zIndex={2}>
        <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
          <em>Autonomous agentic capability</em>
        </TextBlock>
      </Cell>

      <Cell col={1} row={4}>
        <IconSingle name="network" color="var(--theme-white)" iconSize={9} opacity={1} />
      </Cell>
      <Cell col={1} row={5}>
        <IconSingle name="head-circuit" color="var(--theme-white)" iconSize={9} opacity={1} />
      </Cell>
      <Cell col={2} row={4}>
        <IconSingle name="fediverse-logo" color="var(--theme-white)" iconSize={9} opacity={1} />
      </Cell>
      

    </FaceGrid>
  ),
};

// ─── 4 · Broken layout ───────────────────────────────────────────────────────────
export const BrokenLayout: Story = {
  name: '4 – Broken layout',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* Row 1 — opacity=1 (full), each theme colour */}
      <Cell col={1} row={1}><ColorBlock color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={1}><ColorBlock color="var(--theme-magenta)" /></Cell>
      <Cell col={3} row={1}><ColorBlock color="var(--theme-orange)" /></Cell>
      <Cell col={4} row={1}><ColorBlock color="var(--theme-green)" /></Cell>
      <Cell col={5} row={1}><ColorBlock color="var(--theme-purple)" /></Cell>
      <Cell col={6} row={1}><ColorBlock color="var(--theme-white)" /></Cell>

      {/* Row 2 — opacity=0.6 */}
      <Cell col={1} row={2}><ColorBlock color="var(--theme-cyan)" opacity={0.6} /></Cell>
      <Cell col={2} row={2}><ColorBlock color="var(--theme-magenta)" opacity={0.6} /></Cell>
      <Cell col={3} row={2}><ColorBlock color="var(--theme-orange)" opacity={0.6} /></Cell>
      <Cell col={4} row={2}><ColorBlock color="var(--theme-green)" opacity={0.6} /></Cell>
      <Cell col={5} row={2}><ColorBlock color="var(--theme-purple)" opacity={0.6} /></Cell>
      <Cell col={6} row={2}><ColorBlock color="var(--theme-white)" opacity={0.6} /></Cell>

      {/* Row 3 — opacity=0.25 */}
      <Cell col={1} row={3}><ColorBlock color="var(--theme-cyan)" opacity={0.25} /></Cell>
      <Cell col={2} row={3}><ColorBlock color="var(--theme-magenta)" opacity={0.25} /></Cell>
      <Cell col={3} row={3}><ColorBlock color="var(--theme-orange)" opacity={0.25} /></Cell>
      <Cell col={4} row={3}><ColorBlock color="var(--theme-green)" opacity={0.25} /></Cell>
      <Cell col={5} row={3}><ColorBlock color="var(--theme-purple)" opacity={0.25} /></Cell>
      <Cell col={6} row={3}><ColorBlock color="var(--theme-white)" opacity={0.25} /></Cell>

      {/* Rows 4–5 — spanning cells at low opacity (background use-case) */}
      <Cell col={1} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.12} />
      </Cell>
      <Cell col={4} row={4} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.12} />
      </Cell>

      {/* Full-face image overlay — no zIndex so mix-blend-mode can blend with cells below */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <ImageBlock
          src="/faces/neon-blobs-01.webp"
          alt="Neon blobs"
          mixBlendMode="screen"
        />
      </Cell>

      {/* AI copy — big title + smaller lines */}
      <Cell col={1} row={2} colSpan={4} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={14}
          color="var(--theme-white)"
          alignHorizontal="start"
          alignVertical="end"
          padding={3}
          fontWeight={800}
        >
          AI
        </TextBlock>
      </Cell>

      {/* AI copy — big title + smaller lines */}
      <Cell col={12} row={2} colSpan={4} rowSpan={2} zIndex={2}>
        <TextBlock
          fontSize={6}
          color="var(--theme-white)"
          alignHorizontal="start"
          alignVertical="end"
          padding={3}
          fontWeight={700}
        >
          Artificial Intelligence
        </TextBlock>
      </Cell>

      <Cell col={1} row={4} colSpan={4} zIndex={2}>
        <TextBlock fontSize={5} fontWeight={500} alignHorizontal="start" padding={3}>
          Large language models
        </TextBlock>
      </Cell>
      <Cell col={1} row={5} colSpan={4} zIndex={2}>
        <TextBlock fontSize={5} fontWeight={500} alignHorizontal="start" padding={3}>
          Distributed agentic web
        </TextBlock>
      </Cell>
      <Cell col={1} row={6} colSpan={4} zIndex={2}>
        <TextBlock fontSize={5} fontWeight={500} alignHorizontal="start" padding={3}>
          Autonomous agentic capability
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};