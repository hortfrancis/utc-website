import clsx from 'clsx';
import NavLink from './NavLink';
import type { NavLinkItem } from './navLinks';

export const MOBILE_NAV_PANEL_DATA_TESTID = 'MobileNavPanel';

export interface MobileNavPanelProps {
  /** Nav items to display in the menu */
  links: NavLinkItem[];
  /** Called when a link is clicked (e.g. close the menu after navigation) */
  onLinkClick?: () => void;
  /** Optional className for the root container (e.g. for positioning in app) */
  className?: string;
}

/**
 * Presentational mobile nav menu panel: gradient box, link list, underside bar.
 * No positioning—placement is the parent’s job (e.g. MobileNav uses absolute top-right).
 * Use in isolation in Storybook, or wrap with MobileNav for click-outside-to-close.
 */
export default function MobileNavPanel({
  links,
  onLinkClick,
  className,
}: MobileNavPanelProps) {
  const outerContainerStyles = clsx(
    'flex flex-col',
    className
  );

  const innerContainerStyles = clsx('flex');

  const heavyEdgeStyles = clsx(
    'w-4',
    'bg-theme-black',
    'rounded-tl-3xl',
  );

  const gradientBackgroundStyles = clsx(
    'w-full',
    'bg-gradient-to-b from-theme-purple to-theme-orange',
  );

  const listStyles = clsx(
    'flex flex-col items-start',
    'border-4 border-theme-black',
  );

  const undersideGradientStyles = clsx(
    'h-4',
    'bg-gradient-to-r from-theme-magenta to-theme-green',
    'border-4 border-theme-black border-t-0',
    'rounded-bl-3xl',
  );

  return (
    <div data-testid={MOBILE_NAV_PANEL_DATA_TESTID} className={outerContainerStyles}>
      <div className={innerContainerStyles}>
        <div className={heavyEdgeStyles} />
        <div className={gradientBackgroundStyles}>
          <nav>
            <ul className={listStyles}>
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={onLinkClick}
                    size="mobile"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={undersideGradientStyles} />
    </div>
  );
}
