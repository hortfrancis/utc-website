import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
} from './primitives';

export default function XR() {
  return (
    <FaceGrid className="bg-black!">
      {/* Layer 1: Grid lines */}
      <GridLines />

      {/* Layer 2: VR image — full face, fades top to bottom */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <ImageBlock
          src="/images/experiments/vr02.png"
          alt="VR headset"
          mask="fade-down"
        />
      </Cell>

      {/* Layer 3: Colour gradient overlay */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <GradientBlock
          direction="135deg"
          stops={[
            { color: 'var(--theme-purple)', position: 0 },
            { color: 'var(--theme-cyan)', position: 40 },
            { color: 'transparent', position: 80 },
          ]}
          opacity={0.4}
        />
      </Cell>

      {/* Layer 4: Icons + Typography */}

      {/* Top-left row of icons — 2 per cell */}
      <Cell col={1} row={1} zIndex={1}>
        <IconQuad icons={{ tl: 'google-cardboard', tr: 'cube-focus' }} showDivider={false} />
      </Cell>
      <Cell col={2} row={1} zIndex={1}>
        <IconQuad icons={{ tl: 'virtual-reality', tr: 'globe' }} showDivider={false} />
      </Cell>

      {/* Bottom-right column of icons — 2 per cell */}
      <Cell col={6} row={5} zIndex={1}>
        <IconQuad icons={{ tr: 'crane', br: 'hard-hat' }} showDivider={false} opacity={0.6} />
      </Cell>
      <Cell col={6} row={6} zIndex={1}>
        <IconQuad icons={{ tr: 'cube', br: 'blueprint' }} showDivider={false} opacity={0.6} />
      </Cell>

      {/* XR heading */}
      <Cell col={1} row={5} colSpan={2} rowSpan={2} zIndex={1}>
        <TextBlock fontSize={22.5} padding={2}>
          XR
        </TextBlock>
      </Cell>

      {/* Extended Reality */}
      <Cell col={3} row={5} colSpan={3} zIndex={1}>
        <TextBlock
          fontSize={7}
          fontWeight={750}
          mono
          uppercase
          letterSpacing="0.1em"
          padding={1.5}
          align="start"
        >
          Extended Reality
        </TextBlock>
      </Cell>

      {/* VR + AR labels */}
      <Cell col={3} row={6} colSpan={3} zIndex={1}>
        <div
          className="flex items-center w-full h-full select-none"
          style={{ paddingInline: '1.5cqi', fontSize: '3cqi' }}
        >
          <span>
            <span className="font-bold text-theme-white">VR: </span>
            <span className="text-theme-white">Virtual Reality</span>
            <br />
            <span className="font-bold text-theme-white">AR: </span>
            <span className="text-theme-white">Augmented Reality</span>
          </span>
        </div>
      </Cell>
    </FaceGrid>
  );
}
