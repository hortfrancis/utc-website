import { clsx } from 'clsx';
import NavLink from './NavLink';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/xr', label: 'XR' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function DesktopNav() {

  const listStyles = clsx(
    'flex gap-1',
    'border-l-8 border-r-6 border-theme-black',
    'bg-theme-black',
  );

  const undersideGradientStyles = clsx(
    'h-4',
    'bg-gradient-to-r from-theme-orange to-theme-purple',
    'border-4 border-theme-black border-l-0',
    'rounded-br-3xl',
  );

  return (
    <nav className='hidden sm:block'>
      <ul className={listStyles}>
        {links.map((link) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              label={link.label}
              size='desktop'
            />
          </li>
        ))}
      </ul>
      <div className={undersideGradientStyles} />
    </nav>
  );
}
