'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import Logomark from './Logomark';
import Logotype from './Logotype';

export const LOGO_DATA_TESTID = 'Logo';

interface LogoProps {
  /** Size of the cube in pixels */
  cubeSize?: number;
  type?: 'logomark' | 'logotype' | 'full';
  lockup?: 'horizontal' | 'vertical';
  textLayout?: 'single-line' | 'stacked';
  /** When false, the logomark does not spin on hover. */
  spinOnHover?: boolean;
}

/**
 * Presentational logo: logomark + logotype (pure atom).
 * No Frame — wrap in Frame when you want the stamp-style border (e.g. in headers).
 * No link or button behaviour — wrap in Button (or Link) when you want it to be clickable.
 */
export default function Logo({
  cubeSize = 36,
  type = 'full',
  lockup = 'horizontal',
  textLayout = 'stacked',
  spinOnHover = true,
}: LogoProps) {
  const [spin, setSpin] = useState(false);
  const effectiveSpin = spinOnHover && spin;

  const innerStyles = clsx(
    'flex items-center justify-center',
    lockup === 'horizontal' ? 'flex-row' : 'flex-col',
    'gap-6',
    'w-48 h-24',
  );

  return (
    <div
      data-testid={LOGO_DATA_TESTID}
      className={innerStyles}
      onMouseEnter={spinOnHover ? () => setSpin(true) : undefined}
      onMouseLeave={spinOnHover ? () => setSpin(false) : undefined}
    >
      {(type === 'logomark' || type === 'full') && (
        <Logomark cubeSize={cubeSize} spin={effectiveSpin} />
      )}
      {(type === 'logotype' || type === 'full') && (
        <Logotype textLayout={textLayout} />
      )}
    </div>
  );
}
