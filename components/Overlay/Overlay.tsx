'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import './Overlay.css';

export const OVERLAY_DATA_TESTID = 'Overlay';
export const OVERLAY_BACKDROP_DATA_TESTID = 'Overlay-backdrop';
export const OVERLAY_CONTENT_DATA_TESTID = 'Overlay-content';

export interface OverlayProps {
  /** Whether the overlay is visible. */
  open: boolean;
  /** Called when the user requests close (backdrop click, Escape). */
  onClose: () => void;
  /** Overlay content. */
  children: ReactNode;
  /** Optional class on the content wrapper. */
  className?: string;
}

/**
 * Full-viewport overlay with backdrop.
 *
 * - Renders via portal so it sits above all other content.
 * - Closes on backdrop click or Escape key.
 * - Traps focus while open and restores it on close.
 * - CSS-only fade + scale entrance animation.
 */
export default function Overlay({
  open,
  onClose,
  children,
  className,
}: OverlayProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // -------------------------------------------------------------------------
  // Escape key
  // -------------------------------------------------------------------------
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    },
    [onClose],
  );

  // -------------------------------------------------------------------------
  // Focus management
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!open) return;

    // Stash the element that had focus so we can restore it later.
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    // Move focus into the overlay content.
    const timer = requestAnimationFrame(() => {
      contentRef.current?.focus();
    });

    // Escape listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(timer);
      document.removeEventListener('keydown', handleKeyDown);

      // Restore focus to the previously-focused element.
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [open, handleKeyDown]);

  // -------------------------------------------------------------------------
  // Prevent body scroll while open
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  if (!open) return null;

  return createPortal(
    <div
      data-testid={OVERLAY_DATA_TESTID}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        data-testid={OVERLAY_BACKDROP_DATA_TESTID}
        className="absolute inset-0 bg-theme-black/70 overlay-backdrop"
        onClick={onClose}
        aria-hidden
      />

      {/* Content */}
      <div
        ref={contentRef}
        data-testid={OVERLAY_CONTENT_DATA_TESTID}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={clsx(
          'relative z-10',
          'outline-none',
          'overlay-content',
          className,
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
