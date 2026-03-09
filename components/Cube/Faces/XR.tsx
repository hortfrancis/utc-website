import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconQuad,
} from './primitives';

// Preserved source — restore as the XR() return body to redesign and re-bake
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const XRDesign = () => (
  <div className="group w-full h-full">
    <FaceGrid className="bg-black!">
      {/* Layer 1: Grid lines */}
      <GridLines />

      {/* Layer 2: VR image — zooms on hover */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
          <ImageBlock
            src="/images/experiments/vr02.png"
            alt="VR headset"
            mask="fade-down"
          />
        </div>
      </Cell>

      {/* Layer 3: Colour gradient — cross-fades on hover */}
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <div className="w-full h-full transition-opacity duration-700 ease-out group-hover:opacity-0">
          <GradientBlock
            direction="135deg"
            stops={[
              { color: 'var(--theme-purple)', position: 0 },
              { color: 'var(--theme-cyan)', position: 40 },
              { color: 'transparent', position: 80 },
            ]}
            opacity={0.4}
          />
        </div>
      </Cell>
      <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={0}>
        <div className="w-full h-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
          <GradientBlock
            direction="180deg"
            stops={[
              { color: 'var(--theme-cyan)', position: 0 },
              { color: 'var(--theme-purple)', position: 50 },
              { color: 'transparent', position: 90 },
            ]}
            opacity={0.55}
          />
        </div>
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
          alignHorizontal="start" alignVertical="center"
        >
          Extended<br />
          Reality
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
            <span className="text-theme-white"><em>Virtual Reality</em></span>
            <br />
            <span className="font-bold text-theme-white">AR: </span>
            <span className="text-theme-white"><em>Augmented Reality</em></span>
          </span>
        </div>
      </Cell>
    </FaceGrid>
  </div>
);

export default function XR() {
  return <img src="/faces/xr.png" alt="" className="w-full h-full object-cover block" />;
}
