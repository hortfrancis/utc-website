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
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Work Experiments                                         */
/*                                                                     */
/*  Layout explorations for the Work cube face.                        */
/*  Each story explores a different way to display snippets of         */
/*  multiple projects on a single 6×6 FaceGrid.                       */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/*  Images sourced from /images/work/{project}-{nn}.webp               */
/*                                                                     */
/* ================================================================== */

/* -- Image constants ------------------------------------------------ */

const IMG = {
  sammys: '/images/work/sammys-christmas-adventure-01.webp',
  sammys2: '/images/work/sammys-christmas-adventure-02.webp',
  btMfg: '/images/work/bt-manufacturing-showcase-01.webp',
  btMfg2: '/images/work/bt-manufacturing-showcase-02.webp',
  btUrban: '/images/work/bt-urban-ar-01.webp',
  btUrban2: '/images/work/bt-urban-ar-02.webp',
  construct: '/images/work/construct-ar-01.webp',
  construct2: '/images/work/construct-ar-02.webp',
  popXr: '/images/work/pop-xr-01.webp',
  popXr2: '/images/work/pop-xr-02.webp',
  tracing: '/images/work/tracing-the-footprint-01.webp',
  tracing2: '/images/work/tracing-the-footprint-02.webp',
  dock: '/images/work/dock-stories-01.webp',
  dock2: '/images/work/dock-stories-02.webp',
} as const;

/* ------------------------------------------------------------------ */

const meta = {
  title: 'Experiments/Cube Faces/Work',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Work cube face. 300px square frame. ' +
          'Explores ways to show snippets of multiple projects on a 6×6 grid. ' +
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

/* ------------------------------------------------------------------ */
/*  1 · IMAGE MOSAIC                                                   */
/*  Six project images tiled across the full 6×6 face as a collage.   */
/*  Two rows of three 2×3 blocks — no gaps, pure imagery.             */
/* ------------------------------------------------------------------ */

// ─── 1 · Image Mosaic ───────────────────────────────────────────────────────
export const ImageMosaic: Story = {
  name: '1 – Image Mosaic',
  render: () => (
    <FaceGrid>
      {/* Row 1: three 2-col × 3-row blocks */}
      <Cell col={1} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" />
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
      </Cell>

      {/* Row 2: three 2-col × 3-row blocks */}
      <Cell col={1} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
      </Cell>
      <Cell col={3} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" />
      </Cell>
      <Cell col={5} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · IMAGE GRID WITH GRID LINES                                     */
/*  Same mosaic but with GridLines overlay and slightly reduced        */
/*  image opacity — the grid structure becomes a design element.       */
/* ------------------------------------------------------------------ */

// ─── 2 · Image Grid with Lines ──────────────────────────────────────────────
export const ImageGridWithLines: Story = {
  name: '2 – Image Grid with Lines',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <Cell col={1} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" opacity={0.8} />
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.8} />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.8} />
      </Cell>
      <Cell col={1} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" opacity={0.8} />
      </Cell>
      <Cell col={3} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" opacity={0.8} />
      </Cell>
      <Cell col={5} row={4} colSpan={2} rowSpan={3}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" opacity={0.8} />
      </Cell>

      <GridLines opacity={0.4} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  3 · HERO + THUMBNAILS                                              */
/*  One project large (4×4 top-left), remaining projects as small     */
/*  2×2 thumbnails filling the L-shaped remainder.                    */
/* ------------------------------------------------------------------ */

// ─── 3 · Hero + Thumbnails ──────────────────────────────────────────────────
export const HeroThumbnails: Story = {
  name: '3 – Hero + Thumbnails',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Hero — top-left 4×4 */}
      <Cell col={1} row={1} colSpan={4} rowSpan={4}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" />
      </Cell>

      {/* Right column — two 2×2 thumbnails */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" />
      </Cell>
      <Cell col={5} row={3} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
      </Cell>

      {/* Bottom row — three 2×2 thumbnails */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
      </Cell>
      <Cell col={3} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" />
      </Cell>
      <Cell col={5} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.dock} alt="Dock Stories" />
      </Cell>

      <GridLines opacity={0.25} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  4 · LABELLED MOSAIC                                                */
/*  Image tiles with project name overlaid as small mono labels.       */
/*  Dark gradient at the bottom of each tile for readability.          */
/* ------------------------------------------------------------------ */

// ─── 4 · Labelled Mosaic ────────────────────────────────────────────────────
export const LabelledMosaic: Story = {
  name: '4 – Labelled Mosaic',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Tile 1 — Construct.AR */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" />
      </Cell>
      <Cell col={1} row={3} colSpan={3} zIndex={1}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'rgba(0,0,0,0.7)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={3} colSpan={3} zIndex={2}>
        <TextBlock
          fontSize={3}
          mono
          uppercase
          letterSpacing="0.1em"
          fontWeight={700}
          padding={1}
          align="start"
        >
          Construct.AR
        </TextBlock>
      </Cell>

      {/* Tile 2 — Pop.XR */}
      <Cell col={4} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" />
      </Cell>
      <Cell col={4} row={3} colSpan={3} zIndex={1}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'rgba(0,0,0,0.7)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={3} colSpan={3} zIndex={2}>
        <TextBlock
          fontSize={3}
          mono
          uppercase
          letterSpacing="0.1em"
          fontWeight={700}
          padding={1}
          align="start"
        >
          Pop.XR
        </TextBlock>
      </Cell>

      {/* Tile 3 — Tracing the Footprint */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
      </Cell>
      <Cell col={1} row={6} colSpan={3} zIndex={1}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'rgba(0,0,0,0.7)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={6} colSpan={3} zIndex={2}>
        <TextBlock
          fontSize={3}
          mono
          uppercase
          letterSpacing="0.1em"
          fontWeight={700}
          padding={1}
          align="start"
        >
          Tracing the Footprint
        </TextBlock>
      </Cell>

      {/* Tile 4 — BT Urban.AR */}
      <Cell col={4} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
      </Cell>
      <Cell col={4} row={6} colSpan={3} zIndex={1}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'rgba(0,0,0,0.7)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={6} colSpan={3} zIndex={2}>
        <TextBlock
          fontSize={3}
          mono
          uppercase
          letterSpacing="0.1em"
          fontWeight={700}
          padding={1}
          align="start"
        >
          BT Urban.AR
        </TextBlock>
      </Cell>

      <GridLines opacity={0.2} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  5 · GRADIENT MOSAIC                                                */
/*  Each image tile has a different themed colour gradient overlay —   */
/*  unifies the palette while keeping the imagery visible beneath.     */
/* ------------------------------------------------------------------ */

// ─── 5 · Gradient Mosaic ────────────────────────────────────────────────────
export const GradientMosaic: Story = {
  name: '5 – Gradient Mosaic',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Tile 1 — purple */}
      <Cell col={1} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Tile 2 — cyan */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Tile 3 — orange */}
      <Cell col={1} row={3} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
      </Cell>
      <Cell col={1} row={3} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-orange)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Tile 4 — green */}
      <Cell col={4} row={3} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
      </Cell>
      <Cell col={4} row={3} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Tile 5 — magenta */}
      <Cell col={1} row={5} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" />
      </Cell>
      <Cell col={1} row={5} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.5}
        />
      </Cell>

      {/* Tile 6 — purple→cyan */}
      <Cell col={4} row={5} colSpan={3} rowSpan={2}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" />
      </Cell>
      <Cell col={4} row={5} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
          opacity={0.45}
        />
      </Cell>

      <GridLines opacity={0.15} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  6 · STRIP LAYOUT                                                   */
/*  Six horizontal strips — one project per row.                       */
/*  Image fades right, project name sits on the right side.            */
/* ------------------------------------------------------------------ */

// ─── 6 · Strip Layout ───────────────────────────────────────────────────────
export const StripLayout: Story = {
  name: '6 – Strip Layout',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Strip 1 */}
      <Cell col={1} row={1} colSpan={4}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" mask="fade-right" />
      </Cell>
      <Cell col={4} row={1} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Construct.AR
        </TextBlock>
      </Cell>

      {/* Strip 2 */}
      <Cell col={1} row={2} colSpan={4}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" mask="fade-right" />
      </Cell>
      <Cell col={4} row={2} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Pop.XR
        </TextBlock>
      </Cell>

      {/* Strip 3 */}
      <Cell col={1} row={3} colSpan={4}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" mask="fade-right" />
      </Cell>
      <Cell col={4} row={3} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          BT Urban.AR
        </TextBlock>
      </Cell>

      {/* Strip 4 */}
      <Cell col={1} row={4} colSpan={4}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" mask="fade-right" />
      </Cell>
      <Cell col={4} row={4} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.4} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Tracing the Footprint
        </TextBlock>
      </Cell>

      {/* Strip 5 */}
      <Cell col={1} row={5} colSpan={4}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" mask="fade-right" />
      </Cell>
      <Cell col={4} row={5} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.4} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Sammy&apos;s Christmas
        </TextBlock>
      </Cell>

      {/* Strip 6 */}
      <Cell col={1} row={6} colSpan={4}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" mask="fade-right" />
      </Cell>
      <Cell col={4} row={6} colSpan={3} zIndex={1}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          BT Mfg Showcase
        </TextBlock>
      </Cell>

      <GridLines opacity={0.2} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  7 · ICON + IMAGE QUAD                                              */
/*  Four project images in the corners (3×3 each), a central 2×2     */
/*  block with "Work" icons and the section heading.                   */
/* ------------------------------------------------------------------ */

// ─── 7 · Icon + Image Quad ──────────────────────────────────────────────────
export const IconImageQuad: Story = {
  name: '7 – Icon + Image Quad',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Corner images */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" opacity={0.75} />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.75} />
      </Cell>
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" opacity={0.75} />
      </Cell>
      <Cell col={5} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.75} />
      </Cell>

      {/* Centre — icon quad */}
      <Cell col={3} row={3} colSpan={2} rowSpan={2}>
        <IconQuad
          icons={{
            tl: 'hard-hat',
            tr: 'crane',
            bl: 'cube',
            br: 'blueprint',
          }}
          iconSize={8}
          centered
          color="var(--theme-cyan)"
          dividerColor="var(--theme-cyan)"
        />
      </Cell>

      {/* "Work" heading spanning the middle row gap */}
      <Cell col={3} row={2} colSpan={2} zIndex={1}>
        <TextBlock
          fontSize={12}
          fontWeight={750}
          padding={1}
        >
          Work
        </TextBlock>
      </Cell>

      {/* Edge icons — bridges between corners */}
      <Cell col={3} row={1} zIndex={1}>
        <IconSingle name="camera" opacity={0.3} />
      </Cell>
      <Cell col={4} row={1} zIndex={1}>
        <IconSingle name="paintbrush" opacity={0.3} />
      </Cell>
      <Cell col={3} row={6} zIndex={1}>
        <IconSingle name="code" opacity={0.3} />
      </Cell>
      <Cell col={4} row={6} zIndex={1}>
        <IconSingle name="browsers" opacity={0.3} />
      </Cell>

      <GridLines opacity={0.2} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  8 · DARK PORTFOLIO                                                 */
/*  Mirrors the XR composition structure: dark bg, "Work" heading     */
/*  bottom-left, scattered project image peeks, grid lines visible.   */
/* ------------------------------------------------------------------ */

// ─── 8 · Dark Portfolio ─────────────────────────────────────────────────────
export const DarkPortfolio: Story = {
  name: '8 – Dark Portfolio',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* Grid lines */}
      <GridLines />

      {/* Scattered project images */}
      <Cell col={3} row={1} colSpan={4} rowSpan={4} zIndex={0}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" mask="fade-down" opacity={0.7} />
      </Cell>
      <Cell col={1} row={1} colSpan={2} rowSpan={2} zIndex={0}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.35} />
      </Cell>
      <Cell col={5} row={4} colSpan={2} rowSpan={2} zIndex={0}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.25} />
      </Cell>

      {/* Colour overlay */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 40 },
            { color: 'transparent', position: 80 },
          ]}
          opacity={0.3}
        />
      </Cell>

      {/* Top-left icons — project types */}
      <Cell col={1} row={1} zIndex={1}>
        <IconQuad icons={{ tl: 'hard-hat' }} showDivider={false} />
      </Cell>
      <Cell col={2} row={1} zIndex={1}>
        <IconQuad icons={{ tl: 'crane' }} showDivider={false} />
      </Cell>
      <Cell col={3} row={1} zIndex={1}>
        <IconQuad icons={{ tl: 'cube' }} showDivider={false} />
      </Cell>

      {/* Bottom-right icons */}
      <Cell col={5} row={3} zIndex={1}>
        <IconQuad icons={{ br: 'camera' }} showDivider={false} opacity={0.5} />
      </Cell>
      <Cell col={6} row={3} zIndex={1}>
        <IconQuad icons={{ br: 'paintbrush' }} showDivider={false} opacity={0.5} />
      </Cell>
      <Cell col={5} row={4} zIndex={1}>
        <IconQuad icons={{ br: 'code' }} showDivider={false} opacity={0.5} />
      </Cell>
      <Cell col={6} row={4} zIndex={1}>
        <IconQuad icons={{ br: 'blueprint' }} showDivider={false} opacity={0.5} />
      </Cell>

      {/* "Work" — fills C1-C2 / R5-R6 */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2} zIndex={1}>
        <TextBlock fontSize={22.5} padding={2}>
          Work
        </TextBlock>
      </Cell>

      {/* Subtitle — C3-C6 / R5 */}
      <Cell col={3} row={5} colSpan={4} zIndex={1}>
        <TextBlock
          fontSize={7}
          fontWeight={750}
          mono
          uppercase
          letterSpacing="0.1em"
          opacity={0.7}
          padding={1.5}
          align="start"
        >
          Our Projects
        </TextBlock>
      </Cell>

      {/* Project count — C3-C5 / R6 */}
      <Cell col={3} row={6} colSpan={3} zIndex={1}>
        <div
          className="flex items-center w-full h-full select-none"
          style={{ paddingInline: '1.5cqi', fontSize: '3cqi' }}
        >
          <span>
            <span className="font-bold text-theme-white/80">AR: </span>
            <span className="text-theme-white/60">Augmented Reality</span>
            <br />
            <span className="font-bold text-theme-white/80">XR: </span>
            <span className="text-theme-white/60">Mixed Immersive</span>
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  9 · HOVER: IMAGE SWAP                                              */
/*  At rest, one set of project images; on hover, cross-fades to a   */
/*  different set — showing portfolio breadth.                         */
/* ------------------------------------------------------------------ */

// ─── 9 · Hover — Image Swap ─────────────────────────────────────────────────
export const HoverImageSwap: Story = {
  name: '9 – Hover: Image Swap',
  render: () => (
    <div className="group">
      <FaceGrid className="bg-theme-black!">
        {/* Resting images — visible, fade out on hover */}
        <Cell col={1} row={1} colSpan={3} rowSpan={3}>
          <div className="w-full h-full transition-opacity duration-700 ease-out group-hover:opacity-0">
            <ImageBlock src={IMG.construct} alt="Construct.AR" />
          </div>
        </Cell>
        <Cell col={4} row={1} colSpan={3} rowSpan={3}>
          <div className="w-full h-full transition-opacity duration-700 ease-out group-hover:opacity-0">
            <ImageBlock src={IMG.popXr} alt="Pop.XR" />
          </div>
        </Cell>
        <Cell col={1} row={4} colSpan={3} rowSpan={3}>
          <div className="w-full h-full transition-opacity duration-700 ease-out group-hover:opacity-0">
            <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
          </div>
        </Cell>
        <Cell col={4} row={4} colSpan={3} rowSpan={3}>
          <div className="w-full h-full transition-opacity duration-700 ease-out group-hover:opacity-0">
            <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
          </div>
        </Cell>

        {/* Hover images — hidden, fade in on hover */}
        <Cell col={1} row={1} colSpan={3} rowSpan={3}>
          <div className="w-full h-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
            <ImageBlock src={IMG.construct2} alt="Construct.AR alt" />
          </div>
        </Cell>
        <Cell col={4} row={1} colSpan={3} rowSpan={3}>
          <div className="w-full h-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
            <ImageBlock src={IMG.popXr2} alt="Pop.XR alt" />
          </div>
        </Cell>
        <Cell col={1} row={4} colSpan={3} rowSpan={3}>
          <div className="w-full h-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
            <ImageBlock src={IMG.btUrban2} alt="BT Urban.AR alt" />
          </div>
        </Cell>
        <Cell col={4} row={4} colSpan={3} rowSpan={3}>
          <div className="w-full h-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
            <ImageBlock src={IMG.tracing2} alt="Tracing the Footprint alt" />
          </div>
        </Cell>

        <GridLines opacity={0.25} />
      </FaceGrid>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  10 · HOVER: REVEAL LABELS                                          */
/*  Project images visible at rest. On hover, gradient overlays       */
/*  darken each tile and project names slide/fade in.                  */
/* ------------------------------------------------------------------ */

// ─── 10 · Hover — Reveal Labels ─────────────────────────────────────────────
export const HoverRevealLabels: Story = {
  name: '10 – Hover: Reveal Labels',
  render: () => (
    <div className="group">
      <FaceGrid className="bg-theme-black!">
        {/* Tile 1 — image */}
        <Cell col={1} row={1} colSpan={3} rowSpan={3}>
          <ImageBlock src={IMG.construct} alt="Construct.AR" />
        </Cell>
        {/* Tile 1 — hover overlay */}
        <Cell col={1} row={1} colSpan={3} rowSpan={3} zIndex={1}>
          <div className="w-full h-full opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
            <GradientBlock
              direction="to top"
              stops={[
                { color: 'rgba(0,0,0,0.8)', position: 0 },
                { color: 'rgba(0,0,0,0.2)', position: 100 },
              ]}
            />
          </div>
        </Cell>
        {/* Tile 1 — hover label */}
        <Cell col={1} row={3} colSpan={3} zIndex={2}>
          <div className="w-full h-full opacity-0 translate-y-[2cqi] transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            <TextBlock fontSize={3.5} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={1} align="start">
              Construct.AR
            </TextBlock>
          </div>
        </Cell>

        {/* Tile 2 — image */}
        <Cell col={4} row={1} colSpan={3} rowSpan={3}>
          <ImageBlock src={IMG.popXr} alt="Pop.XR" />
        </Cell>
        {/* Tile 2 — hover overlay */}
        <Cell col={4} row={1} colSpan={3} rowSpan={3} zIndex={1}>
          <div className="w-full h-full opacity-0 transition-opacity duration-500 ease-out delay-75 group-hover:opacity-100">
            <GradientBlock
              direction="to top"
              stops={[
                { color: 'rgba(0,0,0,0.8)', position: 0 },
                { color: 'rgba(0,0,0,0.2)', position: 100 },
              ]}
            />
          </div>
        </Cell>
        {/* Tile 2 — hover label */}
        <Cell col={4} row={3} colSpan={3} zIndex={2}>
          <div className="w-full h-full opacity-0 translate-y-[2cqi] transition-all duration-500 ease-out delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            <TextBlock fontSize={3.5} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={1} align="start">
              Pop.XR
            </TextBlock>
          </div>
        </Cell>

        {/* Tile 3 — image */}
        <Cell col={1} row={4} colSpan={3} rowSpan={3}>
          <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
        </Cell>
        {/* Tile 3 — hover overlay */}
        <Cell col={1} row={4} colSpan={3} rowSpan={3} zIndex={1}>
          <div className="w-full h-full opacity-0 transition-opacity duration-500 ease-out delay-100 group-hover:opacity-100">
            <GradientBlock
              direction="to top"
              stops={[
                { color: 'rgba(0,0,0,0.8)', position: 0 },
                { color: 'rgba(0,0,0,0.2)', position: 100 },
              ]}
            />
          </div>
        </Cell>
        {/* Tile 3 — hover label */}
        <Cell col={1} row={6} colSpan={3} zIndex={2}>
          <div className="w-full h-full opacity-0 translate-y-[2cqi] transition-all duration-500 ease-out delay-100 group-hover:opacity-100 group-hover:translate-y-0">
            <TextBlock fontSize={3} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={1} align="start">
              Tracing the Footprint
            </TextBlock>
          </div>
        </Cell>

        {/* Tile 4 — image */}
        <Cell col={4} row={4} colSpan={3} rowSpan={3}>
          <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
        </Cell>
        {/* Tile 4 — hover overlay */}
        <Cell col={4} row={4} colSpan={3} rowSpan={3} zIndex={1}>
          <div className="w-full h-full opacity-0 transition-opacity duration-500 ease-out delay-150 group-hover:opacity-100">
            <GradientBlock
              direction="to top"
              stops={[
                { color: 'rgba(0,0,0,0.8)', position: 0 },
                { color: 'rgba(0,0,0,0.2)', position: 100 },
              ]}
            />
          </div>
        </Cell>
        {/* Tile 4 — hover label */}
        <Cell col={4} row={6} colSpan={3} zIndex={2}>
          <div className="w-full h-full opacity-0 translate-y-[2cqi] transition-all duration-500 ease-out delay-150 group-hover:opacity-100 group-hover:translate-y-0">
            <TextBlock fontSize={3.5} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={1} align="start">
              BT Urban.AR
            </TextBlock>
          </div>
        </Cell>

        <GridLines opacity={0.2} />
      </FaceGrid>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  11 · STRIP + COLOUR BLOCK                                          */
/*  Hybrid: the diagonal stepping colour fields from the legacy        */
/*  ColourBlock experiment underpin the strip layout. Images are       */
/*  semi-transparent, fading right so the saturated colour shows       */
/*  through. A multi-colour stripe bar cuts across at the mid-point.   */
/* ------------------------------------------------------------------ */

// ─── 11 · Strip + Colour Block ──────────────────────────────────────────────
export const StripColourBlock: Story = {
  name: '11 – Strip + Colour Block',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* ── Layer 0: diagonal stepping colour fields ───────────────── */}
      {/* Cyan — top-left large block (mirrors legacy: 4×2) */}
      <Cell col={1} row={1} colSpan={4} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      {/* Purple — top-right tall block (mirrors legacy: 2×3) */}
      <Cell col={5} row={1} colSpan={2} rowSpan={3}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>
      {/* Orange — left mid block (mirrors legacy: 2×2) */}
      <Cell col={1} row={3} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      {/* Magenta — bottom-left block (mirrors legacy: 3×2) */}
      <Cell col={1} row={5} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      {/* Cyan dim — bottom-right corner */}
      <Cell col={5} row={6} colSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.6} />
      </Cell>

      {/* ── Layer 1: strip images — semi-transparent over colour ───── */}
      <Cell col={1} row={1} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" mask="fade-right" opacity={0.45} />
      </Cell>
      <Cell col={1} row={2} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" mask="fade-right" opacity={0.45} />
      </Cell>
      <Cell col={1} row={3} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" mask="fade-right" opacity={0.45} />
      </Cell>
      <Cell col={1} row={4} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" mask="fade-right" opacity={0.45} />
      </Cell>
      <Cell col={1} row={5} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" mask="fade-right" opacity={0.45} />
      </Cell>
      <Cell col={1} row={6} colSpan={4} zIndex={1}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" mask="fade-right" opacity={0.45} />
      </Cell>

      {/* ── Layer 2: project name labels — right side ──────────────── */}
      <Cell col={4} row={1} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Construct.AR
        </TextBlock>
      </Cell>
      <Cell col={4} row={2} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Pop.XR
        </TextBlock>
      </Cell>
      <Cell col={4} row={3} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          BT Urban.AR
        </TextBlock>
      </Cell>
      <Cell col={4} row={4} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.4} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Tracing the Footprint
        </TextBlock>
      </Cell>
      <Cell col={4} row={5} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.4} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          Sammy&apos;s Christmas
        </TextBlock>
      </Cell>
      <Cell col={4} row={6} colSpan={3} zIndex={2}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.08em" fontWeight={700} padding={0.8} align="end">
          BT Mfg Showcase
        </TextBlock>
      </Cell>

      {/* ── Layer 3: multi-colour stripe bar — cuts across mid-point ── */}
      {/* Sits at the boundary between rows 3 and 4 (50% down the face) */}
      <div
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1', zIndex: 3, pointerEvents: 'none' }}
      >
        <div className="relative w-full h-full">
          <div
            className="absolute left-0 right-0 flex"
            style={{ top: '50%', height: '0.6cqi' }}
          >
            <div style={{ flex: 1, background: 'var(--theme-orange)' }} />
            <div style={{ flex: 1, background: 'var(--theme-magenta)' }} />
            <div style={{ flex: 1, background: 'var(--theme-cyan)' }} />
            <div style={{ flex: 1, background: 'var(--theme-purple)' }} />
          </div>
        </div>
      </div>

      <GridLines opacity={0.1} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  12 · ACID COLOUR BLOCK                                             */
/*  Each project gets its own colour block + image overlay in a 2×2   */
/*  cell. Project names scattered acid-poster style: rotated spines,  */
/*  tiny metadata codes, oversized bleeds. "Work" dominates centre.   */
/*  Refs: Slowerpace cassette tracklisting / K.Flay FML artwork.      */
/* ------------------------------------------------------------------ */

// ─── 12 · Acid Colour Block ─────────────────────────────────────────────────
export const AcidColourBlock: Story = {
  name: '12 – Acid Colour Block',
  render: () => (
    <FaceGrid className="bg-theme-black!">

      {/* ── Top three cells: colour + image ─────────────────────── */}

      {/* C1 · Construct.AR · purple */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.construct} alt="Construct.AR" opacity={0.45} />
      </Cell>
      {/* Label: rotated spine — left edge, reading bottom→top */}
      <Cell col={1} row={1} rowSpan={2} zIndex={2}>
        <div className="w-full h-full flex items-end justify-start" style={{ padding: '0.6cqi' }}>
          <span
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '2.2cqi',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--theme-white)',
              lineHeight: 1,
            }}
          >
            Construct.AR
          </span>
        </div>
      </Cell>
      {/* Code badge — top-right of cell */}
      <Cell col={2} row={1} zIndex={2}>
        <div className="w-full h-full flex items-start justify-end" style={{ padding: '0.8cqi' }}>
          <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', fontWeight: 700, color: 'var(--theme-purple)', opacity: 0.9 }}>
            AR-01
          </span>
        </div>
      </Cell>

      {/* C2 · Pop.XR · cyan */}
      <Cell col={3} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={3} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.45} />
      </Cell>
      {/* Label: tiny black mono, bottom of cell */}
      <Cell col={3} row={2} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.8} mono uppercase letterSpacing="0.15em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="center">
          Pop.XR
        </TextBlock>
      </Cell>

      {/* C3 · BT Urban.AR · orange */}
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      <Cell col={5} row={1} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.45} />
      </Cell>
      {/* Label: rotated spine — right edge */}
      <Cell col={6} row={1} rowSpan={2} zIndex={2}>
        <div className="w-full h-full flex items-start justify-end" style={{ padding: '0.6cqi' }}>
          <span
            style={{
              writingMode: 'vertical-rl',
              fontSize: '2.2cqi',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--theme-black)',
              lineHeight: 1,
            }}
          >
            BT Urban.AR
          </span>
        </div>
      </Cell>

      {/* ── Stripe bar — between top cells and centre ────────────── */}
      <div style={{ gridColumn: '1 / -1', gridRow: '1 / -1', zIndex: 5, pointerEvents: 'none' }}>
        <div className="relative w-full h-full">
          <div className="absolute left-0 right-0 flex" style={{ top: 'calc(100% * 2 / 6)', height: '0.6cqi' }}>
            <div style={{ flex: 1, background: 'var(--theme-purple)' }} />
            <div style={{ flex: 1, background: 'var(--theme-cyan)' }} />
            <div style={{ flex: 1, background: 'var(--theme-orange)' }} />
            <div style={{ flex: 1, background: 'var(--theme-green)' }} />
            <div style={{ flex: 1, background: 'var(--theme-magenta)' }} />
            <div style={{ flex: 1, background: 'var(--theme-cyan)' }} />
          </div>
          <div className="absolute left-0 right-0 flex" style={{ top: 'calc(100% * 4 / 6)', height: '0.6cqi' }}>
            <div style={{ flex: 1, background: 'var(--theme-green)' }} />
            <div style={{ flex: 1, background: 'var(--theme-magenta)' }} />
            <div style={{ flex: 1, background: 'var(--theme-orange)' }} />
            <div style={{ flex: 1, background: 'var(--theme-purple)' }} />
            <div style={{ flex: 1, background: 'var(--theme-cyan)' }} />
            <div style={{ flex: 1, background: 'var(--theme-orange)' }} />
          </div>
        </div>
      </div>

      {/* ── Centre zone R3-R4: huge "Work" ───────────────────────── */}
      <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={3}>
        <TextBlock fontSize={30} fontWeight={900} padding={0} align="center">
          Work
        </TextBlock>
      </Cell>

      {/* Metadata — left gutter of centre zone */}
      <Cell col={1} row={3} zIndex={4}>
        <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
          <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-white)', opacity: 0.35 }}>
            UTC
          </span>
          <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-white)', opacity: 0.35 }}>
            08
          </span>
        </div>
      </Cell>

      {/* Metadata — right gutter, Dock Stories as a drift label */}
      <Cell col={6} row={4} zIndex={4}>
        <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
          <span style={{
            writingMode: 'vertical-rl',
            fontSize: '2cqi',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 700,
            color: 'var(--theme-white)',
            opacity: 0.3,
          }}>
            Dock Stories
          </span>
        </div>
      </Cell>

      {/* ── Bottom three cells: colour + image ──────────────────── */}

      {/* C4 · Tracing the Footprint · green */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-green)" />
      </Cell>
      <Cell col={1} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" opacity={0.45} />
      </Cell>
      {/* Label: top-left, tiny black */}
      <Cell col={1} row={5} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="start">
          Tracing
        </TextBlock>
      </Cell>
      {/* Sub-label: bottom-left in white */}
      <Cell col={1} row={6} colSpan={2} zIndex={2}>
        <TextBlock fontSize={2} mono uppercase letterSpacing="0.1em" fontWeight={700} color="var(--theme-white)" padding={0.6} opacity={0.5} align="start">
          the Footprint
        </TextBlock>
      </Cell>

      {/* C5 · Sammy's Christmas · magenta */}
      <Cell col={3} row={5} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={3} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" opacity={0.45} />
      </Cell>
      {/* Label: rotated spine */}
      <Cell col={3} row={5} rowSpan={2} zIndex={2}>
        <div className="w-full h-full flex items-end justify-start" style={{ padding: '0.6cqi' }}>
          <span style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: '2.2cqi',
            fontWeight: 900,
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--theme-black)',
            lineHeight: 1,
          }}>
            Sammy&apos;s Xmas
          </span>
        </div>
      </Cell>

      {/* C6 · BT Manufacturing · orange */}
      <Cell col={5} row={5} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" opacity={0.8} />
      </Cell>
      <Cell col={5} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" opacity={0.45} />
      </Cell>
      {/* Label: oversized, bleeds */}
      <Cell col={5} row={5} colSpan={2} zIndex={2}>
        <TextBlock fontSize={3} mono uppercase letterSpacing="0.08em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="end">
          BT Mfg
        </TextBlock>
      </Cell>
      {/* Code badge — bottom-right */}
      <Cell col={6} row={6} zIndex={2}>
        <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
          <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', fontWeight: 700, color: 'var(--theme-black)', opacity: 0.7 }}>
            XR-06
          </span>
        </div>
      </Cell>

      <GridLines opacity={0.12} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  13 · ACID ICONS                                                    */
/*  Builds on #12 with per-project icon sets derived from project      */
/*  content. Uniform text sizing. GridLines in theme-black. Random     */
/*  theme colour background on each render. Acid poster energy.        */
/*  Refs: Slowerpace cassette / K.Flay FML artwork.                    */
/* ------------------------------------------------------------------ */

/* Per-project icon sets — chosen from project content:
   construct-ar  → construction, MR, HoloLens, blueprints, buildings
   pop-xr        → retail, branding, modular, innovation, 3D
   bt-urban-ar   → smart city, IoT, data feeds, globe, city model
   tracing       → film, drone, heritage, architecture, animation
   sammys        → Christmas, public AR, mobile, magic, fun
   bt-mfg        → manufacturing, recycling, sustainability, corporate
*/
const PROJECT_ICONS = {
  construct: ['hard-hat', 'blueprint', 'crane', 'cube-focus'] as const,
  popXr:     ['cube', 'sparkle', 'rocket', 'star'] as const,
  btUrban:   ['globe', 'broadcast', 'circuit-board', 'monitor'] as const,
  tracing:   ['film-strip', 'video-camera', 'camera', 'path'] as const,
  sammys:    ['paw-print', 'smiley', 'device-mobile', 'heart'] as const,
  btMfg:     ['gear', 'atom', 'lightning', 'cube-transparent'] as const,
};

const THEME_COLORS = [
  'var(--theme-cyan)',
  'var(--theme-purple)',
  'var(--theme-orange)',
  'var(--theme-magenta)',
  'var(--theme-green)',
] as const;

function pickRandomColor() {
  return THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];
}

// ─── 13 · Acid Icons ────────────────────────────────────────────────────────
export const AcidIcons: Story = {
  name: '13 – Acid Icons',
  render: () => {
    const bg = pickRandomColor();
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

        {/* ── Top row: 3 × 2×2 cells ─────────────────────────────── */}

        {/* C1 · Construct.AR · purple */}
        <Cell col={1} row={1} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-purple)" />
        </Cell>
        <Cell col={1} row={1} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.construct} alt="Construct.AR" opacity={0.45} />
        </Cell>
        {/* Icons — bottom-left corner of cell */}
        <Cell col={1} row={2} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.construct[0],
              tr: PROJECT_ICONS.construct[1],
              bl: PROJECT_ICONS.construct[2],
              br: PROJECT_ICONS.construct[3],
            }}
            showDivider={false}
            color="var(--theme-white)"
            opacity={0.7}
          />
        </Cell>
        {/* Label: rotated spine */}
        <Cell col={2} row={1} rowSpan={2} zIndex={2}>
          <div className="w-full h-full flex items-start justify-end" style={{ padding: '0.6cqi' }}>
            <span style={{
              writingMode: 'vertical-rl',
              fontSize: '2.5cqi',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--theme-white)',
              lineHeight: 1,
            }}>
              Construct.AR
            </span>
          </div>
        </Cell>

        {/* C2 · Pop.XR · cyan */}
        <Cell col={3} row={1} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-cyan)" />
        </Cell>
        <Cell col={3} row={1} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.45} />
        </Cell>
        {/* Icons — top-right */}
        <Cell col={4} row={1} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.popXr[0],
              tr: PROJECT_ICONS.popXr[1],
              bl: PROJECT_ICONS.popXr[2],
              br: PROJECT_ICONS.popXr[3],
            }}
            showDivider={false}
            color="var(--theme-black)"
            opacity={0.6}
          />
        </Cell>
        {/* Label: bottom centre of cell */}
        <Cell col={3} row={2} colSpan={2} zIndex={2}>
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="center">
            Pop.XR
          </TextBlock>
        </Cell>

        {/* C3 · BT Urban.AR · orange */}
        <Cell col={5} row={1} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-orange)" />
        </Cell>
        <Cell col={5} row={1} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.45} />
        </Cell>
        {/* Icons — centre of cell */}
        <Cell col={5} row={1} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.btUrban[0],
              tr: PROJECT_ICONS.btUrban[1],
              bl: PROJECT_ICONS.btUrban[2],
              br: PROJECT_ICONS.btUrban[3],
            }}
            showDivider={false}
            color="var(--theme-black)"
            opacity={0.6}
          />
        </Cell>
        {/* Label: rotated spine — right edge */}
        <Cell col={6} row={1} rowSpan={2} zIndex={2}>
          <div className="w-full h-full flex items-start justify-end" style={{ padding: '0.6cqi' }}>
            <span style={{
              writingMode: 'vertical-rl',
              fontSize: '2.5cqi',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--theme-black)',
              lineHeight: 1,
            }}>
              BT Urban.AR
            </span>
          </div>
        </Cell>

        <StripeBars />

        {/* ── Centre zone: "Work" ────────────────────────────────── */}
        <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={3}>
          <TextBlock fontSize={30} fontWeight={900} color="var(--theme-black)" padding={0} align="center">
            Work
          </TextBlock>
        </Cell>

        {/* Metadata — left gutter */}
        <Cell col={1} row={3} zIndex={4}>
          <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
            <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
              UTC
            </span>
            <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
              08
            </span>
          </div>
        </Cell>

        {/* Dock Stories — drifting vertical label, right gutter */}
        <Cell col={6} row={4} zIndex={4}>
          <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
            <span style={{
              writingMode: 'vertical-rl',
              fontSize: '2cqi',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 700,
              color: 'var(--theme-black)',
              opacity: 0.35,
            }}>
              Dock Stories
            </span>
          </div>
        </Cell>

        {/* ── Bottom row: 3 × 2×2 cells ──────────────────────────── */}

        {/* C4 · Tracing the Footprint · green */}
        <Cell col={1} row={5} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-green)" />
        </Cell>
        <Cell col={1} row={5} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" opacity={0.45} />
        </Cell>
        {/* Icons — top-left */}
        <Cell col={1} row={5} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.tracing[0],
              tr: PROJECT_ICONS.tracing[1],
              bl: PROJECT_ICONS.tracing[2],
              br: PROJECT_ICONS.tracing[3],
            }}
            showDivider={false}
            color="var(--theme-black)"
            opacity={0.6}
          />
        </Cell>
        {/* Label: bottom of cell */}
        <Cell col={1} row={6} colSpan={2} zIndex={2}>
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="start">
            Tracing the Footprint
          </TextBlock>
        </Cell>

        {/* C5 · Sammy's Christmas · magenta */}
        <Cell col={3} row={5} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-magenta)" />
        </Cell>
        <Cell col={3} row={5} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" opacity={0.45} />
        </Cell>
        {/* Icons — bottom-right */}
        <Cell col={4} row={6} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.sammys[0],
              tr: PROJECT_ICONS.sammys[1],
              bl: PROJECT_ICONS.sammys[2],
              br: PROJECT_ICONS.sammys[3],
            }}
            showDivider={false}
            color="var(--theme-white)"
            opacity={0.7}
          />
        </Cell>
        {/* Label: rotated spine — left edge */}
        <Cell col={3} row={5} rowSpan={2} zIndex={2}>
          <div className="w-full h-full flex items-end justify-start" style={{ padding: '0.6cqi' }}>
            <span style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: '2.5cqi',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--theme-black)',
              lineHeight: 1,
            }}>
              Sammy&apos;s Xmas
            </span>
          </div>
        </Cell>

        {/* C6 · BT Manufacturing · orange */}
        <Cell col={5} row={5} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-orange)" opacity={0.8} />
        </Cell>
        <Cell col={5} row={5} colSpan={2} rowSpan={2}>
          <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" opacity={0.45} />
        </Cell>
        {/* Icons — centre */}
        <Cell col={5} row={5} colSpan={2} rowSpan={2} zIndex={2}>
          <IconQuad
            icons={{
              tl: PROJECT_ICONS.btMfg[0],
              tr: PROJECT_ICONS.btMfg[1],
              bl: PROJECT_ICONS.btMfg[2],
              br: PROJECT_ICONS.btMfg[3],
            }}
            iconSize={8}
            centered
            showDivider={false}
            color="var(--theme-black)"
            opacity={0.3}
          />
        </Cell>
        {/* Label: top-right */}
        <Cell col={5} row={5} colSpan={2} zIndex={2}>
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.6} align="end">
            BT Mfg Showcase
          </TextBlock>
        </Cell>

        <GridLines color="var(--theme-black)" opacity={0.15} />
        </FaceGrid>
      </div>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  14 · ACID ICONS — CONSISTENT                                       */
/*  Tightened rules: every project cell has text top-right and icons   */
/*  bottom-right (as a filled square). Grid lines 100% black. Random   */
/*  theme colour background. Uniform, systematic, poster-ready.        */
/* ------------------------------------------------------------------ */

// ─── 14 · Acid Icons (Consistent) ───────────────────────────────────────────
export const AcidIconsConsistent: Story = {
  name: '14 – Acid Icons (Consistent)',
  render: () => {
    const bg = pickRandomColor();
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

          {/* ── Top row: 3 × 2×2 cells ───────────────────────────── */}

          {/* C1 · Construct.AR · purple */}
          <Cell col={1} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-purple)" />
          </Cell>
          <Cell col={1} row={1} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.construct} alt="Construct.AR" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={2} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-white)" padding={0.5} align="end">
              Construct.AR
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={2} row={2} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.construct[0],
                tr: PROJECT_ICONS.construct[1],
                bl: PROJECT_ICONS.construct[2],
                br: PROJECT_ICONS.construct[3],
              }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={0.7}
            />
          </Cell>

          {/* C2 · Pop.XR · cyan */}
          <Cell col={3} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-cyan)" />
          </Cell>
          <Cell col={3} row={1} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.popXr} alt="Pop.XR" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={4} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              Pop.XR
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={4} row={2} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.popXr[0],
                tr: PROJECT_ICONS.popXr[1],
                bl: PROJECT_ICONS.popXr[2],
                br: PROJECT_ICONS.popXr[3],
              }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          {/* C3 · BT Urban.AR · orange */}
          <Cell col={5} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" />
          </Cell>
          <Cell col={5} row={1} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={6} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              BT Urban.AR
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={6} row={2} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.btUrban[0],
                tr: PROJECT_ICONS.btUrban[1],
                bl: PROJECT_ICONS.btUrban[2],
                br: PROJECT_ICONS.btUrban[3],
              }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          <Cell col={1} row={2} colSpan={6} zIndex={5}><StripeBars /></Cell>
          <Cell col={1} row={4} colSpan={6} zIndex={5}><StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} /></Cell>

          {/* ── Centre zone: "Work" ──────────────────────────────── */}
          <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={3}>
            <TextBlock fontSize={30} fontWeight={900} color="var(--theme-black)" padding={0} align="center">
              Work
            </TextBlock>
          </Cell>

          {/* Metadata — left gutter */}
          <Cell col={1} row={3} zIndex={4}>
            <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                UTC
              </span>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                08
              </span>
            </div>
          </Cell>

          {/* Dock Stories — drifting vertical label, right gutter */}
          <Cell col={6} row={4} zIndex={4}>
            <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
              <span style={{
                writingMode: 'vertical-rl',
                fontSize: '2cqi',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: 'var(--theme-black)',
                opacity: 0.35,
              }}>
                Dock Stories
              </span>
            </div>
          </Cell>

          {/* ── Bottom row: 3 × 2×2 cells ────────────────────────── */}

          {/* C4 · Tracing the Footprint · green */}
          <Cell col={1} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-green)" />
          </Cell>
          <Cell col={1} row={5} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={2} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              Tracing
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={2} row={6} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.tracing[0],
                tr: PROJECT_ICONS.tracing[1],
                bl: PROJECT_ICONS.tracing[2],
                br: PROJECT_ICONS.tracing[3],
              }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          {/* C5 · Sammy's Christmas · magenta */}
          <Cell col={3} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-magenta)" />
          </Cell>
          <Cell col={3} row={5} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={4} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-white)" padding={0.5} align="end">
              Sammy&apos;s Xmas
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={4} row={6} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.sammys[0],
                tr: PROJECT_ICONS.sammys[1],
                bl: PROJECT_ICONS.sammys[2],
                br: PROJECT_ICONS.sammys[3],
              }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={0.7}
            />
          </Cell>

          {/* C6 · BT Manufacturing · orange */}
          <Cell col={5} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" opacity={0.8} />
          </Cell>
          <Cell col={5} row={5} colSpan={2} rowSpan={2}>
            <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" opacity={0.45} />
          </Cell>
          {/* Text — top-right */}
          <Cell col={6} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              BT Mfg
            </TextBlock>
          </Cell>
          {/* Icons — bottom-right */}
          <Cell col={6} row={6} zIndex={2}>
            <IconQuad
              icons={{
                tl: PROJECT_ICONS.btMfg[0],
                tr: PROJECT_ICONS.btMfg[1],
                bl: PROJECT_ICONS.btMfg[2],
                br: PROJECT_ICONS.btMfg[3],
              }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          <GridLines color="var(--theme-black)" opacity={1} />
        </FaceGrid>
      </div>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  15 · ACID COLOUR + ICONS (NO IMAGES)                               */
/*  Pure colour blocks + icons + text. No imagery. Clean, graphic,     */
/*  poster-flat. Same consistent rules: text top-right, icons          */
/*  bottom-right. 100% black grid lines. Random bg colour.             */
/* ------------------------------------------------------------------ */

// ─── 15 · Acid Colour + Icons (No Images) ───────────────────────────────────
export const AcidNoImages: Story = {
  name: '15 – Acid Colour + Icons (No Images)',
  render: () => {
    const bg = pickRandomColor();
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

          {/* C1 · Construct.AR · purple */}
          <Cell col={1} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-purple)" />
          </Cell>
          <Cell col={2} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-white)" padding={0.5} align="end">
              Construct.AR
            </TextBlock>
          </Cell>
          <Cell col={2} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.construct[0], tr: PROJECT_ICONS.construct[1], bl: PROJECT_ICONS.construct[2], br: PROJECT_ICONS.construct[3] }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={0.7}
            />
          </Cell>

          {/* C2 · Pop.XR · cyan */}
          <Cell col={3} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-cyan)" />
          </Cell>
          <Cell col={4} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              Pop.XR
            </TextBlock>
          </Cell>
          <Cell col={4} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.popXr[0], tr: PROJECT_ICONS.popXr[1], bl: PROJECT_ICONS.popXr[2], br: PROJECT_ICONS.popXr[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          {/* C3 · BT Urban.AR · orange */}
          <Cell col={5} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" />
          </Cell>
          <Cell col={6} row={1} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              BT Urban.AR
            </TextBlock>
          </Cell>
          <Cell col={6} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.btUrban[0], tr: PROJECT_ICONS.btUrban[1], bl: PROJECT_ICONS.btUrban[2], br: PROJECT_ICONS.btUrban[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          <Cell col={1} row={2} colSpan={6} zIndex={5}><StripeBars /></Cell>
          <Cell col={1} row={4} colSpan={6} zIndex={5}><StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} /></Cell>

          {/* ── Centre zone: "Work" ──────────────────────────────── */}
          <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={3}>
            <TextBlock fontSize={30} fontWeight={900} color="var(--theme-black)" padding={0} align="center">
              Work
            </TextBlock>
          </Cell>

          {/* Metadata — left gutter */}
          <Cell col={1} row={3} zIndex={4}>
            <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                UTC
              </span>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                08
              </span>
            </div>
          </Cell>

          {/* Dock Stories — drifting vertical label */}
          <Cell col={6} row={4} zIndex={4}>
            <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
              <span style={{
                writingMode: 'vertical-rl',
                fontSize: '2cqi',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: 'var(--theme-black)',
                opacity: 0.35,
              }}>
                Dock Stories
              </span>
            </div>
          </Cell>

          {/* ── Bottom row: 3 × 2×2 cells ────────────────────────── */}

          {/* C4 · Tracing the Footprint · green */}
          <Cell col={1} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-green)" />
          </Cell>
          <Cell col={2} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              Tracing
            </TextBlock>
          </Cell>
          <Cell col={2} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.tracing[0], tr: PROJECT_ICONS.tracing[1], bl: PROJECT_ICONS.tracing[2], br: PROJECT_ICONS.tracing[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          {/* C5 · Sammy's Christmas · magenta */}
          <Cell col={3} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-magenta)" />
          </Cell>
          <Cell col={4} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-white)" padding={0.5} align="end">
              Sammy&apos;s Xmas
            </TextBlock>
          </Cell>
          <Cell col={4} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.sammys[0], tr: PROJECT_ICONS.sammys[1], bl: PROJECT_ICONS.sammys[2], br: PROJECT_ICONS.sammys[3] }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={0.7}
            />
          </Cell>

          {/* C6 · BT Manufacturing · orange */}
          <Cell col={5} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" />
          </Cell>
          <Cell col={6} row={5} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="end">
              BT Mfg
            </TextBlock>
          </Cell>
          <Cell col={6} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.btMfg[0], tr: PROJECT_ICONS.btMfg[1], bl: PROJECT_ICONS.btMfg[2], br: PROJECT_ICONS.btMfg[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={0.6}
            />
          </Cell>

          <GridLines color="var(--theme-black)" opacity={1} />
        </FaceGrid>
      </div>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  16 · ACID FLAT — TEXT TOP-LEFT (StripeBars refactor)               */
/*  Same as 15 but text labels top-left aligned. Uses the extracted    */
/*  StripeBars component instead of inline markup.                     */
/* ------------------------------------------------------------------ */

// ─── 16 · Acid Flat — Text Top-Left ─────────────────────────────────────────
export const AcidFlatTextTopLeft: Story = {
  name: '16 – Acid Flat — Text Top-Left',
  render: () => {
    const bg = pickRandomColor();
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

          {/* C1 · Construct.AR · purple */}
          <Cell col={1} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-purple)" />
          </Cell>
          <Cell col={1} row={1} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              Construct.AR
            </TextBlock>
          </Cell>
          <Cell col={2} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.construct[0], tr: PROJECT_ICONS.construct[1], bl: PROJECT_ICONS.construct[2], br: PROJECT_ICONS.construct[3] }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={1}
            />
          </Cell>
          <Cell col={1} row={2} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.construct} alt="Construct.AR" />
              </div>
            </div>
          </Cell>

          {/* C2 · Pop.XR · cyan */}
          <Cell col={3} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-cyan)" />
          </Cell>
          <Cell col={3} row={1} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              Pop.XR
            </TextBlock>
          </Cell>
          <Cell col={3} row={2} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.popXr} alt="Pop.XR" />
              </div>
            </div>
          </Cell>
          <Cell col={4} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.popXr[0], tr: PROJECT_ICONS.popXr[1], bl: PROJECT_ICONS.popXr[2], br: PROJECT_ICONS.popXr[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={1}
            />
          </Cell>

          {/* C3 · BT Urban.AR · orange */}
          <Cell col={5} row={1} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" />
          </Cell>
          <Cell col={5} row={1} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              BT Urban.AR
            </TextBlock>
          </Cell>
          <Cell col={5} row={2} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.btUrban} alt="BT Urban.AR" />
              </div>
            </div>
          </Cell>
          <Cell col={6} row={2} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.btUrban[0], tr: PROJECT_ICONS.btUrban[1], bl: PROJECT_ICONS.btUrban[2], br: PROJECT_ICONS.btUrban[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={1}
            />
          </Cell>

          <Cell col={1} row={2} colSpan={6} zIndex={5}><StripeBars /></Cell>
          <Cell col={1} row={4} colSpan={6} zIndex={5}><StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} /></Cell>

          {/* ── Centre zone: "Work" ──────────────────────────────── */}
          <Cell col={1} row={3} colSpan={6} rowSpan={2} zIndex={3}>
            <TextBlock fontSize={30} fontWeight={900} color="var(--theme-white)" padding={0} align="center">
              Work
            </TextBlock>
          </Cell>

          {/* Metadata — left gutter */}
          <Cell col={1} row={3} zIndex={4}>
            <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                UTC
              </span>
              <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
                08
              </span>
            </div>
          </Cell>

          {/* Dock Stories — drifting vertical label */}
          <Cell col={6} row={4} zIndex={4}>
            <div className="w-full h-full flex items-end justify-end" style={{ padding: '0.8cqi' }}>
              <span style={{
                writingMode: 'vertical-rl',
                fontSize: '2cqi',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: 'var(--theme-black)',
                opacity: 0.35,
              }}>
                Dock Stories
              </span>
            </div>
          </Cell>

          {/* ── Bottom row: 3 × 2×2 cells ────────────────────────── */}

          {/* C4 · Tracing the Footprint · green */}
          <Cell col={1} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-green)" />
          </Cell>
          <Cell col={1} row={5} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              Tracing
            </TextBlock>
          </Cell>
          <Cell col={1} row={6} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.tracing} alt="Tracing the Footprint" />
              </div>
            </div>
          </Cell>
          <Cell col={2} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.tracing[0], tr: PROJECT_ICONS.tracing[1], bl: PROJECT_ICONS.tracing[2], br: PROJECT_ICONS.tracing[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={1}
            />
          </Cell>

          {/* C5 · Sammy's Christmas · magenta */}
          <Cell col={3} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-magenta)" />
          </Cell>
          <Cell col={3} row={5} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              Sammy&apos;s Xmas
            </TextBlock>
          </Cell>
          <Cell col={3} row={6} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.sammys} alt="Sammy's Christmas Adventure" />
              </div>
            </div>
          </Cell>
          <Cell col={4} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.sammys[0], tr: PROJECT_ICONS.sammys[1], bl: PROJECT_ICONS.sammys[2], br: PROJECT_ICONS.sammys[3] }}
              showDivider={false}
              color="var(--theme-white)"
              opacity={1}
            />
          </Cell>

          {/* C6 · BT Manufacturing · orange */}
          <Cell col={5} row={5} colSpan={2} rowSpan={2}>
            <ColorBlock color="var(--theme-orange)" />
          </Cell>
          <Cell col={5} row={5} colSpan={2} zIndex={2}>
            <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} align="start">
              BT Mfg
            </TextBlock>
          </Cell>
          <Cell col={5} row={6} zIndex={2}>
            <div className="w-full h-full overflow-hidden">
              <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
                <ImageBlock src={IMG.btMfg} alt="BT Manufacturing Showcase" />
              </div>
            </div>
          </Cell>
          <Cell col={6} row={6} zIndex={2}>
            <IconQuad
              icons={{ tl: PROJECT_ICONS.btMfg[0], tr: PROJECT_ICONS.btMfg[1], bl: PROJECT_ICONS.btMfg[2], br: PROJECT_ICONS.btMfg[3] }}
              showDivider={false}
              color="var(--theme-black)"
              opacity={1}
            />
          </Cell>

          <GridLines color="var(--theme-black)" opacity={1} />
        </FaceGrid>
      </div>
    );
  },
};
