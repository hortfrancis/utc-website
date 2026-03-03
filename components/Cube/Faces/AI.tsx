import FaceGrid from './FaceGrid';
import { Cell, TextBlock, StripeBars, GridLines, IconSingle } from './primitives';

export default function AI() {
  return (
    <FaceGrid>
      <GridLines color="var(--theme-cyan)" opacity={0.2} />

      {/* Top-left icon */}
      <Cell col={1} row={1} colSpan={2} rowSpan={2}>
        <IconSingle
          name="robot"
          color="var(--theme-cyan)"
          iconSize={20}
        />
      </Cell>

      {/* Hero type — bottom-left */}
      <Cell col={1} row={4} colSpan={5} rowSpan={2}>
        <TextBlock
          fontSize={16}
          color="var(--theme-magenta)"
          fontWeight={900}
          letterSpacing="-0.04em"
          alignHorizontal="start" alignVertical="start"
          padding={2}
        >
          AI
        </TextBlock>
      </Cell>

      <Cell col={1} row={5} colSpan={6} zIndex={5}>
        <StripeBars colors={['var(--theme-cyan)', 'var(--theme-magenta)', 'var(--theme-purple)', 'var(--theme-green)', 'var(--theme-orange)', 'var(--theme-cyan)']} verticalAlign="center" />
      </Cell>
    </FaceGrid>
  );
}
