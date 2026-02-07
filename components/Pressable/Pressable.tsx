'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import type { MouseEvent, ReactNode } from 'react';

export const PRESSABLE_DATA_TESTID = 'Pressable';

export interface PressableProps {
  /**
   * When provided, renders as a link.
   * - Internal paths (starting with `/` or relative) render as `next/link`.
   * - External URLs (starting with `http`) render as `<a target="_blank">`.
   */
  href?: string;
  /** Click handler. */
  onClick?: () => void;
  /** Mouse enter handler. */
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
  /** Mouse leave handler. */
  onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
  /** Content to make interactive. */
  children: ReactNode;
  /** Optional class for the outer element. */
  className?: string;
  /** Accessible label (recommended when content is not text). */
  'aria-label'?: string;
  /** Override data-testid. */
  'data-testid'?: string;
}

/** Returns true if the href points to an external URL. */
function isExternal(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

/**
 * Makes any subtree interactive and accessible.
 *
 * Renders the correct DOM element based on intent:
 * - `<Link>` for internal navigation (Next.js client-side routing)
 * - `<a target="_blank" rel="noopener noreferrer">` for external URLs
 * - `<button type="button">` for actions (no `href`)
 *
 * Zero visual opinion — no borders, backgrounds, padding, or hover effects.
 * Use for custom compositions (Logo lockups, NavLinks, etc.) where the
 * visual treatment is owned by the children.
 */
export default function Pressable({
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  className,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
}: PressableProps) {
  const testId = dataTestId ?? PRESSABLE_DATA_TESTID;
  const baseStyles = clsx('cursor-pointer outline-0', className);

  const mouseProps = {
    onMouseEnter,
    onMouseLeave,
  };

  if (href !== undefined) {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          aria-label={ariaLabel}
          data-testid={testId}
          onClick={onClick}
          {...mouseProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={baseStyles}
        aria-label={ariaLabel}
        data-testid={testId}
        onClick={onClick}
        {...mouseProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseStyles}
      data-testid={testId}
      onClick={onClick}
      aria-label={ariaLabel}
      {...mouseProps}
    >
      {children}
    </button>
  );
}
