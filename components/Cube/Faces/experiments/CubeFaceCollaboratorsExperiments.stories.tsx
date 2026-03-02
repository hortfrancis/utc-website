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
          align="start"
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
      <StripeBars
        bars={[{ row: 3, colors: ['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)'] }]}
      />

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
          align="start"
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
      <StripeBars
        bars={[{ row: 5, colors: ['var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-cyan)', 'var(--theme-green)'] }]}
      />

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
          align="start"
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

      <StripeBars />
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
          align="start"
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

      <StripeBars />
    </FaceGrid>
  ),
};
