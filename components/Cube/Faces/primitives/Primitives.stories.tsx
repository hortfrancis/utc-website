import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
  IconSingle,
  StripeBars,
} from '.';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Primitives                                               */
/*                                                                     */
/*  Modular, reusable primitives for composing cube face layouts.      */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/*  One story per primitive — each story is a self-contained           */
/*  reference showing the full prop surface via labelled examples.     */
/*                                                                     */
/*  Primitives (in compositional order):                               */
/*    1  <GridLines>     — decorative 6×6 border overlay               */
/*    2  <Cell>          — grid positioning (col, row, spans, zIndex)  */
/*    3  <ColorBlock>    — solid colour fill                           */
/*    4  <GradientBlock> — linear gradient fill                        */
/*    5  <ImageBlock>    — image with directional gradient mask        */
/*    6  <TextBlock>     — cqi-sized text, many typographic props      */
/*    7  <IconQuad>      — 4 icons in one cell with + divider          */
/*    8  <IconSingle>    — single centred icon                         */
/*    9  <StripeBars>    — thin horizontal colour stripe bars          */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Cube/Face Primitives',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modular primitives for cube face layouts. Rendered in a 300px square frame. ' +
          'All sizing uses cqi units — 1cqi = 1% of the face width. ' +
          'One grid cell ≈ 16.67cqi. Never use px/rem/% for element sizing inside FaceGrid.',
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

// ─── 1 · GridLines ──────────────────────────────────────────────────────────
/*
 * Decorative 6×6 border overlay. Spans the full face automatically.
 * Place early in the DOM so content layers on top.
 *
 * Props:
 *   color?   — CSS colour value. Default: var(--theme-white)
 *   opacity? — 0–1. Default: 0.2
 *
 * Usage:
 *   <FaceGrid>
 *     <GridLines />                                    // white, 0.2 opacity
 *     <GridLines color="var(--theme-cyan)" opacity={0.4} />
 *   </FaceGrid>
 */
export const GridLinesDemo: Story = {
  name: '1 – GridLines',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Left half — default (white, 0.2) */}
      <div style={{ gridColumn: '1 / span 3', gridRow: '1 / -1' }}>
        <GridLines />
      </div>

      {/* Right half — custom color + higher opacity */}
      <div style={{ gridColumn: '4 / -1', gridRow: '1 / -1' }}>
        <GridLines color="var(--theme-cyan)" opacity={0.4} />
      </div>

      {/* Labels */}
      <Cell col={1} row={6} colSpan={3} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.5} mono uppercase letterSpacing="0.1em" padding={1} alignHorizontal="start" alignVertical="start">
          default
        </TextBlock>
      </Cell>
      <Cell col={4} row={6} colSpan={3} zIndex={10}>
        <TextBlock fontSize={3} color="var(--theme-cyan)" opacity={0.7} mono uppercase letterSpacing="0.1em" padding={1} alignHorizontal="start" alignVertical="start">
          cyan 0.4
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 2 · Cell ───────────────────────────────────────────────────────────────
/*
 * Grid positioning primitive. Place it at any col/row with optional spans.
 * The 6×6 grid runs col 1–6, row 1–6. Use integer values only.
 *
 * Props:
 *   col        — column start, 1–6 (required)
 *   row        — row start, 1–6 (required)
 *   colSpan?   — columns to span. Default: 1
 *   rowSpan?   — rows to span. Default: 1
 *   zIndex?    — explicit stacking order (for overlapping cells)
 *   className? — passthrough className
 *
 * Usage:
 *   <Cell col={1} row={1} />                           // single cell, top-left
 *   <Cell col={1} row={1} colSpan={6} rowSpan={6} />  // full face
 *   <Cell col={3} row={2} colSpan={2} rowSpan={3} zIndex={1} />
 */
export const CellPlacement: Story = {
  name: '2 – Cell',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* col=1 row=1 — single cell, top-left */}
      <Cell col={1} row={1}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>

      {/* colSpan=2 — two-column span */}
      <Cell col={3} row={1} colSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>

      {/* colSpan=2 rowSpan=2 — square block */}
      <Cell col={2} row={3} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>

      {/* rowSpan=3 — tall column */}
      <Cell col={5} row={2} rowSpan={3}>
        <ColorBlock color="var(--theme-green)" opacity={0.7} />
      </Cell>

      {/* colSpan=6 — full-width row */}
      <Cell col={1} row={6} colSpan={6}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.5} />
      </Cell>

      {/* zIndex — overlapping cells: cyan (zIndex=2) renders above orange (zIndex=1) */}
      <Cell col={4} row={4} colSpan={2} rowSpan={2} zIndex={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.5} />
      </Cell>
      <Cell col={5} row={3} colSpan={2} rowSpan={2} zIndex={1}>
        <ColorBlock color="var(--theme-orange)" opacity={0.5} />
      </Cell>
    </FaceGrid>
  ),
};

// ─── 3 · ColorBlock ─────────────────────────────────────────────────────────
/*
 * Fills its parent Cell with a solid colour. Simplest fill primitive.
 *
 * Props:
 *   color      — CSS colour or theme var (required)
 *   opacity?   — 0–1. Default: 1
 *   className? — passthrough className
 *
 * Usage:
 *   <Cell col={1} row={1}>
 *     <ColorBlock color="var(--theme-cyan)" />
 *   </Cell>
 *   <Cell col={1} row={1} colSpan={3}>
 *     <ColorBlock color="var(--theme-purple)" opacity={0.4} />
 *   </Cell>
 */
export const ColorBlockDemo: Story = {
  name: '3 – ColorBlock',
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

      {/* Row 6 — label */}
      <Cell col={1} row={6} colSpan={6} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.12em">
          opacity · 1.0 → 0.6 → 0.25
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 4 · GradientBlock ──────────────────────────────────────────────────────
/*
 * Fills its parent Cell with a CSS linear gradient.
 * Use inside a Cell for cell-scoped gradients, or full-spanning for
 * a face-wide colour overlay.
 *
 * Props:
 *   stops      — GradientStop[] — at least 2 required.
 *                Each stop: { color: string, position?: number }
 *                position is 0–100 (percentage); omit to distribute evenly.
 *   direction? — CSS gradient direction. Default: 'to bottom'
 *                Accepts: 'to right', 'to bottom', '45deg', '135deg', etc.
 *   opacity?   — 0–1. Default: 1
 *   className? — passthrough className
 *
 * Usage:
 *   <Cell col={1} row={1} colSpan={6} rowSpan={6}>
 *     <GradientBlock
 *       direction="to bottom"
 *       stops={[
 *         { color: 'var(--theme-purple)', position: 0 },
 *         { color: 'transparent', position: 100 },
 *       ]}
 *     />
 *   </Cell>
 */
export const GradientBlockDemo: Story = {
  name: '4 – GradientBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* direction: 'to bottom' — purple → transparent */}
      <Cell col={1} row={1} colSpan={2} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>

      {/* direction: 'to right' — cyan → transparent */}
      <Cell col={3} row={1} colSpan={4} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>

      {/* direction: '135deg' — multi-stop */}
      <Cell col={3} row={3} colSpan={4} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-orange)', position: 50 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
          opacity={0.8}
        />
      </Cell>

      {/* Evenly distributed stops — no position values */}
      <Cell col={1} row={5} colSpan={6} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-purple)' },
            { color: 'var(--theme-cyan)' },
            { color: 'var(--theme-orange)' },
            { color: 'var(--theme-green)' },
          ]}
          opacity={0.6}
        />
      </Cell>

      {/* Labels */}
      <Cell col={1} row={4} colSpan={2} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.5} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          to bottom
        </TextBlock>
      </Cell>
      <Cell col={3} row={2} colSpan={2} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.5} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          to right
        </TextBlock>
      </Cell>
      <Cell col={3} row={4} colSpan={2} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.5} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          135deg
        </TextBlock>
      </Cell>
      <Cell col={1} row={5} colSpan={4} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.5} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          no position (even)
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 5 · ImageBlock ─────────────────────────────────────────────────────────
/*
 * Image that fills its parent Cell. Supports directional gradient masks
 * for fade effects. Wrap in a full-spanning Cell for a background image,
 * or a smaller Cell for a cropped region.
 *
 * Props:
 *   src             — image URL (required)
 *   alt             — alt text (required)
 *   mask?           — 'fade-down' | 'fade-up' | 'fade-left' | 'fade-right'
 *                      Applies a black→transparent CSS mask so the image fades
 *                      out at that edge.
 *   objectFit?      — CSS object-fit. Default: 'cover'
 *   objectPosition? — CSS object-position. Controls which part is visible
 *                      when cropped (e.g. 'top left', '20% 80%').
 *   opacity?        — 0–1. Default: 1
 *   scale?          — Zoom factor. E.g. 2 = 2× center crop, clipped to cell.
 *
 * Usage:
 *   <Cell col={1} row={1} colSpan={6} rowSpan={6}>
 *     <ImageBlock src="/images/experiments/vr01.png" alt="VR" mask="fade-down" />
 *   </Cell>
 */
export const ImageBlockDemo: Story = {
  name: '5 – ImageBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">

      {/* mask="fade-down" — image fades out toward the bottom */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock src="/images/experiments/vr01.png" alt="VR headset" mask="fade-down" />
      </Cell>

      {/* mask="fade-up" — image fades out toward the top */}
      <Cell col={4} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock src="/images/experiments/vr01.png" alt="VR headset" mask="fade-up" />
      </Cell>

      {/* mask="fade-right" — image fades out toward the right */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock src="/images/experiments/vr01.png" alt="VR headset" mask="fade-right" />
      </Cell>

      {/* mask="fade-left" — image fades out toward the left */}
      <Cell col={4} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock src="/images/experiments/vr01.png" alt="VR headset" mask="fade-left" />
      </Cell>

      <GridLines opacity={0.12} />

      {/* Labels */}
      <Cell col={1} row={1} colSpan={3} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          fade-down
        </TextBlock>
      </Cell>
      <Cell col={4} row={1} colSpan={3} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          fade-up
        </TextBlock>
      </Cell>
      <Cell col={1} row={4} colSpan={3} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          fade-right
        </TextBlock>
      </Cell>
      <Cell col={4} row={4} colSpan={3} zIndex={2}>
        <TextBlock fontSize={3} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={1} alignHorizontal="start" alignVertical="start">
          fade-left
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 5b · ImageBlock scale ───────────────────────────────────────────────────
/*
 * scale — Zooms the image (center crop). Useful for project thumbnails
 *         where you want a tighter framing. objectPosition — Adjusts
 *         which part of the image is visible when cropped.
 */
export const ImageBlockScale: Story = {
  name: '5b – ImageBlock scale & objectPosition',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src="/images/experiments/vr01.png" alt="VR headset" scale={2} />
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/experiments/vr01.png"
          alt="VR headset"
          scale={2}
          objectPosition="top left"
        />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/experiments/vr01.png"
          alt="VR headset"
          scale={1.5}
          objectPosition="bottom right"
        />
      </Cell>
      <GridLines opacity={0.12} />
      <Cell col={1} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          scale=2 (center)
        </TextBlock>
      </Cell>
      <Cell col={3} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          scale=2, objectPosition=top left
        </TextBlock>
      </Cell>
      <Cell col={5} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          scale=1.5, objectPosition=bottom right
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 5c · ImageBlock mixBlendMode ────────────────────────────────────────────
/*
 * mixBlendMode — CSS mix-blend-mode. Blends the image with content behind it.
 *                Use a ColorBlock (or similar) in a Cell behind the ImageBlock
 *                to see the effect. Works with scale — blend mode is applied
 *                on the outer wrapper when scale is used (transform creates a
 *                stacking context that would otherwise isolate descendants).
 */
export const ImageBlockMixBlendMode: Story = {
  name: '5c – ImageBlock mixBlendMode',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* multiply — darkens, typical duotone / screen-print look */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/experiments/vr01.png"
          alt="VR headset"
          scale={2}
          mixBlendMode="multiply"
        />
      </Cell>
      {/* screen — lightens */}
      <Cell col={3} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/experiments/vr01.png"
          alt="VR headset"
          scale={2}
          mixBlendMode="screen"
        />
      </Cell>
      {/* overlay — contrast */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/experiments/vr01.png"
          alt="VR headset"
          scale={2}
          mixBlendMode="overlay"
        />
      </Cell>
      <GridLines opacity={0.12} />
      <Cell col={1} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          multiply
        </TextBlock>
      </Cell>
      <Cell col={3} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          screen
        </TextBlock>
      </Cell>
      <Cell col={5} row={1} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} opacity={0.7} mono uppercase letterSpacing="0.08em" padding={0.5} alignHorizontal="start" alignVertical="start">
          overlay
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 6 · TextBlock ──────────────────────────────────────────────────────────
/*
 * CQI-scaled text element. Renders a flex container that fills its Cell.
 * Font size is always in cqi so text scales with the face container.
 *
 * Props:
 *   fontSize       — size in cqi units (required). Typical range: 3–25.
 *   color?         — CSS colour. Default: var(--theme-white)
 *   opacity?       — 0–1. Default: 1
 *   fontWeight?    — numeric weight. Default: 900
 *   letterSpacing? — CSS letter-spacing string. Default: '-0.04em'
 *   mono?          — enables monospace axis (Recursive MONO 1). Default: false
 *   uppercase?     — text-transform: uppercase. Default: false
 *   alignHorizontal? — 'start' | 'center' | 'end'. Default: 'center'
 *   alignVertical?   — 'start' | 'center' | 'end'. Default: 'center'
 *                    Controls both flex alignment and text placement.
 *   padding?       — padding in cqi units. Default: 0
 *   children       — text content (required)
 *
 * Usage:
 *   <Cell col={1} row={1} colSpan={6} rowSpan={2}>
 *     <TextBlock fontSize={20} padding={2}>XR</TextBlock>
 *   </Cell>
 *   <Cell col={1} row={3} colSpan={6}>
 *     <TextBlock fontSize={4} mono uppercase letterSpacing="0.15em" alignHorizontal="start" alignVertical="start" padding={2}>
 *       Extended Reality
 *     </TextBlock>
 *   </Cell>
 */
export const TextBlockDemo: Story = {
  name: '6 – TextBlock',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.06} />

      {/* fontSize: large heading — 20cqi, default fontWeight 900 */}
      <Cell col={1} row={1} colSpan={3} rowSpan={2}>
        <TextBlock fontSize={20} padding={1.5}>
          XR
        </TextBlock>
      </Cell>

      {/* mono + uppercase + letterSpacing — label / eyebrow style */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <TextBlock
          fontSize={4.5}
          mono
          uppercase
          letterSpacing="0.15em"
          fontWeight={700}
          opacity={0.6}
          padding={1.5}
          alignHorizontal="start" alignVertical="start"
        >
          Extended Reality
        </TextBlock>
      </Cell>

      {/* body scale — fontWeight=400, loose letterSpacing, alignHorizontal="start" alignVertical="start" */}
      <Cell col={1} row={3} colSpan={6} rowSpan={2}>
        <TextBlock
          fontSize={3.5}
          fontWeight={400}
          letterSpacing="0"
          opacity={0.55}
          padding={2}
          alignHorizontal="start" alignVertical="start"
        >
          Immersive experiences bridging
          <br />
          virtual and physical worlds.
        </TextBlock>
      </Cell>

      {/* color — accent cyan, alignHorizontal="start" alignVertical="start" */}
      <Cell col={1} row={5} colSpan={3}>
        <TextBlock
          fontSize={4}
          color="var(--theme-cyan)"
          mono
          uppercase
          letterSpacing="0.1em"
          padding={1.5}
          alignHorizontal="start" alignVertical="start"
        >
          VR · AR
        </TextBlock>
      </Cell>

      {/* alignHorizontal="end" alignVertical="end" — right-aligned */}
      <Cell col={4} row={5} colSpan={3}>
        <TextBlock
          fontSize={4}
          opacity={0.35}
          mono
          uppercase
          letterSpacing="0.1em"
          padding={1.5}
          alignHorizontal="end" alignVertical="end"
        >
          MR · XR
        </TextBlock>
      </Cell>

      {/* fontWeight=200 — ultra-thin, wide tracking */}
      <Cell col={1} row={6} colSpan={6}>
        <TextBlock
          fontSize={5}
          fontWeight={200}
          letterSpacing="0.25em"
          uppercase
          opacity={0.3}
        >
          urban tech creative
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

// ─── 7 · IconQuad ───────────────────────────────────────────────────────────
/*
 * Four icons arranged in a 2×2 layout within one Cell, with an optional
 * Phosphor `plus` icon centred as a visual divider.
 *
 * Props:
 *   icons           — { tl?, tr?, bl?, br? } — IconName per quadrant.
 *                     Omit a key to leave that quadrant empty.
 *   centered?       — centre icons within quadrants instead of corner-anchoring.
 *                     Default: false
 *   showDivider?    — show the plus divider. Default: true
 *   color?          — icon colour. Default: var(--theme-white)
 *   weight?         — Phosphor weight for icons. Default: 'fill'
 *   opacity?        — overall opacity 0–1. Default: 1
 *   iconSize?       — icon size in cqi. Default: 5
 *   dividerSize?    — divider as % of cell. Default: 50
 *   dividerOpacity? — 0–1. Default: 0.5
 *   dividerWeight?  — Phosphor weight for divider. Default: 'thin'
 *   dividerColor?   — overrides color for the divider only
 *
 * Usage:
 *   <Cell col={1} row={1}>
 *     <IconQuad icons={{ tl: 'cube', tr: 'atom', bl: 'lightning', br: 'sparkle' }} />
 *   </Cell>
 */
export const IconQuadDemo: Story = {
  name: '7 – IconQuad',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* All 4 quadrants — default props (white, fill, divider) */}
      <Cell col={1} row={1}>
        <IconQuad
          icons={{ tl: 'google-cardboard', tr: 'virtual-reality', bl: 'cube-focus', br: 'globe' }}
        />
      </Cell>

      {/* showDivider=false — 2 icons, no plus divider */}
      <Cell col={2} row={1}>
        <IconQuad
          icons={{ tl: 'hard-hat', br: 'blueprint' }}
          showDivider={false}
          opacity={0.6}
        />
      </Cell>

      {/* weight='light' + custom color + matching dividerColor */}
      <Cell col={3} row={1}>
        <IconQuad
          icons={{ tl: 'camera', tr: 'paintbrush', bl: 'code', br: 'browsers' }}
          weight="light"
          color="var(--theme-orange)"
          dividerColor="var(--theme-orange)"
        />
      </Cell>

      {/* weight='duotone' + cyan */}
      <Cell col={4} row={1}>
        <IconQuad
          icons={{ tl: 'newspaper', tr: 'megaphone', bl: 'chat', br: 'rss' }}
          weight="duotone"
          color="var(--theme-cyan)"
          dividerColor="var(--theme-cyan)"
          opacity={0.8}
        />
      </Cell>

      {/* opacity=0.2 — subtle background texture, larger icons in 2×2 cell */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{ tl: 'atom', tr: 'circuit-board', bl: 'brain', br: 'flask' }}
          opacity={0.2}
          color="var(--theme-purple)"
          dividerColor="var(--theme-purple)"
          iconSize={7}
        />
      </Cell>

      {/* colSpan=2 rowSpan=2 + iconSize=10 — large icons in bigger cell */}
      <Cell col={1} row={2} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{ tl: 'cube', tr: 'atom', bl: 'lightning', br: 'sparkle' }}
          iconSize={10}
          color="var(--theme-purple)"
          dividerColor="var(--theme-purple)"
        />
      </Cell>

      {/* centered=true — icons centred in quadrants, not corner-anchored */}
      <Cell col={3} row={2} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{ tl: 'rocket', tr: 'planet', bl: 'star', br: 'sparkle' }}
          centered
          color="var(--theme-cyan)"
          dividerColor="var(--theme-cyan)"
          dividerOpacity={0.25}
        />
      </Cell>

      {/* dividerSize=70 + dividerWeight='regular' — prominent divider */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <IconQuad
          icons={{ tl: 'globe', tr: 'broadcast', bl: 'wifi', br: 'monitor' }}
          iconSize={8}
          color="var(--theme-green)"
          dividerColor="var(--theme-green)"
          dividerSize={70}
          dividerOpacity={0.2}
          dividerWeight="regular"
        />
      </Cell>

      {/* showDivider=false + opacity=0.15 — ghost background layer */}
      <Cell col={4} row={3} colSpan={3} rowSpan={4}>
        <IconQuad
          icons={{ tl: 'pencil', tr: 'palette', bl: 'film-strip', br: 'image' }}
          iconSize={9}
          opacity={0.15}
          color="var(--theme-magenta)"
          showDivider={false}
        />
      </Cell>
    </FaceGrid>
  ),
};

// ─── 8 · IconSingle ─────────────────────────────────────────────────────────
/*
 * A single icon centred within a Cell. Intended for cells where one icon
 * is the focal point. Sized larger than IconQuad icons by default.
 *
 * Props:
 *   name      — IconName from the registry (required)
 *   color?    — CSS colour. Default: var(--theme-white)
 *   weight?   — 'thin'|'light'|'regular'|'bold'|'fill'|'duotone'
 *               Default: 'fill'
 *   opacity?  — 0–1. Default: 1
 *   iconSize? — size in cqi units. Default: 12 (~72% of one cell)
 *
 * Usage:
 *   <Cell col={1} row={1}>
 *     <IconSingle name="rocket" color="var(--theme-cyan)" />
 *   </Cell>
 *   <Cell col={1} row={1} colSpan={2} rowSpan={2}>
 *     <IconSingle name="globe" iconSize={20} weight="duotone" />
 *   </Cell>
 */
export const IconSingleDemo: Story = {
  name: '8 – IconSingle',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {/* weight variants — thin → light → regular → bold → fill → duotone */}
      <Cell col={1} row={1}><IconSingle name="cube" weight="thin" opacity={0.8} /></Cell>
      <Cell col={2} row={1}><IconSingle name="cube" weight="light" opacity={0.8} /></Cell>
      <Cell col={3} row={1}><IconSingle name="cube" weight="regular" opacity={0.8} /></Cell>
      <Cell col={4} row={1}><IconSingle name="cube" weight="bold" opacity={0.8} /></Cell>
      <Cell col={5} row={1}><IconSingle name="cube" weight="fill" /></Cell>
      <Cell col={6} row={1}><IconSingle name="cube" weight="duotone" /></Cell>

      {/* color variants */}
      <Cell col={1} row={2}><IconSingle name="rocket" color="var(--theme-cyan)" /></Cell>
      <Cell col={2} row={2}><IconSingle name="rocket" color="var(--theme-magenta)" /></Cell>
      <Cell col={3} row={2}><IconSingle name="rocket" color="var(--theme-orange)" /></Cell>
      <Cell col={4} row={2}><IconSingle name="rocket" color="var(--theme-green)" /></Cell>
      <Cell col={5} row={2}><IconSingle name="rocket" color="var(--theme-purple)" /></Cell>
      <Cell col={6} row={2}><IconSingle name="rocket" color="var(--theme-white)" opacity={0.4} /></Cell>

      {/* opacity fade */}
      <Cell col={1} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={1} /></Cell>
      <Cell col={2} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={0.7} /></Cell>
      <Cell col={3} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={0.4} /></Cell>
      <Cell col={4} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={0.2} /></Cell>
      <Cell col={5} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={0.1} /></Cell>
      <Cell col={6} row={3}><IconSingle name="sparkle" color="var(--theme-cyan)" opacity={0.05} /></Cell>

      {/* iconSize in spanning cells — larger cell = room for bigger icon */}
      <Cell col={1} row={4} colSpan={2} rowSpan={3}>
        <IconSingle name="globe" color="var(--theme-green)" iconSize={20} weight="duotone" />
      </Cell>
      <Cell col={3} row={4} colSpan={2} rowSpan={3}>
        <IconSingle name="virtual-reality" color="var(--theme-purple)" iconSize={18} />
      </Cell>
      {/* Default iconSize=12 in same 2×3 cell — appears smaller for comparison */}
      <Cell col={5} row={4} colSpan={2} rowSpan={3}>
        <IconSingle name="brain" color="var(--theme-magenta)" iconSize={12} />
      </Cell>
    </FaceGrid>
  ),
};

// ─── 9 · StripeBars ─────────────────────────────────────────────────────────
/*
 * Thin horizontal colour-stripe bar. Fills its parent Cell — use <Cell>
 * to control grid position, exactly like every other content primitive.
 *
 * Props:
 *   colors?        — ordered CSS colours, left → right.
 *                    Default: standard 6-colour acid palette.
 *   thickness?     — bar height in cqi. Default: ~3.33 (20% of one grid row)
 *   verticalAlign? — 'start' (top of cell, default) | 'center' | 'end'
 *                    Use 'center' to sit on the row mid-line,
 *                    'end' to sit on the lower row boundary.
 *
 * Usage:
 *   // Bar at the top of row 2 (default)
 *   <Cell col={1} row={2} colSpan={6} zIndex={5}>
 *     <StripeBars />
 *   </Cell>
 *
 *   // Bar centred within row 5 — sits on the row 4/5 mid-line
 *   <Cell col={1} row={5} colSpan={6} zIndex={5}>
 *     <StripeBars verticalAlign="center" />
 *   </Cell>
 */
export const StripeBarsDemo: Story = {
  name: '9 – StripeBars',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      <Cell col={1} row={1} colSpan={6} rowSpan={6}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'transparent', position: 60 },
          ]}
          opacity={0.25}
        />
      </Cell>

      {/* R1 — default acid palette, start (default) */}
      <Cell col={1} row={1} colSpan={6} zIndex={5}>
        <StripeBars />
      </Cell>

      {/* R2–R4 — verticalAlign: start / center / end */}
      <Cell col={1} row={2} colSpan={4} zIndex={5}>
        <StripeBars colors={['var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)']} verticalAlign="start" />
      </Cell>
      <Cell col={1} row={3} colSpan={4} zIndex={5}>
        <StripeBars colors={['var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)']} verticalAlign="center" />
      </Cell>
      <Cell col={1} row={4} colSpan={4} zIndex={5}>
        <StripeBars colors={['var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)', 'var(--theme-magenta)']} verticalAlign="end" />
      </Cell>

      {/* R5 — thick custom bar */}
      <Cell col={1} row={5} colSpan={6} zIndex={5}>
        <StripeBars
          colors={['var(--theme-cyan)', 'var(--theme-cyan)', 'var(--theme-orange)', 'var(--theme-orange)', 'var(--theme-green)', 'var(--theme-green)']}
          thickness={6}
        />
      </Cell>

      {/* R6 — thin monochrome bar */}
      <Cell col={1} row={6} colSpan={6} zIndex={5}>
        <StripeBars
          colors={['var(--theme-green)', 'var(--theme-green)', 'var(--theme-green)', 'var(--theme-green)', 'var(--theme-green)', 'var(--theme-green)']}
          thickness={2}
          verticalAlign="center"
        />
      </Cell>

      {/* Labels */}
      <Cell col={1} row={1} colSpan={6} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" padding={1} alignHorizontal="start" alignVertical="start">
          default
        </TextBlock>
      </Cell>
      <Cell col={5} row={2} colSpan={2} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" alignHorizontal="start" alignVertical="start" padding={1}>
          start
        </TextBlock>
      </Cell>
      <Cell col={5} row={3} colSpan={2} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" padding={1}>
          center
        </TextBlock>
      </Cell>
      <Cell col={5} row={4} colSpan={2} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" alignHorizontal="end" alignVertical="end" padding={1}>
          end
        </TextBlock>
      </Cell>
      <Cell col={1} row={5} colSpan={6} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" padding={1} alignHorizontal="start" alignVertical="start">
          thick
        </TextBlock>
      </Cell>
      <Cell col={1} row={6} colSpan={6} zIndex={10}>
        <TextBlock fontSize={3} opacity={0.4} mono uppercase letterSpacing="0.1em" padding={1} alignHorizontal="start" alignVertical="start">
          thin · center
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};
