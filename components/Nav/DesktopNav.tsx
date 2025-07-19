import NavLink from './NavLink';
import type { NavLinkProps } from './NavLink';

interface DesktopNavProps {
  links: NavLinkProps[];
}

export default function DesktopNav({ links }: DesktopNavProps) {
  return (
    <nav className='hidden sm:block'>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </nav>
  );
}
