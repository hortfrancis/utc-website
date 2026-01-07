import Link from 'next/link';
import { clsx } from 'clsx';
import NewsIcon from '../icons/sections/newsIcon';

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
    'flex items-center justify-center',
    'h-full',
    size === 'mobile' && 'w-18',
    size === 'desktop' && 'w-10',
    'bg-theme-white',
    'border-4 border-theme-black',
  );

  const textContainerStyles = clsx(
    'flex items-center justify-center',
    'h-full',
    size === 'mobile' && 'px-6',
    size === 'desktop' && 'px-2',
    'bg-theme-white',
    'font-semibold',
    size === 'mobile' && 'text-3xl',
    size === 'desktop' && 'text-sm',
    'border-4 border-theme-black border-l-0',
    'select-none',
  );

  const iconSize = (() => {
    if (size === 'mobile') return 40;
    if (size === 'desktop') return 16;
  })();

  const icon = (() => {
    // if (href === '/news') return <NewsIcon />;
    // return null;

    // _temp
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
