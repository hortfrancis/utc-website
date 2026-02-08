import { clsx } from 'clsx';
import type { FrameBorderSide } from '@/components/Frame';
import NavLink from './NavLink';
import type { NavLinkItem } from './types';

export const NAV_LIST_DATA_TESTID = 'NavList';

/** When inPanel, borders are computed per row to avoid double strokes (panel provides outer edges). */
function getFrameBorderSidesForPanel(
  index: number,
  length: number
): FrameBorderSide[] {
  const isFirst = index === 0;
  const isLast = index === length - 1;
  const isOnly = length === 1;

  // This only works for left-aligned 
  // -- but right-aligned looks kinda shit because the icons don't align, 
  // so probably don't use that anyway.
  if (isOnly) return ['left'];
  if (isFirst) return ['bottom', 'right'];
  if (isLast) return ['top'];
  return ['top', 'right', 'bottom'];
}

export interface NavListProps {
  /** Nav items to render. */
  links: NavLinkItem[];
  /** Sizing passed through to each NavLink. */
  size: 'mobile' | 'desktop';
  /** Cross-axis alignment of the list (default: left). */
  align?: 'left' | 'right';
  /** When true, pass computed frameBorderSides to each NavLink so stacked rows share single strokes. */
  inPanel?: boolean;
  /** Called when any link is clicked (e.g. close a menu). */
  onLinkClick?: () => void;
}

/**
 * Vertical list of NavLinks. Organism-level: composes NavLink molecules
 * into a column. Owns the `<nav>` landmark — NavLink itself is purely
 * presentational (a styled link with no nav semantics). No chrome or
 * background — decoration is the parent's job.
 */
export default function NavList({
  links,
  size,
  align = 'left',
  inPanel = false,
  onLinkClick,
}: NavListProps) {
  const listAlignment = align === 'right' ? 'items-end' : 'items-start';
  return (
    <nav data-testid={NAV_LIST_DATA_TESTID}>
      <ul className={clsx('flex flex-col', listAlignment)}>
        {links.map((link, index) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClick={onLinkClick}
              size={size}
              frameBorderSides={
                inPanel ? getFrameBorderSidesForPanel(index, links.length) : undefined
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
