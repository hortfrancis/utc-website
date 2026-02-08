import { clsx } from 'clsx';
import NavLink from './NavLink';
import { primaryNavLinks } from './primaryNavLinks';

export const DESKTOP_NAV_DATA_TESTID = 'DesktopNav';

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
    <nav data-testid={DESKTOP_NAV_DATA_TESTID} className='hidden sm:block'>
      <ul className={listStyles}>
        {primaryNavLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              label={link.label}
              icon={link.icon}
              size='desktop'
            />
          </li>
        ))}
      </ul>
      <div className={undersideGradientStyles} />
    </nav>
  );
}
