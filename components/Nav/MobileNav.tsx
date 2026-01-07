'use client';

import clsx from 'clsx';
import NavLink from './NavLink';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/xr', label: 'XR' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {

  const outerContainerStyles = clsx(
    'flex flex-col',
    'absolute top-30 right-0',
  );

  const innerContainerStyles = clsx(
    'flex',
  );

  const heavyEdgeStyles = clsx(
    'w-4',
    'bg-theme-black',
    'rounded-tl-3xl',
  );

  const gradientBackgroundStyles = clsx(
    'w-full',
    'bg-gradient-to-b from-theme-purple to-theme-orange'
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
    <div className={outerContainerStyles}>
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
                    onClick={onClose}
                    size='mobile'
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
