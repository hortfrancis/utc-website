import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import type { IconName } from '../../../Icon/Icon';
import FaceGrid from '../FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
  StripeBars,
} from '../primitives';

/* ================================================================== */
/*                                                                     */
/*  Cube Face Work — Acid Flat Experiments                            */
/*                                                                     */
/*  Acid Flat layout family: colour blocks, project cells, StripeBars, */
/*  random theme background. Split from CubeFaceWorkExperiments for    */
/*  file size. Uses same IMG + PROJECT_ICONS as main Work experiments.*/
/*                                                                     */
/* ================================================================== */

/* -- Image constants ------------------------------------------------ */

const IMG = {
  sammys: '/images/work/sammys-christmas-adventure-01.webp',
  btMfg: '/images/work/bt-manufacturing-showcase-01.webp',
  btUrban: '/images/work/bt-urban-ar-01.webp',
  construct: '/images/work/construct-ar-01.webp',
  popXr: '/images/work/pop-xr-01.webp',
  tracing: '/images/work/tracing-the-footprint-01.webp',
} as const;

// const PROJECT_ICONS = {
//   construct: ['hard-hat', 'blueprint', 'crane', 'cube-focus'] as const,
//   popXr: ['cube', 'sparkle', 'rocket', 'star'] as const,
//   btUrban: ['globe', 'broadcast', 'circuit-board', 'monitor'] as const,
//   tracing: ['film-strip', 'video-camera', 'camera', 'path'] as const,
//   sammys: ['paw-print', 'smiley', 'device-mobile', 'heart'] as const,
//   btMfg: ['gear', 'atom', 'lightning', 'cube-transparent'] as const,
// };

const PROJECT_ICONS = {
  construct: ['hard-hat', 'blueprint', 'crane', 'cube-focus'] as const,
  popXr: ['cube', 'sparkle', 'rocket', 'star'] as const,
  btUrban: ['globe', 'broadcast', 'circuit-board', 'monitor'] as const,
  tracing: ['film-strip', 'video-camera', 'camera', 'path'] as const,
  sammys: ['paw-print', 'smiley', 'device-mobile', 'heart'] as const,
  btMfg: ['gear', 'atom', 'lightning', 'cube-transparent'] as const,
};

const PROJECT_ICONS_TWO = {
  construct: ['hard-hat', 'blueprint'] as const,
  popXr: ['cube', 'sparkle'] as const,
  btUrban: ['globe', 'broadcast'] as const,
  tracing: ['film-strip', 'video-camera'] as const,
  sammys: ['paw-print', 'smiley'] as const,
  btMfg: ['gear', 'atom'] as const,
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

/* -- ProjectCell (internal) ----------------------------------------- */

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
  icons: readonly [IconName, IconName, IconName, IconName];
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
      {/* <Cell col={col + 1} row={row + 1} colSpan={1} rowSpan={1}>
        <ColorBlock color={'var(--theme-black)'} opacity={0.6} />
      </Cell> */}
      <Cell col={col} row={row} colSpan={2} zIndex={2}>
        <TextBlock
          fontSize={2.5}
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
          icons={{ tl: icons[0], tr: icons[1], bl: icons[2], br: icons[3] }}
          showDivider={false}
          color={iconColor}
          opacity={1}
        />
      </Cell>
    </>
  );
}

function ProjectCellTwoIcons({
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

/* ------------------------------------------------------------------ */

const meta = {
  title: 'Experiments/Cube Faces/Work',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Acid Flat layout experiments for the Work cube face. ' +
          'Colour blocks, project cells, StripeBars, random theme background. ' +
          'Split from main Work experiments for file size.',
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
/*  16 · EDITED 01                                                      */
/*  Acid Flat layout with ProjectCell subcomponent.                    */
/* ------------------------------------------------------------------ */

// ─── 16 · Edited 01 ────────────────────────────────────────────────────────
export const Edited01: Story = {
  name: '16 – Edited 01',
  render: () => {
    // const bg = pickRandomColor();
    const bg = 'var(--theme-cyan)';
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

          <ProjectCell
            col={1}
            row={1}
            color="var(--theme-purple)"
            title={<>Construct<br />.AR</>}
            image={IMG.construct}
            alt="Construct.AR"
            icons={PROJECT_ICONS.construct}
            iconColor="var(--theme-white)"
          />
          <ProjectCell
            col={3}
            row={1}
            color="var(--theme-cyan)"
            title={<>Pop<br />.XR</>}
            image={IMG.popXr}
            alt="Pop.XR"
            icons={PROJECT_ICONS.popXr}
            iconColor="var(--theme-white)"
          />
          <ProjectCell
            col={5}
            row={1}
            color="var(--theme-orange)"
            title={<>BT <br />Urban<br />.AR</>}
            image={IMG.btUrban}
            alt="BT Urban.AR"
            icons={PROJECT_ICONS.btUrban}
            iconColor="var(--theme-white)"
          />


          {/* Metadata — left gutter */}
          {/* <Cell col={1} row={3} zIndex={4}>
            <div className="w-full h-full flex flex-col items-start justify-center" style={{ paddingInline: '1cqi', gap: '0.4cqi' }}>
            <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
            UTC
            </span>
            <span style={{ fontSize: '1.8cqi', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--theme-black)', opacity: 0.4 }}>
            08
            </span>
            </div>
            </Cell> */}

          {/* Dock Stories — drifting vertical label */}
          {/* <Cell col={6} row={4} zIndex={4}>
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
              </Cell> */}

          <ProjectCell
            col={1}
            row={5}
            color="var(--theme-green)"
            title={<>Tracing <br />the <br />Footprint</>}
            image={IMG.tracing}
            alt="Tracing the Footprint"
            icons={PROJECT_ICONS.tracing}
            iconColor="var(--theme-white)"
          />
          <ProjectCell
            col={3}
            row={5}
            color="var(--theme-magenta)"
            title={<>Sammy&apos;s <br />Xmas <br />Adventure</>}
            image={IMG.sammys}
            alt="Sammy's Christmas Adventure"
            icons={PROJECT_ICONS.sammys}
            iconColor="var(--theme-white)"
          />
          <ProjectCell
            col={5}
            row={5}
            color="var(--theme-orange)"
            title={<>BT <br />Manufacturing <br />Showcase</>}
            image={IMG.btMfg}
            alt="BT Manufacturing Showcase"
            icons={PROJECT_ICONS.btMfg}
            iconColor="var(--theme-white)"
          />

          <Cell col={1} row={3} colSpan={6} >
            <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} />
          </Cell>
          <Cell col={1} row={4} colSpan={6} >
            <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} />
          </Cell>
          <GridLines color="var(--theme-black)" opacity={1} />

          {/* ── Centre zone: "Work" ──────────────────────────────── */}
          <Cell col={1} row={3} colSpan={6} rowSpan={2}>
            <TextBlock fontSize={30} fontWeight={900} color="var(--theme-white)" padding={0}>
              Work
            </TextBlock>
          </Cell>

        </FaceGrid>
      </div>
    );
  },
};

// ─── 17 · Edited 01 (Two Icons) ─────────────────────────────────────────────────
export const Edited01TwoIcons: Story = {
  name: '17 – Edited 01 (Two Icons)',
  render: () => {
    const bg = 'var(--theme-black)';
    return (
      <div style={{ backgroundColor: bg }} className="w-full h-full">
        <FaceGrid className="bg-transparent!">

          <ProjectCellTwoIcons
            col={1}
            row={1}
            color="var(--theme-purple)"
            title={<>Construct.AR</>}
            image={IMG.construct}
            alt="Construct.AR"
            icons={PROJECT_ICONS_TWO.construct}
            iconColor="var(--theme-white)"
          />
          <ProjectCellTwoIcons
            col={3}
            row={1}
            color="var(--theme-orange)"
            title={<>Pop.XR</>}
            image={IMG.popXr}
            alt="Pop.XR"
            icons={PROJECT_ICONS_TWO.popXr}
            iconColor="var(--theme-white)"
          />
          <ProjectCellTwoIcons
            col={5}
            row={1}
            color="var(--theme-green)"
            title={<>BT Urban.AR</>}
            image={IMG.btUrban}
            alt="BT Urban.AR"
            icons={PROJECT_ICONS_TWO.btUrban}
            iconColor="var(--theme-white)"
          />

          <ProjectCellTwoIcons
            col={1}
            row={5}
            color="var(--theme-green)"
            title={<>Tracing <br />the <br />Footprint</>}
            image={IMG.tracing}
            alt="Tracing the Footprint"
            icons={PROJECT_ICONS_TWO.tracing}
            iconColor="var(--theme-white)"
          />
          <ProjectCellTwoIcons
            col={3}
            row={5}
            color="var(--theme-magenta)"
            title={<>Sammy&apos;s <br />Xmas <br />Adventure</>}
            image={IMG.sammys}
            alt="Sammy's Christmas Adventure"
            icons={PROJECT_ICONS_TWO.sammys}
            iconColor="var(--theme-white)"
          />
          <ProjectCellTwoIcons
            col={5}
            row={5}
            color="var(--theme-orange)"
            title={<>BT <br />Manufacturing <br />Showcase</>}
            image={IMG.btMfg}
            alt="BT Manufacturing Showcase"
            icons={PROJECT_ICONS_TWO.btMfg}
            iconColor="var(--theme-white)"
          />

          <Cell col={1} row={3} colSpan={6} >
            <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} />
          </Cell>
          <Cell col={1} row={4} colSpan={6} >
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
  },
};
