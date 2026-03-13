'use client';

import Overlay from '../Overlay';
import { Frame } from '../Frame';
import { Button } from '../Button';
import Accent from '../Accent';
import Heading from '../Heading';
import { type FacePosition } from '../Cube/Cube';

export const SECTION_DETAIL_DATA_TESTID = 'SectionDetail';

/** Content for each site section shown in the detail overlay. */
interface SectionContent {
  title: string;
  description: string | string[];
  href: string | null;
  /** Override the default "Explore" button label. */
  cta?: string;
  /** Hide the Close button, leaving only the primary CTA. */
  hideClose?: boolean;
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
    title: 'Collaborators',
    description:
      'The people and partners who shape our work. Freelancers, creative collaborators, and organisations we build with.',
    href: '/about',
  },
  back: {
    title: 'AI',
    description:
      'Artificial intelligence tools and integrations. Content coming soon.',
    href: '/ai',
  },
  right: {
    title: 'Showcase',
    description:
      'Featured projects and deep dives. A closer look at the work we\'re most proud of.',
    href: '/work/dock-stories',
  },
  bottom: {
    title: 'Haify the Hamster',
    description: [
      'You found the easter egg!',
      'Help Haify the AI Hamster navigate the digital realm — avoid Pac-Man, Ghosts, Light Cycles and more!',
    ],
    href: 'https://hoppinghaify.lovable.app/',
    cta: 'Play',
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
            {(Array.isArray(content.description)
              ? content.description
              : [content.description]
            ).map((text, i) => (
              <p key={i} className="text-theme-black/70 mb-6 leading-relaxed">
                {text}
              </p>
            ))}

            <div className="flex gap-3 justify-end">
              {!content.hideClose && (
                <Button
                  variant="secondary"
                  label="Close"
                  onClick={onClose}
                  aria-label="Close overlay"
                />
              )}
              {content.href && (
                <Button
                  variant="primary"
                  label={content.cta ?? 'Explore'}
                  icon="arrow-right"
                  href={content.href}
                  aria-label={`${content.cta ?? 'Explore'} ${content.title}`}
                />
              )}
            </div>
          </Frame>
        </div>
      )}
    </Overlay>
  );
}
