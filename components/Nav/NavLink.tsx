import Link from 'next/link';
import { clsx } from 'clsx';
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

  const iconContainerStyles = clsx(
    'flex items-center justify-center box-border',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
    'bg-theme-white',
    'border-4 border-theme-black',
  );

  const textContainerStyles = clsx(
    'flex items-center justify-center box-border shrink-0',
    'h-full',
    size === 'mobile' && 'min-w-18 px-6',
    size === 'desktop' && 'min-w-10 px-2',
    'bg-theme-white',
    'font-semibold',
    size === 'mobile' && 'text-3xl',
    size === 'desktop' && 'text-sm',
    'border-4 border-theme-black border-l-0',
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
    <Link
      href={href}
      onClick={onClick}
      className={outerLinkStyles}
    >
      <div className={iconContainerStyles}>
        {icon}
      </div>
      <div className={textContainerStyles}>
        {label}
      </div>
    </Link>
  );
}
