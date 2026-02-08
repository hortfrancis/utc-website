'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/Button';
import NavMenu from './NavMenu';
import NavMenuPanel from './NavMenuPanel';
import { primaryNavLinks } from './primaryNavLinks';

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
 * arrow-down) + NavMenuPanel. Lives in the site header.
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
        <NavMenuPanel
          links={primaryNavLinks}
          size="desktop"
          align="right"
          onLinkClick={close}
        />
      </NavMenu>
    </div>
  );
}
