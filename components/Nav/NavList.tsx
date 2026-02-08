import { clsx } from 'clsx';
import NavLink from './NavLink';
import type { NavLinkItem } from './primaryNavLinks';

export const NAV_LIST_DATA_TESTID = 'NavList';

export interface NavListProps {
  /** Nav items to render. */
  links: NavLinkItem[];
  /** Sizing passed through to each NavLink. */
  size: 'mobile' | 'desktop';
  /** Cross-axis alignment of the list (default: left). */
  align?: 'left' | 'right';
  /** Called when any link is clicked (e.g. close a menu). */
  onLinkClick?: () => void;
}

/**
 * Vertical list of NavLinks. Organism-level: composes NavLink molecules
 * into a column. Owns the `<nav>` landmark — NavLink itself is purely
 * presentational (a styled link with no nav semantics). No chrome or
 * background — decoration is the parent's job.
 */
export default function NavList({ links, size, align = 'left', onLinkClick }: NavListProps) {
  const listAlignment = align === 'right' ? 'items-end' : 'items-start';
  return (
    <nav data-testid={NAV_LIST_DATA_TESTID}>
      <ul className={clsx('flex flex-col', listAlignment)}>
        {links.map((link) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClick={onLinkClick}
              size={size}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
