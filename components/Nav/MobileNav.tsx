'use client';

import { useState } from 'react';
import clsx from 'clsx';
import NavLink from './NavLink';
import NavButton from './NavButton';
import type { NavLinkProps } from './NavLink';

export interface MobileNavProps {
  links: NavLinkProps[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className='sm:hidden'>
      <NavButton onClick={handleButtonClick} />

      {isOpen && (
        <div className={clsx(
          'absolute top-10 right-0',
          'p-10 bg-white',
          'border border-gray-200',
        )}>
          <ul className="flex flex-col space-y-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={closeMenu}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
