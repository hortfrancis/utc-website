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
  construct: ['hard-hat', 'blueprint', 'crane', 'cube-focus'] as const,
  popXr: ['cube', 'sparkle', 'rocket', 'star'] as const,
  btUrban: ['globe', 'broadcast', 'circuit-board', 'monitor'] as const,
  tracing: ['film-strip', 'video-camera', 'camera', 'path'] as const,
  sammys: ['paw-print', 'smiley', 'device-mobile', 'heart'] as const,
  btMfg: ['gear', 'atom', 'lightning', 'cube-transparent'] as const,
};

/* ── Zoomed image helper ──────────────────────────────────────────── */

function ZoomedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <div style={{ transform: 'scale(2)', transformOrigin: 'center', width: '100%', height: '100%' }}>
        <ImageBlock src={src} alt={alt} />
      </div>
    </div>
  );
}

/* ================================================================== */

export default function Work() {
  return (
    <div style={{ backgroundColor: 'var(--theme-black)' }} className="w-full h-full">
      <FaceGrid className="bg-transparent!">

        {/* C1 · Construct.AR · purple */}
        <Cell col={1} row={1} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-purple)" />
        </Cell>
        <Cell col={1} row={1} colSpan={2} zIndex={2}>
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
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
          <ZoomedImage src={IMG.construct} alt="Construct.AR" />
        </Cell>

        {/* C2 · Pop.XR · cyan */}
        <Cell col={3} row={1} colSpan={2} rowSpan={2}>
          <ColorBlock color="var(--theme-cyan)" />
        </Cell>
        <Cell col={3} row={1} colSpan={2} zIndex={2}>
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
            Pop.XR
          </TextBlock>
        </Cell>
        <Cell col={3} row={2} zIndex={2}>
          <ZoomedImage src={IMG.popXr} alt="Pop.XR" />
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
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
            BT Urban.AR
          </TextBlock>
        </Cell>
        <Cell col={5} row={2} zIndex={2}>
          <ZoomedImage src={IMG.btUrban} alt="BT Urban.AR" />
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
          <TextBlock fontSize={30} fontWeight={900} color="var(--theme-white)" padding={0}>
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
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
            Tracing
          </TextBlock>
        </Cell>
        <Cell col={1} row={6} zIndex={2}>
          <ZoomedImage src={IMG.tracing} alt="Tracing the Footprint" />
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
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
            Sammy&apos;s Xmas
          </TextBlock>
        </Cell>
        <Cell col={3} row={6} zIndex={2}>
          <ZoomedImage src={IMG.sammys} alt="Sammy's Christmas Adventure" />
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
          <TextBlock fontSize={2.5} mono uppercase letterSpacing="0.12em" fontWeight={900} color="var(--theme-black)" padding={0.5} alignHorizontal="start" alignVertical="start">
            BT Mfg
          </TextBlock>
        </Cell>
        <Cell col={5} row={6} zIndex={2}>
          <ZoomedImage src={IMG.btMfg} alt="BT Manufacturing Showcase" />
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
}
