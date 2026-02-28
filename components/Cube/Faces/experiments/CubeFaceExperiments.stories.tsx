import { useRef, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import clsx from 'clsx';
import Icon from '../../../Icon/Icon';
import type { IconName } from '../../../Icon/Icon';
import { iconNames } from '../../../Icon/Icon';
import { extendedRealityIcon } from '../../../Grids/patterns';

/* ------------------------------------------------------------------ */
/*  Frozen copy of the original FaceGrid (pre-refactor).               */
/*  Inlined here so these experiment stories remain self-contained     */
/*  and visually identical regardless of future FaceGrid changes.      */
/* ------------------------------------------------------------------ */
function FaceGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        'w-full h-full',
        'relative',
        'bg-theme-black',
        'overflow-hidden',
        className,
      )}
      style={{ containerType: 'inline-size' }}
    >
      {children}
    </div>
  );
}

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

/* ================================================================== */
/*  7 · ICON GRID HOVER                                                */
/*  Same cube icon in every cell. Muted at rest, lights up to a       */
/*  cycling theme colour on hover with a smooth transition.            */
/* ================================================================== */

/** Tailwind classes: muted base → vivid on hover, per theme colour. */
const hoverColourClasses = [
  'text-theme-cyan/20 hover:text-theme-cyan',
  'text-theme-orange/20 hover:text-theme-orange',
  'text-theme-purple/20 hover:text-theme-purple',
  'text-theme-magenta/20 hover:text-theme-magenta',
  'text-theme-green/20 hover:text-theme-green',
  'text-theme-white/20 hover:text-theme-white',
];

export const IconGridHover: Story = {
  name: 'XR – Icon Grid Hover',
  render: () => (
    <FaceGrid>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-theme-white/5 ${hoverColourClasses[i % hoverColourClasses.length]}`}
          >
            <Icon name="cube" size={28} weight="fill" />
          </div>
        ))}
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  8 · ICON GRID TRAIL                                                */
/*  Same cube icon grid but with a long fade-out (10s) creating a     */
/*  trail effect as you move the cursor across the grid.               */
/* ================================================================== */

/** Background matches the hover colour per cell for a unified glow. */
const trailColourClasses = [
  'text-theme-cyan/20 hover:text-theme-cyan bg-theme-cyan/5 hover:bg-theme-cyan/15',
  'text-theme-orange/20 hover:text-theme-orange bg-theme-orange/5 hover:bg-theme-orange/15',
  'text-theme-purple/20 hover:text-theme-purple bg-theme-purple/5 hover:bg-theme-purple/15',
  'text-theme-magenta/20 hover:text-theme-magenta bg-theme-magenta/5 hover:bg-theme-magenta/15',
  'text-theme-green/20 hover:text-theme-green bg-theme-green/5 hover:bg-theme-green/15',
  'text-theme-white/20 hover:text-theme-white bg-theme-white/5 hover:bg-theme-white/15',
];

export const IconGridTrail: Story = {
  name: 'XR – Icon Grid Trail',
  render: () => (
    <FaceGrid>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px]">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center cursor-pointer transition-colors [transition-duration:10s] hover:[transition-duration:0s] ${trailColourClasses[i % trailColourClasses.length]}`}
          >
            <Icon name="cube" size={28} weight="fill" />
          </div>
        ))}
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/*  9 · ICON GRID TOUCH TRAIL                                          */
/*  Touch + mouse version. JS tracks pointer via pointerover/out for   */
/*  mouse, touchmove + elementFromPoint for touch drag. CSS custom     */
/*  properties carry per-cell vivid colours; a data-active attribute   */
/*  triggers instant-on / 10s-fade-off via a scoped <style> block.     */
/* ================================================================== */

/** Per-cell vivid colour values (set as CSS custom properties). */
const touchTrailVividColours = [
  { color: 'var(--theme-cyan)', bg: 'rgba(104, 227, 232, 0.15)' },
  { color: 'var(--theme-orange)', bg: 'rgba(251, 176, 6, 0.15)' },
  { color: 'var(--theme-purple)', bg: 'rgba(68, 59, 255, 0.15)' },
  { color: 'var(--theme-magenta)', bg: 'rgba(248, 73, 193, 0.15)' },
  { color: 'var(--theme-green)', bg: 'rgba(50, 205, 50, 0.15)' },
  { color: 'var(--theme-white)', bg: 'rgba(255, 255, 255, 0.15)' },
];

/** Base (muted) Tailwind classes per colour. */
const touchTrailBaseClasses = [
  'text-theme-cyan/20 bg-theme-cyan/5',
  'text-theme-orange/20 bg-theme-orange/5',
  'text-theme-purple/20 bg-theme-purple/5',
  'text-theme-magenta/20 bg-theme-magenta/5',
  'text-theme-green/20 bg-theme-green/5',
  'text-theme-white/20 bg-theme-white/5',
];

function IconGridTouchTrailComponent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const lastTouchCell = useRef<Element | null>(null);

  // Mouse: pointerover/pointerout bubble, so we delegate from the grid
  const handlePointerOver = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    const cell = (e.target as Element).closest('[data-trail-cell]');
    cell?.setAttribute('data-active', '');
  }, []);

  const handlePointerOut = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    const cell = (e.target as Element).closest('[data-trail-cell]');
    cell?.removeAttribute('data-active');
  }, []);

  // Touch: track finger position, find cell via elementFromPoint
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const cell = el?.closest('[data-trail-cell]');
    if (!cell || !gridRef.current?.contains(cell)) return;

    if (cell !== lastTouchCell.current) {
      lastTouchCell.current?.removeAttribute('data-active');
      cell.setAttribute('data-active', '');
      lastTouchCell.current = cell;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    lastTouchCell.current?.removeAttribute('data-active');
    lastTouchCell.current = null;
  }, []);

  return (
    <FaceGrid>
      {/* Scoped styles: base 10s fade, instant-on when active */}
      <style>{`
        .trail-grid [data-trail-cell] {
          transition: color 10s, background-color 10s;
        }
        .trail-grid [data-trail-cell][data-active] {
          color: var(--trail-color) !important;
          background-color: var(--trail-bg) !important;
          transition-duration: 0s !important;
        }
      `}</style>
      <div
        ref={gridRef}
        className="trail-grid absolute inset-0 grid grid-cols-6 grid-rows-6 gap-[2px] p-[2px] touch-none"
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const idx = i % touchTrailVividColours.length;
          return (
            <div
              key={i}
              data-trail-cell=""
              style={{
                '--trail-color': touchTrailVividColours[idx].color,
                '--trail-bg': touchTrailVividColours[idx].bg,
              } as React.CSSProperties}
              className={`flex items-center justify-center cursor-pointer ${touchTrailBaseClasses[idx]}`}
            >
              <Icon name="cube" size={28} weight="fill" />
            </div>
          );
        })}
      </div>
    </FaceGrid>
  );
}

export const IconGridTouchTrail: Story = {
  name: 'XR – Icon Grid Touch Trail',
  render: () => <IconGridTouchTrailComponent />,
};

/* ================================================================== */
/* 10 · TRON FLAT GRID                                                 */
/*  Retrofuturist TRON (1982) inspired. Uniform 6×6 grid of bright     */
/*  yellow-outlined squares on black with subtle neon glow.            */
/* ================================================================== */

export const TronFlatGrid: Story = {
  name: 'XR – TRON Flat Grid',
  render: () => (
    <FaceGrid className="bg-black!">
      <div
        className="absolute inset-0 grid grid-cols-6 grid-rows-6"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #FFE500',
              boxShadow: '0 0 4px #FFE50055',
              background: 'transparent',
            }}
          />
        ))}
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/* 11 · TRON GRID + VR IMAGE                                           */
/*  Same yellow grid on black with a VR headset image composited over  */
/*  the top.                                                           */
/* ================================================================== */

export const TronGridVRImage: Story = {
  name: 'XR – TRON Grid + VR Image',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* Yellow grid layer */}
      <div
        className="absolute inset-0 grid grid-cols-6 grid-rows-6"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #FFE500',
              boxShadow: '0 0 4px #FFE50055',
              background: 'transparent',
            }}
          />
        ))}
      </div>

      {/* VR image layer — fades from visible at top to transparent at bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <img
          src="/images/experiments/vr01.png"
          alt="VR headset"
          className="w-full h-full object-cover"
        />
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/* 12 · WHITE GRID + VR02 IMAGE + TYPE                                 */
/*  White grid lines on black, vr02 image faded top-to-bottom,         */
/*  XR / Extended Reality / VR / AR labels placed at grid positions.   */
/* ================================================================== */

export const WhiteGridVR02: Story = {
  name: 'XR – White Grid + VR02 + Type',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* White grid layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="border border-theme-white/20"
          />
        ))}
      </div>

      {/* VR image — fades top to bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <img
          src="/images/experiments/vr02.png"
          alt="VR headset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typography layer — positioned on the 6×6 grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {/* XR — large, bottom-left area */}
        <div className="col-start-1 col-span-3 row-start-4 row-span-2 flex items-end p-2">
          <span
            className="font-black text-theme-white leading-none select-none"
            style={{ fontSize: '3.5rem', letterSpacing: '-0.03em' }}
          >
            XR
          </span>
        </div>

        {/* Extended Reality — right of XR */}
        <div className="col-start-3 col-span-4 row-start-4 flex items-end pb-2">
          <span
            className="font-bold text-theme-white/70 uppercase tracking-widest select-none"
            style={{ fontSize: '0.5rem' }}
          >
            Extended Reality
          </span>
        </div>

        {/* VR: Virtual Reality — bottom row left */}
        <div className="col-start-1 col-span-3 row-start-6 flex items-center px-2">
          <span className="select-none">
            <span className="font-bold text-theme-white/60" style={{ fontSize: '0.45rem' }}>
              VR:{' '}
            </span>
            <span className="text-theme-white/40" style={{ fontSize: '0.4rem' }}>
              Virtual Reality
            </span>
          </span>
        </div>

        {/* AR: Augmented Reality — bottom row right */}
        <div className="col-start-4 col-span-3 row-start-6 flex items-center px-2">
          <span className="select-none">
            <span className="font-bold text-theme-white/60" style={{ fontSize: '0.45rem' }}>
              AR:{' '}
            </span>
            <span className="text-theme-white/40" style={{ fontSize: '0.4rem' }}>
              Augmented Reality
            </span>
          </span>
        </div>
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/* 13 · WHITE GRID + VR02 + TYPE v2                                    */
/*  Iteration on 12. Bigger XR spanning C1-C2/R5-R6, Extended Reality  */
/*  doubled up at C3-C6/R5, VR at C3-C4/R6, AR at C5/R6.             */
/* ================================================================== */

export const WhiteGridVR02v2: Story = {
  name: 'XR – White Grid + VR02 + Type v2',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* White grid layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="border border-theme-white/20"
          />
        ))}
      </div>

      {/* VR image — fades top to bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <img
          src="/images/experiments/vr02.png"
          alt="VR headset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typography layer — positioned on the 6×6 grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {/* XR — fills C1-C2 / R5-R6 with padding */}
        <div className="col-start-1 col-span-2 row-start-5 row-span-2 flex items-center justify-center p-2">
          <span
            className="font-black text-theme-white leading-none select-none"
            style={{ fontSize: '4.4rem', letterSpacing: '-0.04em' }}
          >
            XR
          </span>
        </div>

        {/* Extended Reality — C3-C6 / R5, technical monospace via MONO axis */}
        <div className="col-start-3 col-span-4 row-start-5 flex items-center px-2">
          <span
            className="font-black text-theme-white/70 uppercase tracking-widest select-none"
            style={{ fontSize: '1rem', fontWeight: 750, fontVariationSettings: "'MONO' 1, 'CASL' 0" }}
          >
            Extended Reality
          </span>
        </div>

        {/* VR + AR — single container, C3-C5 / R6 */}
        <div className="col-start-3 col-span-3 row-start-6 flex items-center px-2">
          <span className="select-none" style={{ fontSize: '0.6rem' }}>
            <span className="font-bold text-theme-white/80">VR: </span>
            <span className="text-theme-white/60">Virtual Reality</span>
            <br />
            <span className="font-bold text-theme-white/80">AR: </span>
            <span className="text-theme-white/60">Augmented Reality</span>
          </span>
        </div>
      </div>
    </FaceGrid>
  ),
};
/* ================================================================== */
/* 14 · WHITE GRID + VR02 + TYPE + ICONS                               */
/*  Iteration on 13. Adds acid-style Phosphor icons: a row of 3 at    */
/*  top-left (C1-C3/R1), and a 2×2 quad in the bottom-right corner.   */
/* ================================================================== */

const topRowIcons: IconName[] = ['google-cardboard', 'cube-focus', 'virtual-reality'];
const quadIcons: IconName[] = ['hard-hat', 'blueprint', 'crane', 'cube'];

export const WhiteGridVR02v3Icons: Story = {
  name: 'XR – White Grid + VR02 + Icons',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* White grid layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="border border-theme-white/20"
          />
        ))}
      </div>

      {/* VR image — fades top to bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <img
          src="/images/experiments/vr02.png"
          alt="VR headset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Icons + Typography layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {/* Top-left row of icons — C1-C3 / R1 */}
        {topRowIcons.map((name, i) => (
          <div
            key={name}
            className="flex items-center justify-center"
            style={{
              gridColumn: `${i + 1} / ${i + 2}`,
              gridRow: '1 / 2',
            }}
          >
            <Icon name={name} size={18} color="var(--theme-white)" weight="fill" />
          </div>
        ))}

        {/* Bottom-right quad of icons — C6 / R4-R5, 2×2 sub-grid */}
        {/* Bottom-right quad of icons — C6 / R4-R5, 2×2 sub-grid */}
        <div
          className="grid grid-cols-2 grid-rows-2 gap-1"
          style={{ gridColumn: '6 / 7', gridRow: '4 / 6' }}
        >
          {quadIcons.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <Icon name={name} size={18} color="var(--theme-white)" weight="fill" className="opacity-60" />
            </div>
          ))}
        </div>

        {/* XR — fills C1-C2 / R5-R6 with padding */}
        <div className="col-start-1 col-span-2 row-start-5 row-span-2 flex items-center justify-center p-2">
          <span
            className="font-black text-theme-white leading-none select-none"
            style={{ fontSize: '4.4rem', letterSpacing: '-0.04em' }}
          >
            XR
          </span>
        </div>

        {/* Extended Reality — C3-C6 / R5, technical monospace via MONO axis */}
        <div className="col-start-3 col-span-4 row-start-5 flex items-center px-2">
          <span
            className="font-black text-theme-white/70 uppercase tracking-widest select-none"
            style={{ fontSize: '1rem', fontWeight: 750, fontVariationSettings: "'MONO' 1, 'CASL' 0" }}
          >
            Extended Reality
          </span>
        </div>

        {/* VR + AR — single container, C3-C5 / R6 */}
        <div className="col-start-3 col-span-3 row-start-6 flex items-center px-2">
          <span className="select-none" style={{ fontSize: '0.6rem' }}>
            <span className="font-bold text-theme-white/80">VR: </span>
            <span className="text-theme-white/60">Virtual Reality</span>
            <br />
            <span className="font-bold text-theme-white/80">AR: </span>
            <span className="text-theme-white/60">Augmented Reality</span>
          </span>
        </div>
      </div>
    </FaceGrid>
  ),
};

/* ================================================================== */
/* 15 · SUB-SQUARE ICONS + CQI UNITS                                   */
/*  Iteration on 14. All sizing uses cqi (container query inline)      */
/*  so the face scales responsively. Icons sit in "sub-squares" —      */
/*  a quadrant of a grid cell — for structural consistency.            */
/* ================================================================== */

/**
 * Sub-square icon wrapper. Places an icon in one quadrant of its
 * parent grid cell. The icon is sized relative to the face via cqi.
 *
 * @param anchor - Which corner quadrant: 'tl' | 'tr' | 'bl' | 'br'
 */
function SubSquareIcon({
  name,
  anchor = 'tl',
  opacity = 1,
}: {
  name: IconName;
  anchor?: 'tl' | 'tr' | 'bl' | 'br';
  opacity?: number;
}) {
  const anchorClasses: Record<string, string> = {
    tl: 'items-start justify-start',
    tr: 'items-start justify-end',
    bl: 'items-end justify-start',
    br: 'items-end justify-end',
  };

  return (
    <div
      className={`flex ${anchorClasses[anchor]} p-[1cqi]`}
      style={{ opacity }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: '6cqi', height: '6cqi' }}
      >
        <Icon
          name={name}
          size={999}
          color="var(--theme-white)"
          weight="fill"
          className="[&>svg]:w-full [&>svg]:h-full"
        />
      </div>
    </div>
  );
}

export const SubSquareIconsCQI: Story = {
  name: 'XR – Sub-Square Icons + CQI',
  render: () => (
    <FaceGrid className="bg-black!">
      {/* White grid layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="border border-theme-white/20"
          />
        ))}
      </div>

      {/* VR image — fades top to bottom */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <img
          src="/images/experiments/vr02.png"
          alt="VR headset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Icons + Typography layer */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {/* Top-left row of icons — C1/R1, C2/R1, C3/R1 — each in sub-square */}
        <div style={{ gridColumn: '1', gridRow: '1' }}>
          <SubSquareIcon name="google-cardboard" anchor="tl" />
        </div>
        <div style={{ gridColumn: '2', gridRow: '1' }}>
          <SubSquareIcon name="cube-focus" anchor="tl" />
        </div>
        <div style={{ gridColumn: '3', gridRow: '1' }}>
          <SubSquareIcon name="virtual-reality" anchor="tl" />
        </div>

        {/* Bottom-right quad — C5-C6 / R3-R4, one icon per cell sub-square */}
        <div style={{ gridColumn: '6', gridRow: '3' }}>
          <SubSquareIcon name="hard-hat" anchor="br" opacity={0.6} />
        </div>
        <div style={{ gridColumn: '6', gridRow: '4' }}>
          <SubSquareIcon name="blueprint" anchor="br" opacity={0.6} />
        </div>
        <div style={{ gridColumn: '5', gridRow: '3' }}>
          <SubSquareIcon name="crane" anchor="br" opacity={0.6} />
        </div>
        <div style={{ gridColumn: '5', gridRow: '4' }}>
          <SubSquareIcon name="cube" anchor="br" opacity={0.6} />
        </div>

        {/* XR — fills C1-C2 / R5-R6 */}
        <div
          className="col-start-1 col-span-2 row-start-5 row-span-2 flex items-center justify-center"
          style={{ padding: '2cqi' }}
        >
          <span
            className="font-black text-theme-white leading-none select-none"
            style={{ fontSize: '22.5cqi', letterSpacing: '-0.04em' }}
          >
            XR
          </span>
        </div>

        {/* Extended Reality — C3-C6 / R5 */}
        <div
          className="col-start-3 col-span-4 row-start-5 flex items-center"
          style={{ paddingInline: '1.5cqi' }}
        >
          <span
            className="font-black text-theme-white/70 uppercase tracking-widest select-none"
            style={{
              fontSize: '7cqi',
              fontWeight: 750,
              fontVariationSettings: "'MONO' 1, 'CASL' 0",
              lineHeight: 1,
            }}
          >
            Extended Reality
          </span>
        </div>

        {/* VR + AR — C3-C5 / R6 */}
        <div
          className="col-start-3 col-span-3 row-start-6 flex items-center"
          style={{ paddingInline: '1.5cqi' }}
        >
          <span className="select-none" style={{ fontSize: '3cqi' }}>
            <span className="font-bold text-theme-white/80">VR: </span>
            <span className="text-theme-white/60">Virtual Reality</span>
            <br />
            <span className="font-bold text-theme-white/80">AR: </span>
            <span className="text-theme-white/60">Augmented Reality</span>
          </span>
        </div>
      </div>
    </FaceGrid>
  ),
};