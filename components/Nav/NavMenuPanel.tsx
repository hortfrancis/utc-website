import clsx from 'clsx';
import { Frame } from '@/components/Frame';
import NavList from './NavList';
import type { NavLinkItem } from './primaryNavLinks';

export const NAV_MENU_PANEL_DATA_TESTID = 'NavMenuPanel';

export interface NavMenuPanelProps {
  /** Nav items to render. */
  links: NavLinkItem[];
  /** Sizing passed through to each NavLink. */
  size: 'mobile' | 'desktop';
  /** Cross-axis alignment of the list (default: left). */
  align?: 'left' | 'right';
  /** Called when any link is clicked (e.g. close a menu). */
  onLinkClick?: () => void;
  /** Optional class for the Frame. */
  className?: string;
}

/**
 * Presentational panel: Frame + NavList. No open/close or trigger — use inside
 * NavMenu (or standalone in stories) for the dropdown content.
 */
export default function NavMenuPanel({
  links,
  size,
  align = 'left',
  onLinkClick,
  className,
}: NavMenuPanelProps) {
  return (
    <div data-testid={NAV_MENU_PANEL_DATA_TESTID}>
      <Frame
        borderSides={['top', 'right', 'bottom', 'left']}
        roundedCorners={['bottom-left']}
        className={clsx('bg-theme-white border-theme-black overflow-hidden', className)}
      >
        <NavList links={links} size={size} align={align} onLinkClick={onLinkClick} />
      </Frame>
    </div>
  );
}
