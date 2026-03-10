import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  ColorBlock,
  ImageBlock,
  TextBlock,
  IconSingle,
} from './primitives';

// Preserved source — restore this to FaceGrid return to redesign and re-bake
// Promoted from Experiments/Cube Faces/AI story 3 – Neon blobs + AI copy
const AIDesign = () => (
  <FaceGrid className="bg-theme-black!">
    <GridLines opacity={0.08} />

    {/* Row 1 — opacity=1 (full), each theme colour */}
    <Cell col={1} row={1}><ColorBlock color="var(--theme-cyan)" /></Cell>
    <Cell col={2} row={1}><ColorBlock color="var(--theme-magenta)" /></Cell>
    <Cell col={3} row={1}><ColorBlock color="var(--theme-orange)" /></Cell>
    <Cell col={4} row={1}><ColorBlock color="var(--theme-green)" /></Cell>
    <Cell col={5} row={1}><ColorBlock color="var(--theme-purple)" /></Cell>
    <Cell col={6} row={1}><ColorBlock color="rgba(255, 255, 255, 0.8)" /></Cell>

    {/* Row 2 — opacity=0.6 */}
    <Cell col={1} row={2}><ColorBlock color="var(--theme-cyan)" opacity={0.6} /></Cell>
    <Cell col={2} row={2}><ColorBlock color="var(--theme-magenta)" opacity={0.6} /></Cell>
    <Cell col={3} row={2}><ColorBlock color="var(--theme-orange)" opacity={0.6} /></Cell>
    <Cell col={4} row={2}><ColorBlock color="var(--theme-green)" opacity={0.6} /></Cell>
    <Cell col={5} row={2}><ColorBlock color="var(--theme-purple)" opacity={0.6} /></Cell>
    <Cell col={6} row={2}><ColorBlock color="var(--theme-white)" opacity={0.6} /></Cell>

    {/* Row 3 — opacity=0.25 */}
    <Cell col={1} row={3}><ColorBlock color="var(--theme-cyan)" opacity={0.25} /></Cell>
    <Cell col={2} row={3}><ColorBlock color="var(--theme-magenta)" opacity={0.25} /></Cell>
    <Cell col={3} row={3}><ColorBlock color="var(--theme-orange)" opacity={0.25} /></Cell>
    <Cell col={4} row={3}><ColorBlock color="var(--theme-green)" opacity={0.25} /></Cell>
    <Cell col={5} row={3}><ColorBlock color="var(--theme-purple)" opacity={0.25} /></Cell>
    <Cell col={6} row={3}><ColorBlock color="var(--theme-white)" opacity={0.25} /></Cell>

    {/* Rows 4–5 — spanning cells at low opacity (background use-case) */}
    <Cell col={1} row={4} colSpan={3} rowSpan={2}>
      <ColorBlock color="var(--theme-cyan)" opacity={0.12} />
    </Cell>
    <Cell col={4} row={4} colSpan={3} rowSpan={2}>
      <ColorBlock color="var(--theme-magenta)" opacity={0.12} />
    </Cell>

    {/* Full-face image overlay — no zIndex so mix-blend-mode can blend with cells below */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6}>
      <ImageBlock
        src="/faces/neon-blobs-01.webp"
        alt="Neon blobs"
        mixBlendMode="screen"
        opacity={0.7}
      />
    </Cell>

    {/* AI copy — big title + smaller lines */}
    <Cell col={1} row={2} colSpan={2} rowSpan={2} zIndex={2}>
      <TextBlock
        fontSize={20}
        color="var(--theme-white)"
        alignHorizontal="end"
        alignVertical="center"
        padding={3}
        fontWeight={800}
        mono
        letterSpacing="0.025em"
      >
        AI
      </TextBlock>
    </Cell>

    <Cell col={3} row={2} colSpan={4} rowSpan={2} zIndex={2}>
      <TextBlock
        fontSize={6.3}
        color="var(--theme-white)"
        alignHorizontal="start"
        alignVertical="center"
        padding={2}
        fontWeight={600}
        lineHeight={1.5}
      >
        Artificial<br />Intelligence
      </TextBlock>
    </Cell>

    <Cell col={2} row={4} colSpan={5} zIndex={2}>
      <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
        <em>Large language models</em>
      </TextBlock>
    </Cell>
    <Cell col={2} row={5} colSpan={5} zIndex={2}>
      <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
        <em>Distributed agentic web</em>
      </TextBlock>
    </Cell>
    <Cell col={2} row={6} colSpan={5} zIndex={2}>
      <TextBlock fontSize={4} fontWeight={400} alignHorizontal="end" padding={6} letterSpacing="0.005em">
        <em>Autonomous agentic capability</em>
      </TextBlock>
    </Cell>

    <Cell col={1} row={4}>
      <IconSingle name="network" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>
    <Cell col={1} row={5}>
      <IconSingle name="head-circuit" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>
    <Cell col={2} row={4}>
      <IconSingle name="fediverse-logo" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>
  </FaceGrid>
);

export default function AI() {
  return <img src="/faces/ai.jpg" alt="" className="w-full h-full object-cover block" />;
}
