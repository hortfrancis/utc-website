'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import Logomark from './Logomark';
import Logotype from './Logotype';

interface LogoProps {
  /** Size of the cube in pixels */
  cubeSize?: number;
  type?: 'logomark' | 'logotype' | 'full';
  lockup?: 'horizontal' | 'vertical';
  textLayout?: 'single-line' | 'stacked';
}

export default function Logo({
  cubeSize = 36, // 36px by default
  // type = 'full', // logomark & logotype by default
  lockup = 'horizontal', // 'Lockup' = the spatial arrangement of logomark & logotype
  textLayout = 'stacked', // One line per word 
}: LogoProps) {

  const [spin, setSpin] = useState(false);

  const linkContainerStyles = clsx(
    'flex items-center justify-center',
    lockup === 'horizontal' ? 'flex-row' : 'flex-col',
    'gap-6',
    'w-48 h-24',
    'mr-auto',
    'bg-theme-white',
    'border-4 border-theme-black',
    'rounded-br-3xl',
    'cursor-pointer',
    'hover:bg-theme-cyan transition-colors duration-200',
    'focus:outline-none focus:ring-4 focus:ring-theme-orange',
  );

  return (
    <Link
      href="/"
      className={linkContainerStyles}
      onMouseEnter={() => setSpin(true)}
      onMouseLeave={() => setSpin(false)}
    >
      <Logomark cubeSize={cubeSize} spin={spin} />
      <Logotype textLayout={textLayout} />
    </Link>
  );
}
