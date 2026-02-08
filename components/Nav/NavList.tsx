import NavLink from './NavLink';
import type { NavLinkItem } from './navLinks';

export const NAV_LIST_DATA_TESTID = 'NavList';

export interface NavListProps {
  /** Nav items to render. */
  links: NavLinkItem[];
  /** Sizing passed through to each NavLink. */
  size: 'mobile' | 'desktop';
  /** Called when any link is clicked (e.g. close a menu). */
  onLinkClick?: () => void;
}

/**
 * Vertical list of NavLinks. Organism-level: composes NavLink molecules
 * into a column. Owns the `<nav>` landmark — NavLink itself is purely
 * presentational (a styled link with no nav semantics). No chrome or
 * background — decoration is the parent's job.
 */
export default function NavList({ links, size, onLinkClick }: NavListProps) {
  return (
    <nav data-testid={NAV_LIST_DATA_TESTID}>
      <ul className="flex flex-col items-start">
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
