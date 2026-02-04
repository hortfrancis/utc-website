'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import { Frame } from '@/components/Frame';
import Logomark from './Logomark';
import Logotype from './Logotype';

interface LogoProps {
  /** Size of the cube in pixels */
  cubeSize?: number;
  type?: 'logomark' | 'logotype' | 'full';
  lockup?: 'horizontal' | 'vertical';
  textLayout?: 'single-line' | 'stacked';
  /** When false, the Frame (curved border) is not rendered — e.g. for Storybook to inspect the logo on its own. */
  showFrame?: boolean;
  /** When false, the logomark does not spin on hover. */
  spinOnHover?: boolean;
}

/** Default lockup frame: three sides, one rounded corner (stamp/badge). */
const defaultFrameProps = {
  borderSides: ['right', 'bottom', 'left'] as const,
  roundedCorners: ['bottom-right'] as const,
};

export default function Logo({
  cubeSize = 36, // 36px by default
  type = 'full', // logomark, logotype, or full
  lockup = 'horizontal', // 'Lockup' = the spatial arrangement of logomark & logotype
  textLayout = 'stacked', // One line per word
  showFrame = true,
  spinOnHover = true,
}: LogoProps) {
  const [spin, setSpin] = useState(false);
  const effectiveSpin = spinOnHover && spin;

  const linkStyles = clsx(
    'group flex items-center justify-center',
    'cursor-pointer',
    'focus:outline-none focus:ring-4 focus:ring-theme-orange',
  );

  const innerStyles = clsx(
    'flex items-center justify-center',
    lockup === 'horizontal' ? 'flex-row' : 'flex-col',
    'gap-6',
    'w-48 h-24',
    'bg-theme-white',
    'transition-colors duration-200 group-hover:bg-theme-cyan',
  );

  const content = (
    <>
      {(type === 'logomark' || type === 'full') && (
        <Logomark cubeSize={cubeSize} spin={effectiveSpin} />
      )}
      {(type === 'logotype' || type === 'full') && (
        <Logotype textLayout={textLayout} />
      )}
    </>
  );

  const inner = showFrame ? (
    <Frame {...defaultFrameProps} className={innerStyles}>
      {content}
    </Frame>
  ) : (
    <div className={innerStyles}>{content}</div>
  );

  return (
    <Link
      href="/"
      className={linkStyles}
      onMouseEnter={() => spinOnHover && setSpin(true)}
      onMouseLeave={() => spinOnHover && setSpin(false)}
    >
      {inner}
    </Link>
  );
}
