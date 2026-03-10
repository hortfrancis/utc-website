import FaceGrid from './FaceGrid';
import {
  Cell,
  GridLines,
  GradientBlock,
  ImageBlock,
  TextBlock,
  IconSingle,
  StripeBars,
} from './primitives';

// Preserved source — restore this to the export to redesign and re-bake.
// Promoted from: Experiments/Cube Faces/Collaborators → story 23 "Wide Title + Icon Singles"
const CollaboratorsDesign = () => (
  <FaceGrid>

    {/* ── Block 2: cyan→orange · screen (James) ── */}
    <Cell col={4} row={1} colSpan={3} rowSpan={2}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-cyan)', position: 0 },
          { color: 'var(--theme-orange)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={4} row={1} colSpan={3} rowSpan={2}>
      <ImageBlock
        src="/images/collaborators/james-lee-burgess-portrait01.png"
        alt="James Lee Burgess"
        objectPosition="bottom"
        mixBlendMode="luminosity"
      />
    </Cell>

    {/* ── Block 3: orange→magenta · overlay (Steve) ── */}
    <Cell col={4} row={3} colSpan={2} rowSpan={1}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-orange)', position: 0 },
          { color: 'var(--theme-magenta)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={3} row={2} colSpan={2} rowSpan={3}>
      <ImageBlock
        src="/images/collaborators/steve-bjorck01.png"
        alt="Steve Bjorck"
        objectPosition="bottom"
        mixBlendMode="overlay"
      />
    </Cell>

    {/* ── Block 4: purple→cyan · hard-light (Sebastian) ── */}
    <Cell col={6} row={3} rowSpan={4}>
      <GradientBlock
        direction="to bottom"
        stops={[
          { color: 'var(--theme-purple)', position: 0 },
          { color: 'var(--theme-cyan)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={6} row={3} rowSpan={4}>
      <ImageBlock
        src="/images/collaborators/sebastian-miller01.png"
        alt="Sebastian Miller"
        objectPosition="top"
        mixBlendMode="hard-light"
      />
    </Cell>

    {/* ── Block 5: green→cyan · luminosity (Jake) ── */}
    <Cell col={1} row={4} colSpan={3} rowSpan={3}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-green)', position: 0 },
          { color: 'var(--theme-cyan)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={1} row={4} colSpan={3} rowSpan={3}>
      <ImageBlock
        src="/images/collaborators/jake-bignell01.png"
        alt="Jake Bignell"
        objectPosition="top"
        mixBlendMode="luminosity"
      />
    </Cell>

    {/* ── Block 6: magenta→orange (Tom) ── */}
    <Cell col={4} row={4} colSpan={2} rowSpan={1}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-magenta)', position: 0 },
          { color: 'var(--theme-orange)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={3} row={1} colSpan={2} rowSpan={2}>
      <ImageBlock
        src="/images/collaborators/tom-dale01.png"
        alt="Tom Dale"
        objectPosition="top"
        mixBlendMode="hard-light"
      />
    </Cell>
    <Cell col={4} row={4} colSpan={2} rowSpan={1}>
      <ImageBlock
        src="/images/collaborators/charlotte-norman01.png"
        alt="Charlotte Norman"
        objectPosition="top"
        mixBlendMode="luminosity"
      />
    </Cell>

    {/* ── Block 7: magenta→green (Hannah) ── */}
    <Cell col={4} row={5} colSpan={2} rowSpan={2}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-magenta)', position: 0 },
          { color: 'var(--theme-green)', position: 100 },
        ]}
      />
    </Cell>
    <Cell col={4} row={5} colSpan={2} rowSpan={2}>
      <ImageBlock
        src="/images/collaborators/hannah-houghton01.png"
        alt="Hannah Houghton"
        objectPosition="top"
        mixBlendMode="luminosity"
      />
    </Cell>

    {/* Stripe bar at R3/R4 boundary */}
    <Cell col={1} row={3} colSpan={6}>
      <StripeBars colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
    </Cell>

    {/* ── Block 1: magenta→purple (Alex) ── */}
    <Cell col={1} row={1} colSpan={3} rowSpan={3}>
      <GradientBlock
        direction="to right"
        stops={[
          { color: 'var(--theme-magenta)', position: 0 },
          { color: 'var(--theme-purple)', position: 100 },
        ]}
      />
    </Cell>

    {/* Vertical stripe at col 3 boundary */}
    <Cell col={3} row={1} rowSpan={6}>
      <StripeBars direction="vertical" align="end" colors={['var(--theme-orange)', 'var(--theme-magenta)', 'var(--theme-cyan)', 'var(--theme-purple)']} />
    </Cell>

    <Cell col={1} row={1} colSpan={2} rowSpan={3}>
      <ImageBlock
        src="/images/collaborators/alex-hort-francis-portrait01.png"
        alt="Alex Hort-Francis"
        objectPosition="top"
        mixBlendMode="luminosity"
        opacity={0.75}
      />
    </Cell>

    {/* Stripe bars at row boundaries */}
    <Cell col={1} row={5} colSpan={6} zIndex={1}>
      <StripeBars colors={['var(--theme-green)', 'transparent', 'var(--theme-magenta)', 'var(--theme-orange)', 'var(--theme-purple)', 'var(--theme-green)']} />
    </Cell>
    <Cell col={1} row={3} colSpan={6} zIndex={1}>
      <StripeBars thickness={6} align="end" colors={['rgba(0,0,0,0.5)', 'var(--theme-black)', 'var(--theme-black)', 'var(--theme-black)', 'var(--theme-black)', 'var(--theme-black)']} />
    </Cell>
    <Cell col={1} row={4} colSpan={6} zIndex={1}>
      <StripeBars thickness={6} colors={['var(--theme-black)', 'var(--theme-black)', 'var(--theme-black)', 'rgba(0,0,0,0.5)', 'var(--theme-black)', 'rgba(0,0,0,0.5)']} />
    </Cell>

    {/* "COLLABORATORS" title */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6} zIndex={2}>
      <TextBlock fontSize={11} color="var(--theme-white)" fontWeight={900} letterSpacing="0.05em">
        COLLABORATORS
      </TextBlock>
    </Cell>

    {/* ── IconSingles — one per collaborator block ── */}

    {/* Alex · code */}
    <Cell col={1} row={1} zIndex={3}>
      <IconSingle name="code" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>

    {/* James · blueprint */}
    <Cell col={6} row={2} zIndex={3}>
      <IconSingle name="blueprint" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>

    {/* Sebastian · browsers */}
    <Cell col={6} row={6} zIndex={3}>
      <IconSingle name="browsers" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>

    {/* Jake · virtual-reality */}
    <Cell col={1} row={6} zIndex={3}>
      <IconSingle name="virtual-reality" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>

    {/* Hannah · chat */}
    <Cell col={5} row={6} zIndex={3}>
      <IconSingle name="chat" color="var(--theme-white)" iconSize={9} opacity={1} />
    </Cell>

    <GridLines opacity={0.2} />
  </FaceGrid>
);

export default function Collaborators() {
  return <img src="/faces/collaborators.jpg" alt="" className="w-full h-full object-cover block" />;
}
