'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import clsx from 'clsx';

export const NAV_MENU_DATA_TESTID = 'NavMenu';
export const NAV_MENU_PANEL_DATA_TESTID = 'NavMenu-panel';

export interface NavMenuProps {
  /** Whether the menu panel is visible. */
  open: boolean;
  /** Called when the user requests close (click outside, Escape). */
  onClose: () => void;
  /** Trigger element (e.g. button). Parent wires onClick and aria-expanded. */
  trigger: ReactNode;
  /** Panel content (e.g. NavList). Positioned below trigger, right-aligned. */
  children: ReactNode;
  /** Optional class for the root wrapper. */
  className?: string;
  /** Optional class for the floating panel. */
  panelClassName?: string;
}

/**
 * Utility: handles show/hide and positioning of a dropdown menu panel.
 *
 * - Renders trigger + conditionally the panel (absolute, top-full right-0).
 * - Closes on click outside or Escape key.
 * - No visual opinion on the panel — parent wraps content in Frame etc. as needed.
 *
 * Parent owns open state and passes a trigger with onClick (toggle) and
 * aria-expanded for accessibility.
 */
export default function NavMenu({
  open,
  onClose,
  trigger,
  children,
  className,
  panelClassName,
}: NavMenuProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, handleKeyDown]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div
      ref={rootRef}
      data-testid={NAV_MENU_DATA_TESTID}
      className={clsx('relative inline-block', className)}
    >
      {trigger}
      {open && (
        <div
          data-testid={NAV_MENU_PANEL_DATA_TESTID}
          className={clsx('absolute top-full right-0 z-20 mt-1', panelClassName)}
        >
          {children}
        </div>
      )}
    </div>
  );
}
