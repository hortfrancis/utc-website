'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logomark from './Logomark';
import Logotype from './Logotype';

interface LogoProps {
  cubeSize?: number;
  type?: 'logomark' | 'logotype' | 'full';
  lockup?: 'horizontal' | 'vertical';
  textLayout?: 'single-line' | 'stacked';
}

export default function Logo({
  cubeSize = 100, // 100px by default
  // type = 'full', // logomark & logotype by default
  lockup = 'horizontal', // 'Lockup' = the spatial arrangement of logomark & logotype
  textLayout = 'stacked', // One line per word 
}: LogoProps) {

  const [spin, setSpin] = useState(false);

  return (
    <Link
      href="/"
      className={`flex items-center ${lockup === 'horizontal' ? 'flex-row' : 'flex-col'} gap-6 p-2`}
      onMouseEnter={() => setSpin(true)}
      onMouseLeave={() => setSpin(false)}
    >
      <Logomark cubeSize={cubeSize} spin={spin} />
      <Logotype textLayout={textLayout} />
    </Link>
  );
}
