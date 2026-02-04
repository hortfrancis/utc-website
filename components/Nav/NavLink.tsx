import { clsx } from 'clsx';
import { Button } from '@/components/Button';
import { Frame } from '@/components/Frame';
import NewsIcon from '../icons/sections/newsIcon';
import WorkIcon from '../icons/sections/workIcon';
import XRIcon from '../icons/sections/xrIcon';

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  /** Determines sizing off text and icon */
  size: 'mobile' | 'desktop';
}

/** Icon cell: hard box (full border, no rounded corners). */
const iconFrameProps = {
  borderSides: ['top', 'right', 'bottom', 'left'] as const,
  roundedCorners: [] as const,
};

/** Text cell: open on left so it butts against the icon. */
const textFrameProps = {
  borderSides: ['top', 'right', 'bottom'] as const,
  roundedCorners: [] as const,
};

export default function NavLink({
  href,
  label,
  onClick,
  size,
}: NavLinkProps) {

  const outerLinkStyles = clsx(
    'flex items-center',
    size === 'mobile' && 'h-18',
    size === 'desktop' && 'h-10',
    'mt-[-2px] mb-[-2px]', // To offset the border thickness
  );

  const iconFrameStyles = clsx(
    'flex items-center justify-center box-border',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
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
  );

  const iconSize = (() => {
    if (size === 'mobile') return 56;
    if (size === 'desktop') return 28;
  })();

  const icon = (() => {
    if (href === '/work') return <WorkIcon size={iconSize} />;
    if (href === '/xr') return <XRIcon size={iconSize} />;
    if (href === '/news') return <NewsIcon size={iconSize} />;
    // _temp: About and Contact use NewsIcon until section icons are added
    return <NewsIcon size={iconSize} />;
  })();

  return (
    <Button
      href={href}
      onClick={onClick}
      className={outerLinkStyles}
    >
      <Frame {...iconFrameProps} interactive className={iconFrameStyles}>
        {icon}
      </Frame>
      <Frame {...textFrameProps} interactive className={textFrameStyles}>
        {label}
      </Frame>
    </Button>
  );
}
