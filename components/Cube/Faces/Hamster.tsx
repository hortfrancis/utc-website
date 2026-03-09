import FaceGrid from './FaceGrid';
import { Cell, GridLines, ImageBlock, TextBlock, StripeBars, VerticalTextBlock } from './primitives';

// Preserved source — restore as the Hamster() return body to redesign and re-bake
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HamsterDesign = () => (
  <FaceGrid className="bg-theme-black!">
    {/* Full bleed image, slightly faded */}
    <Cell col={2} row={1} colSpan={5} rowSpan={6}>
      <ImageBlock src="/images/cube/haify-hamster.jpeg" alt="Haify the Hamster" mask="fade-left" opacity={0.85} />
    </Cell>

    {/* Cyan vertical label running the full left column */}
    <Cell col={1} row={1} rowSpan={6} zIndex={3}>
      <div className="w-full h-full bg-theme-cyan" />
    </Cell>
    <Cell col={1} row={1} rowSpan={6} zIndex={4}>
      <VerticalTextBlock fontSize={5} direction="up" mono uppercase letterSpacing="0.2em" color="var(--theme-black)">
        HAIFY THE HAMSTER
      </VerticalTextBlock>
    </Cell>

    {/* Name over image, bottom right */}
    <Cell col={3} row={5} colSpan={4} rowSpan={2} zIndex={3}>
      <TextBlock fontSize={16} fontWeight={900} alignHorizontal="end" alignVertical="end" padding={2}>
        Haify
      </TextBlock>
    </Cell>

    <GridLines opacity={0.06} />
    <Cell col={1} row={1} colSpan={6} zIndex={5}>
      <StripeBars />
    </Cell>
  </FaceGrid>
);

export default function Hamster() {
  return <img src="/faces/hamster.png" alt="" className="w-full h-full object-cover block" />;
}
