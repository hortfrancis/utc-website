import FaceGrid from './FaceGrid';
import {
  Cell,
  ColorBlock,
  GradientBlock,
  GridLines,
  IconSingle,
  ImageBlock,
  StripeBars,
  TextBlock,
} from './primitives';

// Preserved source — restore this as the Showcase() return to redesign and re-bake
const ShowcaseDesign = () => (
  <FaceGrid className="bg-theme-black!">
    <GridLines opacity={0.08} />

    {/* Full-face image — panned to the left of the artwork */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6}>
      <ImageBlock
        src="/images/work/dock-stories-02.webp"
        alt="Dock Stories LED installation"
        objectPosition="left center"
      />
    </Cell>

    {/* Subtle gradient tint over the whole face — unifies the palette */}
    <Cell col={1} row={1} colSpan={6} rowSpan={6}>
      <GradientBlock
        direction="to bottom right"
        stops={[
          { color: 'var(--theme-purple)', position: 0 },
          { color: 'var(--theme-cyan)', position: 100 },
        ]}
        opacity={0.2}
      />
    </Cell>

    {/* Bottom gradient for text legibility */}
    <Cell col={1} row={3} colSpan={6} rowSpan={4}>
      <GradientBlock
        direction="to top"
        stops={[
          { color: 'var(--theme-black)', position: 0 },
          { color: 'transparent', position: 100 },
        ]}
        opacity={0.9}
      />
    </Cell>

    {/* Colour accent column — top-right */}
    <Cell col={6} row={1}>
      <ColorBlock color="var(--theme-cyan)" opacity={0.9} />
    </Cell>
    <Cell col={6} row={2}>
      <ColorBlock color="var(--theme-orange)" opacity={0.9} />
    </Cell>
    <Cell col={6} row={3}>
      <ColorBlock color="var(--theme-green)" opacity={0.9} />
    </Cell>

    {/* Icons over colour column */}
    <Cell col={6} row={1} zIndex={2}>
      <IconSingle name="cube" color="var(--theme-black)" opacity={1} iconSize={8} />
    </Cell>
    <Cell col={6} row={2} zIndex={2}>
      <IconSingle name="anchor" color="var(--theme-black)" opacity={1} iconSize={8} />
    </Cell>
    <Cell col={6} row={3} zIndex={2}>
      <IconSingle name="footprints" color="var(--theme-black)" opacity={1} iconSize={8} />
    </Cell>

    {/* Stripe bar divider — R5 top edge */}
    <Cell col={1} row={5} colSpan={6} zIndex={1}>
      <StripeBars
        colors={[
          'var(--theme-cyan)',
          'var(--theme-magenta)',
          'var(--theme-orange)',
          'var(--theme-purple)',
          'var(--theme-green)',
          'var(--theme-cyan)',
        ]}
      />
    </Cell>

    {/* "Showcase" eyebrow — row 5 */}
    <Cell col={1} row={5} colSpan={6} zIndex={2}>
      <TextBlock
        fontSize={7}
        color="var(--theme-cyan)"
        fontWeight={700}
        mono
        uppercase
        letterSpacing="0.1em"
        alignHorizontal="start"
        alignVertical="end"
        padding={3.5}
      >
        Showcase
      </TextBlock>
    </Cell>

    {/* "Dock Stories" hero label — rows 5–6 */}
    <Cell col={1} row={5} colSpan={6} rowSpan={2} zIndex={2}>
      <TextBlock
        fontSize={13}
        color="var(--theme-white)"
        fontWeight={900}
        letterSpacing="-0.025em"
        alignHorizontal="start"
        alignVertical="end"
        padding={3.5}
      >
        Dock Stories
      </TextBlock>
    </Cell>
  </FaceGrid>
);

export default function Showcase() {
  return <img src="/faces/showcase.jpg" alt="" className="w-full h-full object-cover block" />;
}

export { ShowcaseDesign };
