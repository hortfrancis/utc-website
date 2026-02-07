'use client';

import Overlay from '../Overlay';
import { Frame } from '../Frame';
import Accent from '../Accent';
import Heading from '../Heading';
import { type FacePosition } from '../Cube/Cube';

export const SECTION_DETAIL_DATA_TESTID = 'SectionDetail';

/** Content for each site section shown in the detail overlay. */
interface SectionContent {
  title: string;
  description: string;
  href: string | null;
}

const SECTION_CONTENT: Record<FacePosition, SectionContent> = {
  top: {
    title: 'XR: Extended Reality',
    description:
      'Augmented, virtual, and mixed reality experiences. We design and build immersive technology that bridges the physical and digital worlds.',
    href: '/xr',
  },
  front: {
    title: 'Work',
    description:
      'Our portfolio of projects — from interactive installations to spatial computing applications.',
    href: '/work',
  },
  left: {
    title: 'Vision',
    description:
      'Our mission, team, and the ideas that drive us. Technology should serve people, not the other way around.',
    href: '/about',
  },
  back: {
    title: 'News',
    description:
      'Updates, insights, and weekly video content. Stay in the loop with what we\'re building and thinking about.',
    href: '/news',
  },
  right: {
    title: 'Showcase',
    description:
      'Featured projects and deep dives. A closer look at the work we\'re most proud of.',
    href: null, // TBD
  },
  bottom: {
    title: 'Hamster',
    description: 'You found the easter egg. Nice.',
    href: null,
  },
};

export interface SectionDetailProps {
  /** Which section to display. `null` = closed. */
  face: FacePosition | null;
  /** Called when the user wants to close the overlay. */
  onClose: () => void;
}

/**
 * Detail overlay shown when a cube face is tapped on the homepage.
 *
 * Renders section-specific content (title, description, optional CTA)
 * inside an Overlay with a Frame container and Accent bar.
 */
export default function SectionDetail({ face, onClose }: SectionDetailProps) {
  const open = face !== null;
  const content = face ? SECTION_CONTENT[face] : null;

  return (
    <Overlay open={open} onClose={onClose}>
      {content && (
        <div
          data-testid={SECTION_DETAIL_DATA_TESTID}
          className="flex max-w-lg"
        >
          {/* Accent bar */}
          <Accent
            direction="vertical"
            gradient="magenta-green"
            borderSides={['top', 'bottom', 'left']}
          />

          {/* Content frame */}
          <Frame
            borderSides={['top', 'right', 'bottom']}
            roundedCorners={['top-right', 'bottom-right']}
            className="bg-theme-white p-6 sm:p-8 flex-1"
          >
            <Heading level={2}>{content.title}</Heading>
            <p className="text-theme-black/70 mb-6 leading-relaxed">
              {content.description}
            </p>

            <div className="flex gap-3">
              {content.href && (
                <a
                  href={content.href}
                  className="inline-block px-5 py-2 bg-theme-black text-theme-white font-bold border-4 border-theme-black rounded-br-xl hover:bg-theme-cyan hover:text-theme-black transition-colors duration-200"
                >
                  Explore
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="inline-block px-5 py-2 font-bold border-4 border-theme-black text-theme-black rounded-bl-xl hover:bg-theme-black hover:text-theme-white transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </Frame>
        </div>
      )}
    </Overlay>
  );
}
