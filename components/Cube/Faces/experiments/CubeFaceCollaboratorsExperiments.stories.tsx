import type { Meta, StoryObj } from '@storybook/nextjs';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  GradientBlock,
  ImageBlock,
  TextBlock,
  VerticalTextBlock,
  IconQuad,
  IconSingle,
  StripeBars,
} from '../primitives';
import Icon from '../../../Icon/Icon';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Collaborators Experiments                                */
/*                                                                     */
/*  Layout explorations for the Collaborators cube face.              */
/*  Each story explores a different way to represent the people and   */
/*  partners that UTC works with on a single 6×6 FaceGrid.            */
/*                                                                     */
/*  All sizing uses cqi (container query inline) units so faces        */
/*  scale responsively with the cube size.                             */
/*                                                                     */
/* ================================================================== */

const meta = {
  title: 'Experiments/Cube Faces/Collaborators',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Layout experiments for the Collaborators cube face. 300px square frame. ' +
          'Explores ways to represent the people and partners UTC works with on a 6×6 grid. ' +
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
/*  1 · GRID TYPOGRAPHY                                                */
/*  Type-forward. Bold "COLLAB" hero, thin accent corner blocks,      */
/*  HR divider row, descriptor labels at the bottom.                  */
/* ------------------------------------------------------------------ */

// ─── 1 · Grid Typography ────────────────────────────────────────────────────
export const GridTypography: Story = {
  name: '1 – Grid Typography',
  render: () => (
    <FaceGrid>
      {/* Accent corner blocks */}
      <Cell col={5} row={1} colSpan={2}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={6} row={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      <Cell col={1} row={6}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>

      {/* Hero type — C1-C4 / R2-R4 */}
      <Cell col={1} row={2} colSpan={4} rowSpan={3}>
        <TextBlock
          fontSize={22}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start" alignVertical="start"
          padding={2}
        >
          COLLAB
        </TextBlock>
      </Cell>

      {/* Divider rule — C1-C6 / R5 */}
      <Cell col={1} row={5} colSpan={6}>
        <div className="w-full h-px bg-theme-white/20 self-center" style={{ marginTop: '50%' }} />
      </Cell>

      {/* Label — C1-C4 / R6 */}
      <Cell col={1} row={6} colSpan={4}>
        <div className="flex flex-col justify-center gap-0.5 select-none" style={{ paddingInline: '2cqi' }}>
          <span className="text-theme-white/70 font-bold uppercase tracking-[0.2em]" style={{ fontSize: '2.2cqi' }}>
            Collaborators
          </span>
          <div className="flex gap-2">
            <span className="text-theme-cyan font-black" style={{ fontSize: '3cqi' }}>Partners</span>
            <span className="text-theme-orange font-black" style={{ fontSize: '3cqi' }}>Team</span>
          </div>
        </div>
      </Cell>

      {/* Icon — C5-C6 / R6 */}
      <Cell col={5} row={6} colSpan={2}>
        <IconSingle name="users" color="var(--theme-magenta)" weight="duotone" iconSize={9} />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  2 · AVATAR GRID                                                    */
/*  Six avatar placeholder cells — 2×3 grid of coloured initials     */
/*  circles, with a label band across the bottom two rows.            */
/* ------------------------------------------------------------------ */

const AVATARS: { initials: string; color: string; col: number; row: number }[] = [
  { initials: 'AB', color: 'var(--theme-cyan)',    col: 1, row: 1 },
  { initials: 'CD', color: 'var(--theme-orange)',  col: 3, row: 1 },
  { initials: 'EF', color: 'var(--theme-magenta)', col: 5, row: 1 },
  { initials: 'GH', color: 'var(--theme-purple)',  col: 1, row: 3 },
  { initials: 'IJ', color: 'var(--theme-green)',   col: 3, row: 3 },
  { initials: 'KL', color: 'var(--theme-cyan)',    col: 5, row: 3 },
];

// ─── 2 · Avatar Grid ────────────────────────────────────────────────────────
export const AvatarGrid: Story = {
  name: '2 – Avatar Grid',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Avatar cells — each spans 2×2 */}
      {AVATARS.map(({ initials, color, col, row }) => (
        <Cell key={initials} col={col} colSpan={2} row={row} rowSpan={2}>
          <div className="flex flex-col items-center justify-center gap-[1cqi] w-full h-full select-none">
            <div
              className="rounded-full flex items-center justify-center font-black"
              style={{
                width: '8cqi',
                height: '8cqi',
                background: color,
                color: 'var(--theme-black)',
                fontSize: '3.5cqi',
              }}
            >
              {initials}
            </div>
            <div className="bg-theme-white/20" style={{ width: '10cqi', height: '1cqi' }} />
          </div>
        </Cell>
      ))}

      {/* Stripe divider — C1-C6 / R5, top edge */}
      <Cell col={1} colSpan={6} row={5}>
        <div className="w-full flex" style={{ height: '3px' }}>
          <div className="flex-1 bg-theme-magenta" />
          <div className="flex-1 bg-theme-orange" />
          <div className="flex-1 bg-theme-cyan" />
          <div className="flex-1 bg-theme-purple" />
          <div className="flex-1 bg-theme-green" />
          <div className="flex-1 bg-theme-cyan" />
        </div>
      </Cell>

      {/* Label — C1-C6 / R5-R6 */}
      <Cell col={1} colSpan={6} row={5} rowSpan={2}>
        <div className="flex flex-col justify-end w-full h-full select-none" style={{ paddingInline: '3cqi', paddingBottom: '2cqi' }}>
          <span className="text-theme-white font-black" style={{ fontSize: '7cqi' }}>
            Collaborators
          </span>
          <span className="text-theme-white/50 font-bold uppercase tracking-widest" style={{ fontSize: '2.5cqi' }}>
            People & Partners
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  3 · COLOUR BLOCK                                                   */
/*  Bold saturated fills — each block representing a collaborator or  */
/*  partner category. Acid-poster energy with overlaid "PEOPLE" type. */
/* ------------------------------------------------------------------ */

// ─── 3 · Colour Block ───────────────────────────────────────────────────────
export const ColourBlock: Story = {
  name: '3 – Colour Block',
  render: () => (
    <FaceGrid>
      {/* Colour field blocks */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ColorBlock color="var(--theme-green)" opacity={0.7} />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.6} />
      </Cell>

      {/* Stripe bar — C1-C6 / R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Overlaid "PEOPLE" type */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={10} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.03em">
          PEOPLE
        </TextBlock>
      </Cell>

      {/* Bottom-left label badge */}
      <Cell col={1} row={6} colSpan={3} zIndex={3}>
        <div className="flex items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="bg-theme-black/80 text-theme-white font-bold uppercase tracking-wider px-1.5 py-0.5" style={{ fontSize: '2.5cqi' }}>
            Collaborators
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  4 · INFO CARD                                                      */
/*  Window-chrome UI. Header bar with traffic-light dots, icon +      */
/*  body text, colour stripes, bottom CTA bar.                        */
/* ------------------------------------------------------------------ */

// ─── 4 · Info Card ──────────────────────────────────────────────────────────
export const InfoCard: Story = {
  name: '4 – Info Card',
  render: () => (
    <FaceGrid>
      {/* Chrome header bar — R1 */}
      <Cell col={1} colSpan={6} row={1}>
        <ColorBlock color="var(--theme-magenta)" />
        <div className="flex items-center w-full h-full px-2 gap-1.5 select-none" style={{ zIndex: 1 }}>
          <div className="flex gap-[3px]">
            <div className="w-[5px] h-[5px] rounded-full bg-theme-orange" />
            <div className="w-[5px] h-[5px] rounded-full bg-theme-cyan" />
            <div className="w-[5px] h-[5px] rounded-full bg-theme-black/40" />
          </div>
          <TextBlock fontSize={2.2} color="var(--theme-white)" fontWeight={700} uppercase mono letterSpacing="0.15em">
            Collaborators
          </TextBlock>
        </div>
      </Cell>

      {/* Icon — C1-C2 / R2-R3 */}
      <Cell col={1} colSpan={2} row={2} rowSpan={2}>
        <IconSingle name="users" color="var(--theme-magenta)" weight="duotone" iconSize={14} />
      </Cell>

      {/* Year counter — C6 / R2 */}
      <Cell col={6} row={2}>
        <div className="flex flex-col items-end justify-center w-full h-full select-none" style={{ paddingInline: '1.5cqi' }}>
          <span className="text-theme-white/30 font-mono leading-none" style={{ fontSize: '3cqi' }}>20</span>
          <span className="text-theme-white/30 font-mono leading-none" style={{ fontSize: '3cqi' }}>26</span>
        </div>
      </Cell>

      {/* Colour stripe — C1-C6 / R4 */}
      <Cell col={1} colSpan={6} row={4}>
        <div className="w-full flex" style={{ height: '3px' }}>
          <div className="w-2/5 bg-theme-magenta" />
          <div className="w-1/5 bg-theme-orange" />
          <div className="w-2/5 bg-theme-cyan" />
        </div>
      </Cell>

      {/* Body text — C1-C6 / R4-R5 */}
      <Cell col={1} colSpan={6} row={4} rowSpan={2}>
        <TextBlock
          fontSize={2.2}
          color="var(--theme-white)"
          opacity={0.5}
          fontWeight={400}
          letterSpacing="0"
          alignHorizontal="start" alignVertical="start"
          padding={2}
        >
          The people who shape our work.{'\n'}
          Partners, freelancers, and creative{'\n'}
          collaborators across every project.
        </TextBlock>
      </Cell>

      {/* Tag badge — C1-C3 / R5 */}
      <Cell col={1} colSpan={3} row={5}>
        <div className="flex items-end justify-start w-full h-full select-none" style={{ padding: '1.5cqi' }}>
          <span className="border border-theme-magenta/40 text-theme-magenta font-bold uppercase tracking-wider px-1.5 py-0.5" style={{ fontSize: '2cqi' }}>
            People & Partners
          </span>
        </div>
      </Cell>

      {/* Stripe accent — top of R6 */}
      <Cell col={1} row={5} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-cyan)', 'var(--theme-green)']} />
      </Cell>

      {/* Bottom CTA bar — R6 */}
      <Cell col={1} colSpan={6} row={6} zIndex={2}>
        <ColorBlock color="var(--theme-magenta)" />
        <div className="flex items-center gap-1.5 w-full h-full px-2 select-none" style={{ zIndex: 1 }}>
          <Icon name="hand-waving" size={12} color="var(--theme-black)" weight="fill" />
          <div className="flex gap-[2px] h-3/5">
            <div className="w-[3px] bg-theme-cyan" />
            <div className="w-[3px] bg-theme-orange" />
            <div className="w-[3px] bg-theme-purple" />
          </div>
          <span className="text-theme-black font-black uppercase tracking-tight" style={{ fontSize: '4.5cqi' }}>
            Collaborators
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  5 · MINIMAL CORNER                                                 */
/*  Maximum negative space. "COLLAB" anchored bottom-left, tiny       */
/*  People/Partners labels top-right.                                 */
/* ------------------------------------------------------------------ */

// ─── 5 · Minimal Corner ─────────────────────────────────────────────────────
export const MinimalCorner: Story = {
  name: '5 – Minimal Corner',
  render: () => (
    <FaceGrid>
      {/* L-shaped corner accent — top-left */}
      <Cell col={1} row={1} rowSpan={2}>
        <div className="w-[2px] h-full bg-theme-magenta/30" />
      </Cell>
      <Cell col={1} row={1} colSpan={2}>
        <div className="w-full h-[2px] bg-theme-magenta/30" />
      </Cell>

      {/* Top-right labels */}
      <Cell col={5} row={1} colSpan={2}>
        <div className="flex flex-col items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="text-theme-cyan/50 font-bold tracking-wider" style={{ fontSize: '2.2cqi' }}>People</span>
          <span className="text-theme-orange/50 font-bold tracking-wider mt-0.5" style={{ fontSize: '2.2cqi' }}>Partners</span>
        </div>
      </Cell>

      {/* Hero type — bottom-left area */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2}>
        <TextBlock
          fontSize={22}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start" alignVertical="start"
          padding={2}
        >
          COLLAB
        </TextBlock>
      </Cell>

      {/* Divider + sub-labels — R6 */}
      <Cell col={1} colSpan={6} row={6}>
        <div className="flex flex-col justify-center w-full h-full select-none" style={{ paddingInline: '2cqi' }}>
          <div className="h-px bg-theme-magenta/30 mb-1" style={{ width: '8cqi' }} />
          <span className="text-theme-white/40 font-bold uppercase tracking-[0.3em]" style={{ fontSize: '2.2cqi' }}>
            Collaborators & Partners
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  6 · ICON QUAD SHOWCASE                                             */
/*  Four collaboration-themed icons in the centre quad. Colour        */
/*  header top, label footer bottom, stripe bar overlay.              */
/* ------------------------------------------------------------------ */

// ─── 6 · Icon Quad ──────────────────────────────────────────────────────────
export const IconQuadShowcase: Story = {
  name: '6 – Icon Quad',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Top header — C1-C6 / R1 */}
      <Cell col={1} colSpan={6} row={1}>
        <ColorBlock color="var(--theme-magenta)" />
        <TextBlock fontSize={5} color="var(--theme-black)" fontWeight={900} uppercase letterSpacing="0.1em">
          Collaborators
        </TextBlock>
      </Cell>

      {/* Icon quad — C2-C5 / R2-R5 */}
      <Cell col={2} colSpan={4} row={2} rowSpan={4}>
        <IconQuad
          icons={{ tl: 'users', tr: 'hand-waving', bl: 'chat', br: 'share' }}
          color="var(--theme-magenta)"
          dividerOpacity={0.1}
          centered
          iconSize={10}
        />
      </Cell>

      {/* Side accent cells */}
      <Cell col={1} row={2} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.15} />
      </Cell>
      <Cell col={6} row={4} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" opacity={0.15} />
      </Cell>

      {/* Bottom footer — C1-C6 / R6 */}
      <Cell col={1} colSpan={6} row={6}>
        <TextBlock fontSize={3} color="var(--theme-white)" opacity={0.5} fontWeight={700} uppercase mono letterSpacing="0.15em">
          People · Partners · Projects
        </TextBlock>
      </Cell>

      <Cell col={1} row={2} colSpan={6} zIndex={5}><StripeBars /></Cell>
      <Cell col={1} row={4} colSpan={6} zIndex={5}><StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} /></Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  7 · PORTRAITS + ICON QUAD                                          */
/*  Two collaborator portrait photos split left/right, icon quad and  */
/*  labels overlaid on top.                                            */
/* ------------------------------------------------------------------ */

// ─── 7 · Portraits + Icon Quad ──────────────────────────────────────────────
export const PortraitsIconQuad: Story = {
  name: '7 – Portraits + Icon Quad',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.1} />

      {/* Portrait photos — each fills half the face */}
      <Cell col={1} colSpan={3} row={1} rowSpan={6}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.jpg"
          alt="Alex Hort-Francis"
          mask="fade-right"
        />
      </Cell>
      <Cell col={4} colSpan={3} row={1} rowSpan={6}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          mask="fade-left"
        />
      </Cell>

      {/* Gradient fade — bottom half for text readability */}
      <Cell col={1} colSpan={6} row={1} rowSpan={6} zIndex={1}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 60 },
          ]}
          opacity={0.85}
        />
      </Cell>

      {/* Top header — C1-C6 / R1 */}
      <Cell col={1} colSpan={6} row={1} zIndex={2}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.85} />
        <TextBlock fontSize={5} color="var(--theme-black)" fontWeight={900} uppercase letterSpacing="0.1em">
          Collaborators
        </TextBlock>
      </Cell>

      {/* Icon quad — C2-C5 / R2-R5 */}
      {/* <Cell col={2} colSpan={4} row={2} rowSpan={4} zIndex={2}>
        <IconQuad
          icons={{ tl: 'users', tr: 'hand-waving', bl: 'chat', br: 'share' }}
          color="var(--theme-magenta)"
          dividerOpacity={0.1}
          centered
          iconSize={10}
        />
      </Cell> */}

      {/* Side accent cells */}
      <Cell col={1} row={2} rowSpan={2} zIndex={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.15} />
      </Cell>
      <Cell col={6} row={4} rowSpan={2} zIndex={2}>
        <ColorBlock color="var(--theme-orange)" opacity={0.15} />
      </Cell>

      {/* Top-right labels — C5-C6 / R1 */}
      <Cell col={5} row={1} colSpan={2} zIndex={3}>
        <div className="flex flex-col items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="text-theme-cyan/70 font-bold tracking-wider" style={{ fontSize: '2.2cqi' }}>People</span>
          <span className="text-theme-orange/70 font-bold tracking-wider mt-0.5" style={{ fontSize: '2.2cqi' }}>Partners</span>
        </div>
      </Cell>

      {/* Hero type — C1-C5 / R4-R5 */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2} zIndex={3}>
        <TextBlock
          fontSize={22}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start" alignVertical="start"
          padding={2}
        >
          COLLAB
        </TextBlock>
      </Cell>

      {/* Divider + sub-label — R6 */}
      <Cell col={1} colSpan={6} row={6} zIndex={3}>
        <div className="flex flex-col justify-center w-full h-full select-none" style={{ paddingInline: '2cqi' }}>
          <div className="h-px bg-theme-white/30 mb-1" style={{ width: '8cqi' }} />
          <span className="text-theme-white/50 font-bold uppercase tracking-[0.3em]" style={{ fontSize: '2.2cqi' }}>
            Collaborators & Partners
          </span>
        </div>
      </Cell>

      <Cell col={1} row={2} colSpan={6} zIndex={5}><StripeBars /></Cell>
      <Cell col={1} row={4} colSpan={6} zIndex={5}><StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} /></Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  8 · PORTRAIT MOSAIC                                                */
/*  Tiled headshots filling the face — 6 portraits in a 3×2 layout   */
/*  with a gradient overlay and label bar at the bottom.              */
/* ------------------------------------------------------------------ */

const TEAM = [
  { src: '/images/collaborators/alex-hort-francis-portrait01.png', alt: 'Alex Hort-Francis', col: 1 as const, row: 1 as const },
  { src: '/images/collaborators/james-lee-burgess-portrait01.png', alt: 'James Lee Burgess', col: 3 as const, row: 1 as const },
  { src: '/images/collaborators/charlotte-norman01.png',           alt: 'Charlotte Norman',  col: 5 as const, row: 1 as const },
  { src: '/images/collaborators/jake-bignell01.png',               alt: 'Jake Bignell',      col: 1 as const, row: 3 as const },
  { src: '/images/collaborators/hannah-houghton01.png',            alt: 'Hannah Houghton',   col: 3 as const, row: 3 as const },
  { src: '/images/collaborators/sebastian-miller01.png',           alt: 'Sebastian Miller',  col: 5 as const, row: 3 as const },
];

// ─── 8 · Portrait Mosaic ─────────────────────────────────────────────────────
export const PortraitMosaic: Story = {
  name: '8 – Portrait Mosaic',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* 3×2 grid of headshots — each 2col × 3row */}
      {TEAM.map(({ src, alt, col, row }) => (
        <Cell key={alt} col={col} colSpan={2} row={row} rowSpan={3}>
          <ImageBlock src={src} alt={alt} objectPosition="top" />
        </Cell>
      ))}

      {/* Bottom gradient for readability */}
      <Cell col={1} colSpan={6} row={4} rowSpan={3}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 70 },
          ]}
          opacity={0.9}
        />
      </Cell>

      {/* StripeBars divider */}
      <Cell col={1} colSpan={6} row={5}>
        <StripeBars />
      </Cell>

      {/* Label row */}
      <Cell col={1} colSpan={4} row={5} rowSpan={2}>
        <TextBlock
          fontSize={8}
          color="var(--theme-white)"
          fontWeight={900}
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          Our People
        </TextBlock>
      </Cell>
      <Cell col={5} colSpan={2} row={6}>
        <TextBlock
          fontSize={2.5}
          color="var(--theme-white)"
          opacity={0.4}
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.1em"
          alignHorizontal="end"
          alignVertical="end"
          padding={2}
        >
          6 collaborators
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  9 · EDITORIAL STACK                                                */
/*  Magazine-editorial layout. Hero portrait top half, caption block  */
/*  bottom half with vertical label, name, and role description.      */
/* ------------------------------------------------------------------ */

// ─── 9 · Editorial Stack ─────────────────────────────────────────────────────
export const EditorialStack: Story = {
  name: '9 – Editorial Stack',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Hero portrait — top 4 rows */}
      <Cell col={1} colSpan={6} row={1} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/steve-bjorck01.png"
          alt="Steve Bjorck"
          objectPosition="top"
          mask="fade-down"
        />
      </Cell>

      {/* Vertical side label */}
      <Cell col={1} row={1} rowSpan={6}>
        <VerticalTextBlock
          direction="up"
          fontSize={3}
          color="var(--theme-cyan)"
          opacity={0.4}
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.3em"
        >
          Collaborator Profile
        </VerticalTextBlock>
      </Cell>

      {/* Bottom panel background */}
      <Cell col={1} colSpan={6} row={5} rowSpan={2}>
        <ColorBlock color="var(--theme-purple)" opacity={0.15} />
      </Cell>

      {/* Name */}
      <Cell col={2} colSpan={5} row={4} rowSpan={2}>
        <TextBlock
          fontSize={12}
          color="var(--theme-white)"
          fontWeight={900}
          alignHorizontal="start"
          alignVertical="end"
          padding={1}
          letterSpacing="-0.03em"
        >
          Steve Bjorck
        </TextBlock>
      </Cell>

      {/* Role description */}
      <Cell col={2} colSpan={4} row={6}>
        <TextBlock
          fontSize={2.8}
          color="var(--theme-white)"
          opacity={0.5}
          fontWeight={500}
          letterSpacing="0"
          alignHorizontal="start"
          alignVertical="start"
          padding={1}
        >
          Creative Producer · XR Specialist
        </TextBlock>
      </Cell>

      {/* Accent dot */}
      <Cell col={6} row={6}>
        <div className="flex items-center justify-center w-full h-full">
          <div
            className="rounded-full bg-theme-cyan"
            style={{ width: '3cqi', height: '3cqi' }}
          />
        </div>
      </Cell>

      {/* Stripe divider at row 5 boundary */}
      <Cell col={1} colSpan={6} row={5}>
        <StripeBars
          colors={['var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-magenta)']}
          thickness={1.5}
        />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  10 · SPLIT DUOTONE                                                  */
/*  Face split vertically with overlapping masked portraits. Two     */
/*  collaborators, one warm-tinted, one cool-tinted, with central    */
/*  text overlay.                                                     */
/* ------------------------------------------------------------------ */

// ─── 10 · Split Duotone ──────────────────────────────────────────────────────
export const SplitDuotone: Story = {
  name: '10 – Split Duotone',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Left portrait — warm tint */}
      <Cell col={1} colSpan={4} row={1} rowSpan={6}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          mask="fade-right"
        />
      </Cell>
      <Cell col={1} colSpan={4} row={1} rowSpan={6}>
        <ColorBlock color="var(--theme-orange)" opacity={0.25} />
      </Cell>

      {/* Right portrait — cool tint */}
      <Cell col={3} colSpan={4} row={1} rowSpan={6}>
        <ImageBlock
          src="/images/collaborators/tom-dale01.png"
          alt="Tom Dale"
          mask="fade-left"
        />
      </Cell>
      <Cell col={3} colSpan={4} row={1} rowSpan={6}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.2} />
      </Cell>

      {/* Central text band */}
      <Cell col={1} colSpan={6} row={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 30 },
            { color: 'transparent', position: 70 },
            { color: 'var(--theme-black)', position: 100 },
          ]}
          opacity={0.7}
        />
      </Cell>
      <Cell col={1} colSpan={6} row={3} rowSpan={2}>
        <TextBlock
          fontSize={14}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.03em"
        >
          TEAM
        </TextBlock>
      </Cell>

      {/* Bottom label */}
      <Cell col={1} colSpan={6} row={6}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.8}
        />
      </Cell>
      <Cell col={1} colSpan={6} row={6}>
        <TextBlock
          fontSize={2.5}
          color="var(--theme-white)"
          opacity={0.5}
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.15em"
          alignVertical="end"
          padding={2}
        >
          People & Partners
        </TextBlock>
      </Cell>

      <GridLines opacity={0.05} />
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  11 · DIRECTORY ROWS                                                 */
/*  Structured list layout — each collaborator gets a single row      */
/*  with a colour accent, name, and role. Data table energy.          */
/* ------------------------------------------------------------------ */

const DIRECTORY = [
  { name: 'Alex H-F',   role: 'Creative Tech', color: 'var(--theme-cyan)' },
  { name: 'James L-B',  role: 'Developer',     color: 'var(--theme-magenta)' },
  { name: 'Steve B',    role: 'Producer',       color: 'var(--theme-orange)' },
  { name: 'Charlotte N', role: 'Designer',      color: 'var(--theme-green)' },
];

// ─── 11 · Directory Rows ─────────────────────────────────────────────────────
export const DirectoryRows: Story = {
  name: '11 – Directory Rows',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.07} />

      {/* Header row */}
      <Cell col={1} colSpan={6} row={1}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={1} colSpan={6} row={1}>
        <TextBlock
          fontSize={4}
          color="var(--theme-black)"
          fontWeight={900}
          uppercase
          letterSpacing="0.1em"
          alignHorizontal="start"
          padding={2}
        >
          Collaborators
        </TextBlock>
      </Cell>

      {/* Directory entries — rows 2–5 */}
      {DIRECTORY.map(({ name, role, color }, i) => (
        <Cell key={name} col={1} colSpan={6} row={(i + 2) as 1 | 2 | 3 | 4 | 5 | 6}>
          <div className="flex items-center w-full h-full select-none" style={{ paddingInline: '2cqi', gap: '2cqi' }}>
            {/* Colour pip */}
            <div
              className="rounded-full shrink-0"
              style={{ width: '2.5cqi', height: '2.5cqi', background: color }}
            />
            {/* Name */}
            <span className="text-theme-white font-black shrink-0" style={{ fontSize: '4cqi' }}>
              {name}
            </span>
            {/* Spacer line */}
            <div className="flex-1 h-px bg-theme-white/10" />
            {/* Role */}
            <span className="text-theme-white/40 font-bold uppercase tracking-wider shrink-0" style={{ fontSize: '2cqi' }}>
              {role}
            </span>
          </div>
        </Cell>
      ))}

      {/* Footer row */}
      <Cell col={1} colSpan={6} row={6}>
        <div className="flex items-center justify-between w-full h-full select-none" style={{ paddingInline: '2cqi' }}>
          <span className="text-theme-white/30 font-bold uppercase tracking-[0.2em]" style={{ fontSize: '2cqi' }}>
            4 of 8 listed
          </span>
          <Icon name="arrow-right" size={12} color="var(--theme-magenta)" weight="bold" />
        </div>
      </Cell>

      <Cell col={1} colSpan={6} row={2}><StripeBars thickness={1} /></Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  12 · OVERLAP PORTRAITS                                              */
/*  Three overlapping portraits staggered diagonally across the face  */
/*  with colour-tinted backgrounds behind each. Depth through         */
/*  layering.                                                         */
/* ------------------------------------------------------------------ */

// ─── 12 · Overlap Portraits ──────────────────────────────────────────────────
export const OverlapPortraits: Story = {
  name: '12 – Overlap Portraits',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Back layer — top-left */}
      <Cell col={1} colSpan={4} row={1} rowSpan={4}>
        <ColorBlock color="var(--theme-purple)" opacity={0.3} />
      </Cell>
      <Cell col={1} colSpan={4} row={1} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          opacity={0.7}
        />
      </Cell>

      {/* Middle layer — centre-right */}
      <Cell col={3} colSpan={3} row={2} rowSpan={4}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.2} />
      </Cell>
      <Cell col={3} colSpan={3} row={2} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          opacity={0.85}
        />
      </Cell>

      {/* Front layer — bottom-centre */}
      <Cell col={2} colSpan={4} row={3} rowSpan={4}>
        <ColorBlock color="var(--theme-orange)" opacity={0.15} />
      </Cell>
      <Cell col={2} colSpan={4} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          opacity={1}
          mask="fade-up"
        />
      </Cell>

      {/* Top gradient for header legibility */}
      <Cell col={1} colSpan={6} row={1}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.6}
        />
      </Cell>

      {/* Header */}
      <Cell col={1} colSpan={6} row={1}>
        <TextBlock
          fontSize={5}
          color="var(--theme-white)"
          fontWeight={900}
          uppercase
          letterSpacing="0.08em"
          alignHorizontal="start"
          padding={2}
        >
          Collaborators
        </TextBlock>
      </Cell>

      {/* Bottom label */}
      <Cell col={1} colSpan={6} row={6}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 100 },
          ]}
          opacity={0.85}
        />
      </Cell>
      <Cell col={1} colSpan={6} row={6}>
        <TextBlock
          fontSize={3}
          color="var(--theme-magenta)"
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.1em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          Hannah · Jake · Charlotte
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  13 · QUAD BIO CARDS                                                 */
/*  Four quadrant bio cards — each occupies 3×3, with a portrait,    */
/*  name, and accent colour. Clean, systematic, modular.              */
/* ------------------------------------------------------------------ */

const BIO_CARDS = [
  { src: '/images/collaborators/alex-hort-francis-portrait01.png', name: 'Alex',      color: 'var(--theme-cyan)',    col: 1 as const, row: 1 as const },
  { src: '/images/collaborators/james-lee-burgess-portrait01.png', name: 'James',     color: 'var(--theme-magenta)', col: 4 as const, row: 1 as const },
  { src: '/images/collaborators/steve-bjorck01.png',               name: 'Steve',     color: 'var(--theme-orange)',  col: 1 as const, row: 4 as const },
  { src: '/images/collaborators/tom-dale01.png',                   name: 'Tom',       color: 'var(--theme-green)',   col: 4 as const, row: 4 as const },
];

// ─── 13 · Quad Bio Cards ─────────────────────────────────────────────────────
export const QuadBioCards: Story = {
  name: '13 – Quad Bio Cards',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.08} />

      {BIO_CARDS.map(({ src, name, color, col, row }) => (
        <Cell key={name} col={col} colSpan={3} row={row} rowSpan={3}>
          <div className="relative w-full h-full overflow-hidden">
            {/* Portrait */}
            <ImageBlock src={src} alt={name} objectPosition="top" />
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0"
              style={{ height: '50%', background: `linear-gradient(to top, ${color}, transparent)` }}
            />
            {/* Name label */}
            <div
              className="absolute bottom-0 left-0 w-full flex items-end select-none"
              style={{ padding: '2cqi' }}
            >
              <span className="text-theme-black font-black uppercase tracking-tight" style={{ fontSize: '5cqi' }}>
                {name}
              </span>
            </div>
          </div>
        </Cell>
      ))}

      {/* Central crosshair accent */}
      <Cell col={3} colSpan={2} row={3} rowSpan={2}>
        <div className="flex items-center justify-center w-full h-full">
          <Icon name="plus" size={16} color="var(--theme-white)" weight="thin" />
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  14 · FILM STRIP                                                     */
/*  Horizontal portrait strip across the middle of the face, with    */
/*  large heading above and label below. Cinema-frame energy.         */
/* ------------------------------------------------------------------ */

// ─── 14 · Film Strip ─────────────────────────────────────────────────────────
export const FilmStrip: Story = {
  name: '14 – Film Strip',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Top half — heading */}
      <Cell col={1} colSpan={6} row={1} rowSpan={2}>
        <TextBlock
          fontSize={20}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          TEAM
        </TextBlock>
      </Cell>

      {/* Stripe above portrait strip */}
      <Cell col={1} colSpan={6} row={3}>
        <StripeBars thickness={1.5} />
      </Cell>

      {/* Portrait strip — row 3–4, six 1-col portraits */}
      <Cell col={1} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/alex-hort-francis-portrait01.png" alt="Alex" objectPosition="top" />
      </Cell>
      <Cell col={2} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/james-lee-burgess-portrait01.png" alt="James" objectPosition="top" />
      </Cell>
      <Cell col={3} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/charlotte-norman01.png" alt="Charlotte" objectPosition="top" />
      </Cell>
      <Cell col={4} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/jake-bignell01.png" alt="Jake" objectPosition="top" />
      </Cell>
      <Cell col={5} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/hannah-houghton01.png" alt="Hannah" objectPosition="top" />
      </Cell>
      <Cell col={6} row={3} rowSpan={2}>
        <ImageBlock src="/images/collaborators/steve-bjorck01.png" alt="Steve" objectPosition="top" />
      </Cell>

      {/* Stripe below portrait strip */}
      <Cell col={1} colSpan={6} row={5}>
        <StripeBars
          colors={['var(--theme-cyan)', 'var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-green)', 'var(--theme-purple)', 'var(--theme-cyan)']}
          thickness={1.5}
        />
      </Cell>

      {/* Bottom area */}
      <Cell col={1} colSpan={4} row={5} rowSpan={2}>
        <TextBlock
          fontSize={3}
          color="var(--theme-white)"
          opacity={0.4}
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.15em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          Collaborators
        </TextBlock>
      </Cell>

      <Cell col={5} colSpan={2} row={5} rowSpan={2}>
        <IconSingle name="users" color="var(--theme-magenta)" weight="duotone" iconSize={10} opacity={0.4} />
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  15 · NETWORK MAP                                                    */
/*  Abstract representation — icons at intersections of the grid,     */
/*  suggesting a network of collaborators. No photos, pure graphic.   */
/* ------------------------------------------------------------------ */

// ─── 15 · Network Map ────────────────────────────────────────────────────────
export const NetworkMap: Story = {
  name: '15 – Network Map',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      <GridLines opacity={0.15} />

      {/* Scattered icon nodes at grid intersections */}
      <Cell col={2} row={1}>
        <IconSingle name="cube" color="var(--theme-cyan)" weight="duotone" iconSize={8} />
      </Cell>
      <Cell col={5} row={1}>
        <IconSingle name="globe" color="var(--theme-magenta)" weight="duotone" iconSize={7} />
      </Cell>
      <Cell col={1} row={3}>
        <IconSingle name="users" color="var(--theme-orange)" weight="duotone" iconSize={9} />
      </Cell>
      <Cell col={4} row={2} colSpan={2} rowSpan={2}>
        <IconSingle name="broadcast" color="var(--theme-purple)" weight="duotone" iconSize={12} />
      </Cell>
      <Cell col={3} row={4}>
        <IconSingle name="sparkle" color="var(--theme-cyan)" weight="fill" iconSize={6} />
      </Cell>
      <Cell col={6} row={4}>
        <IconSingle name="lightning" color="var(--theme-orange)" weight="duotone" iconSize={7} />
      </Cell>
      <Cell col={1} row={5}>
        <IconSingle name="brain" color="var(--theme-green)" weight="duotone" iconSize={8} />
      </Cell>
      <Cell col={4} row={5}>
        <IconSingle name="chat" color="var(--theme-magenta)" weight="duotone" iconSize={7} />
      </Cell>

      {/* Central label */}
      <Cell col={2} colSpan={4} row={3} rowSpan={2}>
        <TextBlock
          fontSize={10}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.03em"
          opacity={0.15}
        >
          UTC
        </TextBlock>
      </Cell>

      {/* Bottom label bar */}
      <Cell col={1} colSpan={6} row={6}>
        <ColorBlock color="var(--theme-magenta)" opacity={0.9} />
      </Cell>
      <Cell col={1} colSpan={6} row={6}>
        <TextBlock
          fontSize={3.5}
          color="var(--theme-black)"
          fontWeight={900}
          uppercase
          letterSpacing="0.1em"
        >
          Our Network
        </TextBlock>
      </Cell>

      <Cell col={1} colSpan={6} row={6}><StripeBars thickness={1} /></Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  16 · SINGLE SPOTLIGHT                                               */
/*  Full-bleed single portrait with dramatic gradient, large name,   */
/*  and minimal metadata. Hero treatment for a featured collaborator. */
// ─── 16 · Single Spotlight ───────────────────────────────────────────────────
export const SingleSpotlight: Story = {
  name: '16 – Single Spotlight',
  render: () => (
    <FaceGrid className="bg-theme-black!">
      {/* Full-face portrait */}
      <Cell col={1} colSpan={6} row={1} rowSpan={6}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          scale={1.1}
        />
      </Cell>

      {/* Colour wash */}
      <Cell col={1} colSpan={6} row={1} rowSpan={6}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'transparent', position: 50 },
          ]}
          opacity={0.6}
        />
      </Cell>

      {/* Bottom darken for text */}
      <Cell col={1} colSpan={6} row={4} rowSpan={3}>
        <GradientBlock
          direction="to top"
          stops={[
            { color: 'var(--theme-black)', position: 0 },
            { color: 'transparent', position: 80 },
          ]}
          opacity={0.85}
        />
      </Cell>

      {/* Name — large */}
      <Cell col={1} colSpan={6} row={4} rowSpan={2}>
        <TextBlock
          fontSize={16}
          color="var(--theme-white)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
          lineHeight={0.9}
        >
          Jake Bignell
        </TextBlock>
      </Cell>

      {/* Eyebrow */}
      <Cell col={1} colSpan={3} row={1}>
        <TextBlock
          fontSize={2.2}
          color="var(--theme-cyan)"
          opacity={0.7}
          fontWeight={700}
          mono
          uppercase
          letterSpacing="0.2em"
          alignHorizontal="start"
          alignVertical="start"
          padding={2}
        >
          Featured
        </TextBlock>
      </Cell>

      {/* Role + stripe */}
      <Cell col={1} colSpan={6} row={6}>
        <StripeBars
          colors={['var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-magenta)']}
          thickness={1.5}
        />
      </Cell>
      <Cell col={1} colSpan={6} row={6}>
        <TextBlock
          fontSize={2.8}
          color="var(--theme-white)"
          opacity={0.5}
          fontWeight={600}
          letterSpacing="0"
          alignHorizontal="start"
          alignVertical="end"
          padding={2}
        >
          Creative Technology · XR Development
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  17 · COLOUR BLOCK + PORTRAITS                                       */
/*  Story 3's bold saturated block layout, but each colour field has   */
/*  a collaborator portrait burned in with multiply blend mode —        */
/*  duotone / risograph poster energy.                                  */
/* ------------------------------------------------------------------ */

// ─── 17 · Colour Block + Portraits ──────────────────────────────────────────
export const ColourBlockPortraits: Story = {
  name: '17 – Colour Block + Portraits',
  render: () => (
    <FaceGrid>
      {/* ── Block 1: magenta, 3×3 top-left ── */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ColorBlock color="var(--theme-magenta)" />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 2: cyan, 3×2 top-right ── */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 3: orange, 2×2 mid-right ── */}
      <Cell col={4} row={3} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-orange)" />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 4: purple, 1×4 right column ── */}
      <Cell col={6} row={3} rowSpan={4}>
        <ColorBlock color="var(--theme-purple)" />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/sebastian-miller01.png"
          alt="Sebastian Miller"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 5: green, 3×3 bottom-left ── */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ColorBlock color="var(--theme-green)" />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 6: cyan, 2×2 bottom-mid ── */}
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ColorBlock color="var(--theme-cyan)" opacity={0.6} />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* Stripe bar at R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Overlaid "COLLABORATORS" type */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={6} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.03em">
          COLLABORATORS
        </TextBlock>
      </Cell>

      {/* Bottom-left label badge */}
      <Cell col={1} row={6} colSpan={3} zIndex={3}>
        <div className="flex items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="bg-theme-black/80 text-theme-white font-bold uppercase tracking-wider px-1.5 py-0.5" style={{ fontSize: '2.5cqi' }}>
            Collaborators
          </span>
        </div>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  18 · GRADIENT DUOTONE PORTRAITS                                     */
/*  Story 17 evolved: two-colour gradient backgrounds per block        */
/*  (CollaboratorBio luminosity pattern), new colour block in the      */
/*  bottom half filling the gap between orange and cyan rows,          */
/*  and a light white grid overlay.                                     */
/* ------------------------------------------------------------------ */

// ─── 18 · Gradient Duotone Portraits ────────────────────────────────────────
export const GradientDuotonePortraits: Story = {
  name: '18 – Gradient Duotone Portraits',
  render: () => (
    <FaceGrid>
      <GridLines opacity={0.12} />

      {/* ── Block 1: magenta→purple, 3×3 top-left (Alex) ── */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-purple)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 2: cyan→orange, 3×2 top-right (James) ── */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 3: orange→magenta, 2×1 mid-right (Charlotte) ── */}
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-orange)', position: 0 },
            { color: 'var(--theme-magenta)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 4: purple→cyan, 1×4 right column (Sebastian) ── */}
      <Cell col={6} row={3} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/sebastian-miller01.png"
          alt="Sebastian Miller"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 5: green→cyan, 3×3 bottom-left (Jake) ── */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 6 (new): magenta→orange, 2×1 mid-bottom row (Tom) ── */}
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/tom-dale01.png"
          alt="Tom Dale"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 7: cyan→green, 2×2 bottom-mid (Hannah) ── */}
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-green)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* Stripe bar at R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Overlaid "COLLABORATORS" type */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={6} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.03em">
          COLLABORATORS
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  19 · MIXED BLEND MODES                                              */
/*  Story 18's gradient blocks, but each portrait uses a different     */
/*  blend mode — every face reads differently, maximum variety.        */
/* ------------------------------------------------------------------ */

// ─── 19 · Mixed Blend Modes ──────────────────────────────────────────────────
export const MixedBlendModes: Story = {
  name: '19 – Mixed Blend Modes',
  render: () => (
    <FaceGrid>
      <GridLines opacity={0.12} />

      {/* ── Block 1: magenta→purple · multiply (Alex) ── */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-purple)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          objectPosition="top"
          mixBlendMode="multiply"
        />
      </Cell>

      {/* ── Block 2: cyan→orange · screen (James) ── */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          objectPosition="top"
          mixBlendMode="screen"
        />
      </Cell>

      {/* ── Block 3: orange→magenta · overlay (Charlotte) ── */}
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-orange)', position: 0 },
            { color: 'var(--theme-magenta)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          mixBlendMode="overlay"
        />
      </Cell>

      {/* ── Block 4: purple→cyan · hard-light (Sebastian) ── */}
      <Cell col={6} row={3} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/sebastian-miller01.png"
          alt="Sebastian Miller"
          objectPosition="top"
          mixBlendMode="hard-light"
        />
      </Cell>

      {/* ── Block 5: green→cyan · luminosity (Jake) ── */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 6: magenta→orange · color-burn (Tom) ── */}
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/tom-dale01.png"
          alt="Tom Dale"
          objectPosition="top"
          mixBlendMode="color-burn"
        />
      </Cell>

      {/* ── Block 7: cyan→green · soft-light (Hannah) ── */}
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-green)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          mixBlendMode="soft-light"
        />
      </Cell>

      {/* Stripe bar at R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Overlaid "COLLABORATORS" type */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={6} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.03em">
          COLLABORATORS
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  20 · WIDE TITLE + VISIBLE GRID                                      */
/*  Story 19 refined: full-width "COLLABORATORS" title, stronger grid, */
/*  lighter blend on top-left block, and a second stripe bar           */
/*  dividing the bottom half.                                           */
/* ------------------------------------------------------------------ */

// ─── 20 · Wide Title + Visible Grid ─────────────────────────────────────────
export const WideTitleVisibleGrid: Story = {
  name: '20 – Wide Title + Visible Grid',
  render: () => (
    <FaceGrid>
      <GridLines opacity={0.22} />

      {/* ── Block 1: magenta→purple · luminosity (Alex) ── */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-purple)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 2: cyan→orange · screen (James) ── */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          objectPosition="top"
          mixBlendMode="screen"
        />
      </Cell>

      {/* ── Block 3: orange→magenta · overlay (Charlotte) ── */}
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-orange)', position: 0 },
            { color: 'var(--theme-magenta)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          mixBlendMode="overlay"
        />
      </Cell>

      {/* ── Block 4: purple→cyan · hard-light (Sebastian) ── */}
      <Cell col={6} row={3} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/sebastian-miller01.png"
          alt="Sebastian Miller"
          objectPosition="top"
          mixBlendMode="hard-light"
        />
      </Cell>

      {/* ── Block 5: green→cyan · luminosity (Jake) ── */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 6: magenta→orange · color-burn (Tom) ── */}
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/tom-dale01.png"
          alt="Tom Dale"
          objectPosition="top"
          mixBlendMode="color-burn"
        />
      </Cell>

      {/* ── Block 7: cyan→green · soft-light (Hannah) ── */}
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-green)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          mixBlendMode="soft-light"
        />
      </Cell>

      {/* Stripe bar at R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Stripe bar at R5/R6 boundary — bottom half divider */}
      <Cell col={1} row={5} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-green)', 'var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-green)']} />
      </Cell>

      {/* Overlaid "COLLABORATORS" type — full face width */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={10} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.05em">
          COLLABORATORS
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};

/* ------------------------------------------------------------------ */
/*  21 · BURNT OUT + VERTICAL STRIPE                                    */
/*  Story 20 refined: stronger grid, color-dodge on top-left for       */
/*  blown-out overexposed look, bottom stripe bar rotated vertical     */
/*  and repositioned at the col 3/4 boundary.                          */
/* ------------------------------------------------------------------ */

// ─── 21 · Burnt Out + Vertical Stripe ───────────────────────────────────────
export const BurntOutVerticalStripe: Story = {
  name: '21 – Burnt Out + Vertical Stripe',
  render: () => (
    <FaceGrid>
      <GridLines opacity={0.32} />

      {/* ── Block 1: magenta→purple · color-dodge = blown-out (Alex) ── */}
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-purple)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={1} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/alex-hort-francis-portrait01.png"
          alt="Alex Hort-Francis"
          objectPosition="top"
          mixBlendMode="color-dodge"
        />
      </Cell>

      {/* ── Block 2: cyan→orange · screen (James) ── */}
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={1} colSpan={3} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/james-lee-burgess-portrait01.png"
          alt="James Lee Burgess"
          objectPosition="top"
          mixBlendMode="screen"
        />
      </Cell>

      {/* ── Block 3: orange→magenta · overlay (Charlotte) ── */}
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-orange)', position: 0 },
            { color: 'var(--theme-magenta)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={3} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/charlotte-norman01.png"
          alt="Charlotte Norman"
          objectPosition="top"
          mixBlendMode="overlay"
        />
      </Cell>

      {/* ── Block 4: purple→cyan · hard-light (Sebastian) ── */}
      <Cell col={6} row={3} rowSpan={4}>
        <GradientBlock
          direction="to bottom"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={6} row={3} rowSpan={4}>
        <ImageBlock
          src="/images/collaborators/sebastian-miller01.png"
          alt="Sebastian Miller"
          objectPosition="top"
          mixBlendMode="hard-light"
        />
      </Cell>

      {/* ── Block 5: green→cyan · luminosity (Jake) ── */}
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-green)', position: 0 },
            { color: 'var(--theme-cyan)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={1} row={4} colSpan={3} rowSpan={3}>
        <ImageBlock
          src="/images/collaborators/jake-bignell01.png"
          alt="Jake Bignell"
          objectPosition="top"
          mixBlendMode="luminosity"
        />
      </Cell>

      {/* ── Block 6: magenta→orange · color-burn (Tom) ── */}
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-magenta)', position: 0 },
            { color: 'var(--theme-orange)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={4} colSpan={2} rowSpan={1}>
        <ImageBlock
          src="/images/collaborators/tom-dale01.png"
          alt="Tom Dale"
          objectPosition="top"
          mixBlendMode="color-burn"
        />
      </Cell>

      {/* ── Block 7: cyan→green · soft-light (Hannah) ── */}
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <GradientBlock
          direction="to right"
          stops={[
            { color: 'var(--theme-cyan)', position: 0 },
            { color: 'var(--theme-green)', position: 100 },
          ]}
        />
      </Cell>
      <Cell col={4} row={5} colSpan={2} rowSpan={2}>
        <ImageBlock
          src="/images/collaborators/hannah-houghton01.png"
          alt="Hannah Houghton"
          objectPosition="top"
          mixBlendMode="soft-light"
        />
      </Cell>

      {/* Horizontal stripe bar at R3/R4 boundary */}
      <Cell col={1} row={3} colSpan={6} zIndex={1}>
        <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
      </Cell>

      {/* Vertical stripe bar at col 3/4 boundary — full height */}
      <Cell col={4} row={1} rowSpan={6} zIndex={1}>
        <StripeBars
          direction="vertical"
          colors={['var(--theme-green)', 'var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-green)']}
        />
      </Cell>

      {/* Overlaid "COLLABORATORS" type — full face width */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
        <TextBlock fontSize={10} color="var(--theme-white)" fontWeight={900} letterSpacing="-0.05em">
          COLLABORATORS
        </TextBlock>
      </Cell>
    </FaceGrid>
  ),
};
