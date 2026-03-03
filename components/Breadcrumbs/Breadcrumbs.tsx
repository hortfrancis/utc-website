import { Frame } from '../Frame';
import { Pressable } from '../Pressable';

export const BREADCRUMBS_DATA_TESTID = 'Breadcrumbs';

interface BreadcrumbsProps {
  items: { label: string; path?: string; current?: boolean }[];
}

/**
 * Breadcrumb navigation as a molecule: Frame (dark, top-right curve) + nav links.
 * Chevron separators, white text, cyan hover — self-contained visual block.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Frame
      borderSides={['top']}
      roundedCorners={['top-right']}
      background="bg-theme-black"
      className="w-fit py-2 pl-4 pr-5"
    >
      <nav
        data-testid={BREADCRUMBS_DATA_TESTID}
        className="flex items-center gap-2 text-xs text-theme-white opacity-90"
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {item.current ? (
              <span className="font-semibold">{item.label}</span>
            ) : (
              <Pressable
                href={item.path || '#'}
                className="font-medium hover:text-theme-cyan transition-colors focus-visible:outline-4 focus-visible:outline-theme-magenta focus-visible:outline-offset-2"
              >
                {item.label}
              </Pressable>
            )}
            {index < items.length - 1 && (
              <span className="text-theme-white/50" aria-hidden>
                ›
              </span>
            )}
          </span>
        ))}
      </nav>
    </Frame>
  );
}
