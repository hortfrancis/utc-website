'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import type { MouseEvent, ReactNode } from 'react';
import './Button.css';

export const BUTTON_DATA_TESTID = 'Button';

export interface ButtonProps {
  /** When provided, renders as Next Link (for navigation). */
  href?: string;
  /** Click handler (for button element). */
  onClick?: () => void;
  /** Mouse enter (e.g. for hover-driven behaviour in children). */
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
  /** Mouse leave (e.g. for hover-driven behaviour in children). */
  onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
  /** Button content; typically a Frame (with interactive) or any block. */
  children: ReactNode;
  /** Optional class for the outer element. */
  className?: string;
  /** Accessible label (recommended when content is not text). */
  'aria-label'?: string;
  /** Override data-testid (e.g. when Button wraps NavLink so test id is NavLink). */
  'data-testid'?: string;
}

/**
 * Wraps any UI block to make it a button. Sets CSS custom properties
 * (--button-border-color, --button-bg) that change on hover/focus to
 * theme-orange and theme-cyan. Use with Frame (interactive) or any
 * block that reads those variables.
 */
export default function Button({
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  className,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
}: ButtonProps) {
  const testId = dataTestId ?? BUTTON_DATA_TESTID;
  const baseStyles = clsx(
    'button-block',
    'flex items-center justify-center',
    'cursor-pointer',
    'focus:outline-none focus:ring-4 focus:ring-theme-orange',
    'focus-visible:outline-none',
    className
  );

  const mouseProps = {
    onMouseEnter,
    onMouseLeave,
  };

  if (href !== undefined) {
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
