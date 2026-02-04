'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Logo from '../Logo';
import Accent from '../Accent';
import MobileNavMenuButton from './MobileNavMenuButton';
import MobileNav from '../Nav/MobileNav';

export interface MobileHeaderProps {
  /** Initial open state for the mobile nav (e.g. for Storybook). */
  defaultOpen?: boolean;
}

export default function MobileHeader({ defaultOpen = false }: MobileHeaderProps) {

  const [open, setOpen] = useState(defaultOpen);

  const menuUndersideBlockStyles = clsx(
    'w-28 h-5',
    'ml-auto',
    'bg-theme-black',
  );

  return (
    <div className='md:hidden'>
      <div className='flex justify-between mt-2'>

        <Accent
          direction="vertical"
          gradient="magenta-green"
          borderSides={['left', 'bottom']}
        />
        <div className='mr-auto'>
          <Logo />
        </div>

        <MobileNavMenuButton open={open} onClick={() => setOpen(prev => !prev)} />
        <Accent
          direction="vertical"
          gradient="purple-orange"
          borderSides={['right', 'bottom']}
          className="z-[-1]"
        />
      </div>
      <div className={menuUndersideBlockStyles} />

      {open && <MobileNav onClose={() => setOpen(false)} />}
    </div >
  );
}
