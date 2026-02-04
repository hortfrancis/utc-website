'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import { Frame } from '@/components/Frame';
import Logomark from './Logomark';
import Logotype from './Logotype';

export const LOGO_DATA_TESTID = 'Logo';

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

/**
 * Presentational logo: logomark + logotype, optionally in a Frame.
 * No link or button behaviour — wrap in Button (or Link) when you want it to be clickable.
 */
export default function Logo({
  cubeSize = 36,
  type = 'full',
  lockup = 'horizontal',
  textLayout = 'stacked',
  showFrame = true,
  spinOnHover = true,
}: LogoProps) {
  const [spin, setSpin] = useState(false);
  const effectiveSpin = spinOnHover && spin;

  const innerStyles = clsx(
    'flex items-center justify-center',
    lockup === 'horizontal' ? 'flex-row' : 'flex-col',
    'gap-6',
    'w-48 h-24',
    showFrame
      ? null
      : 'bg-[color:var(--button-bg,var(--theme-white))] transition-colors duration-200',
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
    <Frame {...defaultFrameProps} interactive className={innerStyles}>
      {content}
    </Frame>
  ) : (
    <div className={innerStyles}>{content}</div>
  );

  return (
    <div
      data-testid={LOGO_DATA_TESTID}
      onMouseEnter={spinOnHover ? () => setSpin(true) : undefined}
      onMouseLeave={spinOnHover ? () => setSpin(false) : undefined}
    >
      {inner}
    </div>
  );
}
