import FaceGrid from './FaceGrid';
import { Cell, TextBlock, StripeBars, GridLines, IconQuad } from './primitives';

export default function News() {
  return (
    <FaceGrid>
      <GridLines color="var(--theme-cyan)" opacity={0.2} />
      {/* Top-left icons */}
      <Cell col={1} row={1}>
        <IconQuad
          icons={{ tl: 'newspaper', tr: 'envelope', bl: 'video' }}
          showDivider={false}
          color="var(--theme-cyan)"
        />
      </Cell>
      {/* Top-right labels */}
      <Cell col={5} row={1} colSpan={2}>
        <div className="flex flex-col items-end justify-start w-full h-full select-none" style={{ padding: '2cqi' }}>
          <span className="text-theme-cyan/50 font-bold tracking-wider" style={{ fontSize: '5cqi' }}>Newsletter</span>
          <span className="text-theme-orange/50 font-bold tracking-wider mt-0.5" style={{ fontSize: '5cqi' }}>Videos</span>
          <span className="text-theme-green font-bold tracking-wider mt-0.5" style={{ fontSize: '5cqi' }}>Stories</span>
        </div>
      </Cell>

      {/* Hero type — bottom-left */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2}>
        <TextBlock
          fontSize={16}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          align="start"
          padding={2}
        >
          NEWS
        </TextBlock>
      </Cell>

      <Cell col={1} row={5} colSpan={6} zIndex={5}>
        <StripeBars colors={['var(--theme-green)', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-cyan)', 'var(--theme-orange)']} verticalAlign="center" />
      </Cell>
    </FaceGrid>
  );
}
