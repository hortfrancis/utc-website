import type { Meta, StoryObj } from '@storybook/react';
import FaceGrid from '../FaceGrid';
import Icon from '../../../Icon/Icon';
import type { IconName } from '../../../Icon/Icon';
import { iconNames } from '../../../Icon/Icon';
import { extendedRealityIcon } from '../../../Grids/patterns';

/**
 * XR cube face experiments. Each story explores a different visual approach
 * inspired by acid design reference: bold colour blocking, asymmetric typography,
 * geometric icons, UI chrome as decoration.
 *
 * Content: "XR: Extended Reality" · "AR: Augmented Reality" · "VR: Virtual Reality"
 */
const meta = {
  title: 'Experiments/Cube Faces',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'XR face design experiments. 300px square frame matching cube face aspect ratio. Pick elements that work, combine into final XR.tsx.',
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
/*  1 · GRID TYPOGRAPHY                                                */
/*  Type-forward. Big asymmetric XR, thin accent blocks, HR dividers.  */
/*  Inspired by: reference's mixed-scale type and grid structure.      */
/* ================================================================== */

export const GridTypography: Story = {
  name: 'XR – Grid Typography',
  render: () => (
    <FaceGrid>
      {/* Colour accent blocks on the 6×6 grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        <div className="col-start-5 col-span-2 row-start-1 row-span-1 bg-theme-cyan" />
        <div className="col-start-6 row-start-2 bg-theme-purple" />
        <div className="col-start-1 row-start-6 bg-theme-orange" />
      </div>

      {/* Text content layer */}
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <div />

        {/* Hero type — anchored mid-left */}
        <span className="text-theme-cyan font-black text-[3.5rem] leading-[0.82] tracking-tighter select-none">
          XR
        </span>

        {/* Horizontal rule */}
        <div className="h-px w-full bg-theme-white/20" />

        {/* Descriptor labels */}
        <div className="flex flex-col gap-1.5">
          <span className="text-theme-white/70 text-[8px] font-bold uppercase tracking-[0.25em] select-none">
            Extended Reality
          </span>
          <div className="flex gap-3">
            <span className="select-none">
              <span className="text-theme-orange font-black text-[11px]">AR </span>
              <span className="text-theme-white/30 text-[6px]">Augmented</span>
            </span>
            <span className="select-none">
              <span className="text-theme-magenta font-black text-[11px]">VR </span>
              <span className="text-theme-white/30 text-[6px]">Virtual</span>
            </span>
          </div>
        </div>
      </div>

      {/* Globe icon — bottom-right corner */}
      <div className="absolute bottom-3 right-3">
        <Icon name="globe" size={22} color="var(--theme-cyan)" weight="duotone" />
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  2 · COLOUR BLOCK                                                   */
/*  Saturated fills on the 6×6 grid. Acid-poster energy. Diagonal     */
/*  stepping pattern with black negative space.                        */
/*  Inspired by: reference's bold blue/orange/red colour fields.       */
/* ================================================================== */

export const ColourBlock: Story = {
  name: 'XR – Colour Block',
  render: () => (
    <FaceGrid>
      {/* Colour fields — diagonal stepping composition */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        <div className="col-start-1 col-span-4 row-start-1 row-span-2 bg-theme-cyan" />
        <div className="col-start-5 col-span-2 row-start-1 row-span-3 bg-theme-purple" />
        <div className="col-start-1 col-span-2 row-start-3 row-span-2 bg-theme-orange" />
        <div className="col-start-1 col-span-3 row-start-5 row-span-2 bg-theme-magenta" />
        <div className="col-start-5 col-span-2 row-start-6 row-span-1 bg-theme-cyan/60" />
      </div>

      {/* Colour stripe bar — horizontal accent (reference nod) */}
      <div className="absolute top-[33.3%] left-0 right-0 h-[3px] flex">
        <div className="w-1/4 bg-theme-orange" />
        <div className="w-1/4 bg-theme-magenta" />
        <div className="w-1/4 bg-theme-cyan" />
        <div className="w-1/4 bg-theme-purple" />
      </div>

      {/* XR text — centred, overlapping colour boundaries */}
      <div className="absolute inset-0 flex items-center justify-center select-none">
        <span className="text-theme-white font-black text-[5rem] leading-none tracking-tighter drop-shadow-lg">
          XR
        </span>
      </div>

      {/* AR / VR badges — bottom-left */}
      <div className="absolute bottom-2 left-2 flex gap-1 select-none">
        <span className="bg-theme-black/80 text-theme-white text-[7px] font-bold px-1.5 py-0.5">
          AR
        </span>
        <span className="bg-theme-black/80 text-theme-white text-[7px] font-bold px-1.5 py-0.5">
          VR
        </span>
      </div>

      {/* VR icon — top-right over purple */}
      <div className="absolute top-2 right-2">
        <Icon name="virtual-reality" size={16} color="var(--theme-white)" weight="bold" />
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  3 · PIXEL OVERLAY                                                  */
/*  XR icon pattern as translucent grid texture, double-layered with   */
/*  offset. Gradient fade to readable text. Scanline accents.          */
/*  Inspired by: reference's geometric textures and icon patterns.     */
/* ================================================================== */

export const PixelOverlay: Story = {
  name: 'XR – Pixel Overlay',
  render: () => {
    const pattern = extendedRealityIcon();
    return (
      <FaceGrid>
        {/* Icon pattern — outer layer (cyan) */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px]">
          {pattern.map((sq, i) => (
            <div
              key={i}
              className={sq.colour === 'opaque' ? 'bg-theme-cyan/15' : ''}
            />
          ))}
        </div>

        {/* Icon pattern — inner layer (purple, offset inward) */}
        <div className="absolute inset-[8%] grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px] opacity-50">
          {pattern.map((sq, i) => (
            <div
              key={i}
              className={sq.colour === 'opaque' ? 'bg-theme-purple/25' : ''}
            />
          ))}
        </div>

        {/* Gradient fade — bottom-heavy for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-theme-black via-theme-black/50 to-transparent" />

        {/* Scanline accents */}
        <div className="absolute top-[25%] left-0 right-0 h-px bg-theme-cyan/15" />
        <div className="absolute top-[50%] left-0 right-0 h-px bg-theme-cyan/10" />
        <div className="absolute top-[75%] left-0 right-0 h-px bg-theme-cyan/5" />

        {/* Text content — anchored bottom-left */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 select-none">
          <span className="text-theme-cyan font-black text-[3rem] leading-[0.85] tracking-tighter">
            XR
          </span>
          <span className="text-theme-white/50 text-[7px] font-bold uppercase tracking-[0.25em] mt-1">
            Extended Reality
          </span>
          <div className="flex gap-2 mt-0.5">
            <span className="text-theme-orange text-[6px] font-bold">AR</span>
            <span className="text-theme-white/15 text-[6px]">•</span>
            <span className="text-theme-magenta text-[6px] font-bold">VR</span>
          </div>
        </div>
      </FaceGrid>
    );
  },
};

/* ================================================================== */
/*  4 · INFO CARD                                                      */
/*  Window-chrome UI. Header bar with traffic-light dots, body with    */
/*  icon + year + descriptor, colour stripes, bottom CTA bar.          */
/*  Directly references the design image's window panel.               */
/* ================================================================== */

export const InfoCard: Story = {
  name: 'XR – Info Card',
  render: () => (
    <FaceGrid>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {/* Chrome header bar */}
        <div className="col-start-1 col-span-6 row-start-1 row-span-1 bg-theme-purple flex items-center px-2 gap-1.5">
          <div className="flex gap-[3px]">
            <div className="w-[5px] h-[5px] rounded-full bg-theme-orange" />
            <div className="w-[5px] h-[5px] rounded-full bg-theme-cyan" />
            <div className="w-[5px] h-[5px] rounded-full bg-theme-magenta" />
          </div>
          <span className="text-theme-white text-[7px] font-bold uppercase tracking-wider ml-auto select-none">
            XR
          </span>
        </div>

        {/* Content area — rows 2–5 */}
        <div className="col-start-1 col-span-6 row-start-2 row-span-4 p-2 flex flex-col select-none">
          {/* Icon + year display */}
          <div className="flex items-start justify-between">
            <Icon name="virtual-reality" size={36} color="var(--theme-cyan)" />
            <div className="flex flex-col items-end">
              <span className="text-theme-white/30 text-[8px] font-mono leading-tight">20</span>
              <span className="text-theme-white/30 text-[8px] font-mono leading-tight">26</span>
            </div>
          </div>

          {/* Dot pattern (braille-style reference nod) */}
          <div className="flex gap-[3px] mt-1.5">
            <div className="w-[4px] h-[4px] rounded-full bg-theme-cyan/40" />
            <div className="w-[4px] h-[4px] rounded-full bg-theme-cyan/40" />
            <div className="w-[4px] h-[4px] rounded-full bg-theme-cyan/20" />
            <div className="w-[4px] h-[4px] rounded-full bg-theme-cyan/20" />
          </div>

          {/* Colour stripe bar */}
          <div className="flex h-[3px] mt-2 mb-2 gap-[1px]">
            <div className="w-2/5 bg-theme-orange" />
            <div className="w-1/5 bg-theme-magenta" />
            <div className="w-2/5 bg-theme-cyan" />
          </div>

          {/* Body text */}
          <span className="text-theme-white/50 text-[6px] leading-relaxed flex-1">
            Augmented, virtual, and mixed reality.
            Technology that extends how we see, hear,
            and interact with the world.
          </span>

          {/* Tag badge */}
          <span className="inline-flex self-start mt-1.5 border border-theme-cyan/40 text-theme-cyan text-[6px] font-bold uppercase tracking-wider px-1.5 py-0.5">
            Extended Reality
          </span>
        </div>

        {/* Bottom CTA bar */}
        <div className="col-start-1 col-span-6 row-start-6 row-span-1 bg-theme-cyan flex items-center gap-1.5 px-2">
          <Icon name="cube" size={12} color="var(--theme-black)" />
          {/* Vertical colour stripes */}
          <div className="flex gap-[2px] h-3/5">
            <div className="w-[3px] bg-theme-orange" />
            <div className="w-[3px] bg-theme-magenta" />
            <div className="w-[3px] bg-theme-purple" />
          </div>
          <Icon name="arrow-right" size={10} color="var(--theme-black)" weight="bold" />
          <span className="text-theme-black font-black text-[13px] tracking-tight select-none uppercase">
            XR
          </span>
          <Icon name="globe" size={12} color="var(--theme-black)" className="ml-auto" />
        </div>
      </div>

      {/* Stripe accent — sits between content and CTA bar */}
      <div className="absolute bottom-[calc(100%/6)] left-0 right-0 h-[3px] flex">
        <div className="flex-1 bg-theme-orange" />
        <div className="flex-1 bg-theme-magenta" />
        <div className="flex-1 bg-theme-cyan" />
        <div className="flex-1 bg-theme-green" />
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  5 · MINIMAL CORNER                                                 */
/*  Maximum negative space. Text clustered bottom-left. Contrast to    */
/*  the density of the other experiments.                              */
/* ================================================================== */

export const MinimalCorner: Story = {
  name: 'XR – Minimal Corner',
  render: () => (
    <FaceGrid>
      {/* Corner accent — L-shaped crop mark */}
      <div className="absolute top-0 left-0 w-[2px] h-1/3 bg-theme-cyan/30" />
      <div className="absolute top-0 left-0 h-[2px] w-1/3 bg-theme-cyan/30" />

      {/* Text cluster — bottom-left */}
      <div className="absolute bottom-3 left-3 select-none">
        <span className="block text-theme-cyan font-black text-[2.8rem] leading-[0.82] tracking-tighter">
          XR
        </span>
        <div className="h-px w-8 bg-theme-cyan/30 my-1.5" />
        <span className="block text-theme-white/40 text-[6px] font-bold uppercase tracking-[0.3em]">
          Extended
        </span>
        <span className="block text-theme-white/40 text-[6px] font-bold uppercase tracking-[0.3em]">
          Reality
        </span>
      </div>

      {/* Tiny AR / VR labels — top-right, diagonal tension */}
      <div className="absolute top-3 right-3 text-right select-none">
        <span className="block text-theme-orange/50 text-[6px] font-bold tracking-wider">AR</span>
        <span className="block text-theme-magenta/50 text-[6px] font-bold tracking-wider mt-0.5">VR</span>
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  6 · ICON GRID                                                      */
/*  Every cell of the 6×6 grid holds a Phosphor icon from the         */
/*  registry. Fill weight, cycling through theme colours.              */
/* ================================================================== */

const themeColours = [
  'var(--theme-cyan)',
  'var(--theme-orange)',
  'var(--theme-purple)',
  'var(--theme-magenta)',
  'var(--theme-green)',
  'var(--theme-white)',
];

/** Pick 36 icons from the registry for the 6×6 grid. */
const gridIcons: IconName[] = iconNames.slice(0, 36);

export const IconGrid: Story = {
  name: 'XR – Icon Grid',
  render: () => (
    <FaceGrid>
      {/* 6×6 icon grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px]">
        {gridIcons.map((name, i) => (
          <div
            key={name}
            className="flex items-center justify-center bg-theme-white/[0.03]"
          >
            <Icon
              name={name}
              size={28}
              color={themeColours[i % themeColours.length]}
              weight="fill"
            />
          </div>
        ))}
      </div>
    </FaceGrid>
  ),
};
