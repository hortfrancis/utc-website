'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Logo from '../Logo';
import MobileNavMenuButton from './MobileNavMenuButton';
import MobileNav from '../Nav/MobileNav';

export interface MobileHeaderProps {
  /** Initial open state for the mobile nav (e.g. for Storybook). */
  defaultOpen?: boolean;
}

export default function MobileHeader({ defaultOpen = false }: MobileHeaderProps) {

  const [open, setOpen] = useState(defaultOpen);

  const logoVerticalGradientStyles = clsx(
    'w-4',
    'border-4 border-theme-black',
    'border-r-0 border-t-0',
    'bg-gradient-to-b from-theme-magenta to-theme-green',
  );

  const menuButtonVerticalGradientStyles = clsx(
    'w-4',
    'border-4 border-theme-black',
    'border-l-0 border-t-0',
    'bg-gradient-to-b from-theme-purple to-theme-orange',
    'z-[-1]', // Keep behind button, for focus ring 
  );

  const menuUndersideBlockStyles = clsx(
    'w-28 h-5',
    'ml-auto',
    'bg-theme-black',
  );

  return (
    <div className='md:hidden'>
      <div className='flex justify-between mt-2'>

        <div className={logoVerticalGradientStyles} />
        <div className='mr-auto'>
          <Logo />
        </div>

        <MobileNavMenuButton open={open} onClick={() => setOpen(prev => !prev)} />
        <div className={menuButtonVerticalGradientStyles} />
      </div>
      <div className={menuUndersideBlockStyles} />

      {open && <MobileNav onClose={() => setOpen(false)} />}
    </div >
  );
}
