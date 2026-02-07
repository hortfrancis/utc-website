'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Pressable } from '../Pressable';
import { Frame } from '../Frame';
import Logo from '../Logo';
import Accent from '../Accent';
import MobileNavMenuButton from './MobileNavMenuButton';
import MobileNav from '../Nav/MobileNav';

export const MOBILE_HEADER_DATA_TESTID = 'MobileHeader';

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
    <div data-testid={MOBILE_HEADER_DATA_TESTID} className='md:hidden'>
      <div className='flex justify-between mt-2'>

        <div className='mr-auto'>
          <Pressable href="/" aria-label="Urban Tech Creative – home" className="group flex items-stretch">
            <Accent
              direction="vertical"
              gradient="magenta-green"
              borderSides={['top', 'bottom', 'left']}
            />
            <Frame
              borderSides={['top', 'right', 'bottom', 'left']}
              roundedCorners={['bottom-right']}
              className="flex items-center justify-center gap-6 w-48 h-24 group-hover:bg-theme-cyan transition-colors duration-200"
            >
              <Logo />
            </Frame>
          </Pressable>
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
