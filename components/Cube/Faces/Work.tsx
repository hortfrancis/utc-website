import type { ReactNode } from 'react';
import type { IconName } from '../../Icon/Icon';
import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
  StripeBars,
} from './primitives';

/* ── Image paths ──────────────────────────────────────────────────── */

const IMG = {
  construct: '/images/work/construct-ar-01.webp',
  popXr: '/images/work/pop-xr-01.webp',
  btUrban: '/images/work/bt-urban-ar-01.webp',
  tracing: '/images/work/tracing-the-footprint-01.webp',
  sammys: '/images/work/sammys-christmas-adventure-01.webp',
  btMfg: '/images/work/bt-manufacturing-showcase-01.webp',
} as const;

/* ── Per-project icon sets ────────────────────────────────────────── */

const PROJECT_ICONS = {
  construct: ['hard-hat', 'blueprint'] as const,
  popXr: ['cube', 'sparkle'] as const,
  btUrban: ['globe', 'broadcast'] as const,
  tracing: ['film-strip', 'video-camera'] as const,
  sammys: ['paw-print', 'smiley'] as const,
  btMfg: ['gear', 'atom'] as const,
};

/* ── Project cell ─────────────────────────────────────────────────── */

function ProjectCell({
  col,
  row,
  color,
  title,
  image,
  alt,
  icons,
  iconColor,
}: {
  col: number;
  row: number;
  color: string;
  title: ReactNode;
  image: string;
  alt: string;
  icons: readonly [IconName, IconName];
  iconColor: string;
}) {
  return (
    <>
      <Cell col={col} row={row} colSpan={2} rowSpan={2}>
        <ColorBlock color={color} />
      </Cell>
      <Cell col={col} row={row} colSpan={2}>
        <ColorBlock color={'var(--theme-black)'} opacity={0.66} />
      </Cell>
      <Cell col={col} row={row} colSpan={2} rowSpan={2}>
        <ImageBlock src={image} alt={alt} scale={2} mixBlendMode="multiply" />
      </Cell>
      <Cell col={col} row={row} colSpan={2} zIndex={2}>
        <TextBlock
          fontSize={3}
          mono
          uppercase
          letterSpacing="0.12em"
          fontWeight={700}
          lineHeight={1.2}
          color="var(--theme-white)"
          padding={2}
          alignHorizontal="end"
          alignVertical="end"
          textAlign="right"
        >
          {title}
        </TextBlock>
      </Cell>
      <Cell col={col + 1} row={row + 1}>
        <IconQuad
          icons={{ tl: icons[0], tr: icons[1] }}
          showDivider={false}
          color={iconColor}
          opacity={1}
        />
      </Cell>
    </>
  );
}

/* ================================================================== */

// Preserved source — restore as the Work() return body to redesign and re-bake
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WorkDesign = () => (
  <div style={{ backgroundColor: 'var(--theme-black)' }} className="w-full h-full">
    <FaceGrid className="bg-transparent!">

      <ProjectCell col={1} row={1} color="var(--theme-purple)" title={<>Construct.AR</>} image={IMG.construct} alt="Construct.AR" icons={PROJECT_ICONS.construct} iconColor="var(--theme-white)" />
      <ProjectCell col={3} row={1} color="var(--theme-orange)" title={<>Pop.XR</>} image={IMG.popXr} alt="Pop.XR" icons={PROJECT_ICONS.popXr} iconColor="var(--theme-white)" />
      <ProjectCell col={5} row={1} color="var(--theme-green)" title={<>BT Urban.AR</>} image={IMG.btUrban} alt="BT Urban.AR" icons={PROJECT_ICONS.btUrban} iconColor="var(--theme-white)" />

      <ProjectCell col={1} row={5} color="var(--theme-green)" title={<>Tracing <br />the <br />Footprint</>} image={IMG.tracing} alt="Tracing the Footprint" icons={PROJECT_ICONS.tracing} iconColor="var(--theme-white)" />
      <ProjectCell col={3} row={5} color="var(--theme-magenta)" title={<>Sammy&apos;s <br />Xmas <br />Adventure</>} image={IMG.sammys} alt="Sammy's Christmas Adventure" icons={PROJECT_ICONS.sammys} iconColor="var(--theme-white)" />
      <ProjectCell col={5} row={5} color="var(--theme-orange)" title={<>BT <br />Manufacturing <br />Showcase</>} image={IMG.btMfg} alt="BT Manufacturing Showcase" icons={PROJECT_ICONS.btMfg} iconColor="var(--theme-white)" />

      <Cell col={1} row={3} colSpan={6}>
        <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} />
      </Cell>
      <Cell col={1} row={4} colSpan={6}>
        <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} />
      </Cell>
      <GridLines color="var(--theme-black)" opacity={1} />

      <Cell col={1} row={3} colSpan={6} rowSpan={2}>
        <TextBlock fontSize={30} fontWeight={900} color="var(--theme-white)" padding={0}>
          Work
        </TextBlock>
      </Cell>

    </FaceGrid>
  </div>
);

export default function Work() {
  return <img src="/faces/work.jpg" alt="" className="w-full h-full object-cover block" />;
}
