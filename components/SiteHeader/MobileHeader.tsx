'use client';

import clsx from 'clsx';
import { useState } from 'react';
import Logo from '../Logo';
import MobileNavMenuButton from './MobileNavMenuButton';
import MobileNav from '../Nav/MobileNav';

export default function MobileHeader() {

  const [open, setOpen] = useState(false);

  const topBorderStyles = clsx(
    'w-full',
    'absolute',
    'border-t border-8 border-theme-black',
  );

  // const logoContainerStyles = clsx(
  //   'flex items-center justify-center',
  //   'mr-auto',
  //   'w-48 h-24',
  //   'bg-theme-white',
  //   'border-4 border-theme-black',
  //   'rounded-br-3xl',
  //   'cursor-pointer',
  //   'hover:bg-theme-cyan transition-colors duration-200',
  // );

  const logoVerticalGradientStyles = clsx(
    'w-4',
    'border-4 border-theme-black',
    'border-r-0',
    'bg-gradient-to-b from-theme-magenta to-theme-green',
  );

  const menuButtonVerticalGradientStyles = clsx(
    'w-4',
    'border-4 border-theme-black',
    'border-l-0',
    'bg-gradient-to-b from-theme-purple to-theme-orange',
    'z-[-1]', // Keep behind button, for focus ring 
  );

  const menuUndersideBlockStyles = clsx(
    'w-28 h-5',
    'ml-auto',
    'bg-theme-black',
  );

  return (
    <div className='sm:hidden'>
      <div className={topBorderStyles} />
      <div className='flex justify-between'>

        <div className={logoVerticalGradientStyles} />
        <Logo />

        <MobileNavMenuButton open={open} onClick={() => setOpen(prev => !prev)} />
        <div className={menuButtonVerticalGradientStyles} />
      </div>
      <div className={menuUndersideBlockStyles} />

      {open && <MobileNav />}
    </div >
  );
}
