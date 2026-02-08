import { clsx } from 'clsx';
import { Pressable } from '@/components/Pressable';
import { Frame } from '@/components/Frame';
import Icon from '@/components/Icon/Icon';
import type { IconName } from '@/components/Icon/Icon';

export const NAV_LINK_DATA_TESTID = 'NavLink';

export interface NavLinkProps {
  href: string;
  label: string;
  /** Section icon displayed in the leading cell. */
  icon: IconName;
  onClick?: () => void;
  /** Determines sizing of text and icon. */
  size: 'mobile' | 'desktop';
}

/** Icon cell: hard box (full border, no rounded corners). */
const iconFrameProps = {
  borderSides: ['top', 'right', 'bottom', 'left'] as const,
  roundedCorners: [] as const,
};

/** Text cell: open on left and right so it butts against icon and arrow. */
const textFrameProps = {
  borderSides: ['top', 'bottom'] as const,
  roundedCorners: [] as const,
};

/** Arrow cell: open on left so it butts against the text. */
const arrowFrameProps = {
  borderSides: ['top', 'right', 'bottom'] as const,
  roundedCorners: [] as const,
};

/**
 * Single nav item: icon cell + label cell + arrow cell. Purely presentational —
 * does not render a `<nav>` landmark. Wrap in NavList (which owns `<nav>`)
 * or provide your own landmark at a higher level.
 */
export default function NavLink({
  href,
  label,
  icon,
  onClick,
  size,
}: NavLinkProps) {

  const outerLinkStyles = clsx(
    'group flex items-center',
    size === 'mobile' && 'h-18',
    size === 'desktop' && 'h-10',
    'mt-[-2px] mb-[-2px]', // To offset the border thickness
  );

  const iconFrameStyles = clsx(
    'flex items-center justify-center box-border',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
    'bg-theme-black text-theme-white',
    'group-hover:bg-theme-cyan group-hover:text-theme-black transition-colors duration-200',
  );

  const textFrameStyles = clsx(
    'flex items-center justify-center box-border shrink-0',
    'h-full',
    size === 'mobile' && 'min-w-18 px-6',
    size === 'desktop' && 'min-w-10 px-2',
    'font-semibold',
    size === 'mobile' && 'text-3xl',
    size === 'desktop' && 'text-sm',
    'select-none',
    'group-hover:bg-theme-cyan transition-colors duration-200',
  );

  const arrowFrameStyles = clsx(
    'flex items-center justify-center box-border',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
    'group-hover:bg-theme-cyan transition-colors duration-200',
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
      <Frame {...iconFrameProps} className={iconFrameStyles}>
        <Icon name={icon} size={sectionIconSize} className="text-current" />
      </Frame>
      <Frame {...textFrameProps} className={textFrameStyles}>
        {label}
      </Frame>
      <Frame {...arrowFrameProps} className={arrowFrameStyles}>
        <Icon name="arrow-right" size={arrowSize} className="text-current" />
      </Frame>
    </Pressable>
  );
}
