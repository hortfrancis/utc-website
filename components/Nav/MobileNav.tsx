'use client';

import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import NavLink from './NavLink';
import NavButton from './NavButton';
import type { NavLinkProps } from './NavLink';

export interface MobileNavProps {
  links: NavLinkProps[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  function handleButtonClick() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className='sm:hidden' ref={navRef}>
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
