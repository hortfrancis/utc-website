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
    'absolute top-28 right-0',
  );

  const innerContainerStyles = clsx(
    'flex',
    // 'w-[300px]',
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
                    onClick={onClose} />
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





// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import clsx from 'clsx';
// import NavLink from './NavLink';
// import NavButton from './NavButton';
// import type { NavLinkProps } from './NavLink';

// export interface MobileNavProps {
//   links: NavLinkProps[];
// }

// export default function MobileNav({ links }: MobileNavProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         closeMenu();
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   function handleButtonClick() {
//     setIsOpen((prev) => !prev);
//   }

//   function closeMenu() {
//     setIsOpen(false);
//   }

//   return (
//     <nav className='sm:hidden' ref={navRef}>
//       <NavButton onClick={handleButtonClick} />

//       {isOpen && (
//         <div className={clsx(
//           'absolute top-10 right-0',
//           'p-10 bg-white',
//           'border border-gray-200',
//         )}>
//           <ul className="flex flex-col space-y-6">
//             {links.map((link) => (
//               <NavLink
//                 key={link.href}
//                 href={link.href}
//                 label={link.label}
//                 onClick={closeMenu}
//               />
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
