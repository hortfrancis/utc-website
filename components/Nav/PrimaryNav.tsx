'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/Button';
import { Frame } from '@/components/Frame';
import NavList from './NavList';
import NavMenu from './NavMenu';
import { navLinks } from './navLinks';

export const PRIMARY_NAV_DATA_TESTID = 'PrimaryNav';

export interface PrimaryNavProps {
  /** Optional class for the root wrapper (e.g. for header positioning). */
  className?: string;
  /** Initial open state (e.g. for Storybook). */
  defaultOpen?: boolean;
}

/**
 * Primary navigation: floating menu in the top-right.
 *
 * Composes NavMenu (show/hide, positioning) + Button trigger ("Navigation",
 * arrow-down) + NavList inside a Frame. Lives in the site header.
 * Toggle opens/closes the dropdown; click outside or Escape closes it.
 */
export default function PrimaryNav({
  className,
  defaultOpen = false,
}: PrimaryNavProps) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const trigger = (
    <Button
      variant="secondary"
      label="Navigation"
      icon="arrow-down"
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="menu"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
    />
  );

  return (
    <div
      data-testid={PRIMARY_NAV_DATA_TESTID}
      className={clsx('inline-block', className)}
    >
      <NavMenu open={open} onClose={close} trigger={trigger}>
        <Frame
          borderSides={['top', 'right', 'bottom', 'left']}
          roundedCorners={['bottom-left']}
          className="bg-theme-white border-theme-black overflow-hidden p-1"
        >
          <NavList
            links={navLinks}
            size="desktop"
            onLinkClick={close}
          />
        </Frame>
      </NavMenu>
    </div>
  );
}
