import { clsx } from 'clsx';
import { Pressable } from '@/components/Pressable';
import { Frame, type FrameBorderSide } from '@/components/Frame';
import Icon from '@/components/Icon/Icon';
import type { IconName } from '@/components/Icon/Icon';

export const NAV_LINK_DATA_TESTID = 'NavLink';

const DEFAULT_FRAME_BORDER_SIDES: readonly FrameBorderSide[] = ['top', 'right', 'bottom', 'left'];

export interface NavLinkProps {
  href: string;
  label: string;
  /** Section icon displayed at the start of the link. */
  icon: IconName;
  onClick?: () => void;
  /** Determines sizing of text and icon. */
  size: 'mobile' | 'desktop';
  /** Which sides the Frame border is drawn on. Omit for default (all four). Set by NavList when inPanel. */
  frameBorderSides?: readonly FrameBorderSide[];
}

/**
 * Single nav item: one Frame wrapping icon + label + arrow. Purely presentational —
 * does not render a `<nav>` landmark. Wrap in NavList (which owns `<nav>`)
 * or provide your own landmark at a higher level.
 */
export default function NavLink({
  href,
  label,
  icon,
  onClick,
  size,
  frameBorderSides = DEFAULT_FRAME_BORDER_SIDES,
}: NavLinkProps) {
  const outerLinkStyles = clsx(
    'group flex items-stretch',
    size === 'mobile' && 'h-18',
    size === 'desktop' && 'h-10',
    'mt-[-2px] mb-[-2px]', // To offset the border thickness
  );

  const frameStyles = clsx(
    'flex items-center w-full',
    'bg-theme-white border-theme-black',
    'group-hover:bg-theme-cyan transition-colors duration-200',
  );

  const iconStyles = clsx(
    'flex items-center justify-center box-border shrink-0',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
    'bg-theme-black text-theme-white',
    'group-hover:bg-theme-cyan group-hover:text-theme-black transition-colors duration-200',
  );

  const labelStyles = clsx(
    'flex items-center justify-center box-border shrink-0',
    'h-full',
    size === 'mobile' && 'min-w-18 px-6',
    size === 'desktop' && 'min-w-10 px-2',
    'font-semibold',
    size === 'mobile' && 'text-3xl',
    size === 'desktop' && 'text-sm',
    'select-none',
  );

  const arrowStyles = clsx(
    'flex items-center justify-center box-border shrink-0',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
  );

  const arrowSize = size === 'mobile' ? 24 : 16;
  const sectionIconSize = size === 'mobile' ? 32 : 20;

  return (
    <Pressable
      href={href}
      onClick={onClick}
      className={outerLinkStyles}
      data-testid={NAV_LINK_DATA_TESTID}
    >
      <Frame
        borderSides={frameBorderSides}
        roundedCorners={[]}
        className={frameStyles}
      >
        <span className={iconStyles}>
          <Icon name={icon} size={sectionIconSize} className="text-current" />
        </span>
        <span className={labelStyles}>{label}</span>
        <span className={arrowStyles}>
          <Icon name="arrow-right" size={arrowSize} className="text-current" />
        </span>
      </Frame>
    </Pressable>
  );
}
