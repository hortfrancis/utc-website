'use client';

import { clsx } from 'clsx';
import { Pressable } from '../Pressable';
import Icon from '../Icon/Icon';
import type { IconName, IconWeight } from '../Icon/Icon';

export const BUTTON_DATA_TESTID = 'Button';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
  /** Semantic variant: `primary` (main action), `secondary` (supporting), `tertiary` (low-emphasis, borderless). */
  variant: ButtonVariant;
  /** Button text. Omit when using `iconOnly`. */
  label?: string;
  /** Optional icon (rendered after label, or alone when `iconOnly`). */
  icon?: IconName;
  /** Phosphor weight for the icon. Defaults to Icon's default ('fill'). */
  iconWeight?: IconWeight;
  /** When true, only renders the icon. Requires `icon` and `aria-label`. */
  iconOnly?: boolean;
  /** When provided, renders as a link (internal or external). */
  href?: string;
  /** Click handler. */
  onClick?: () => void;
  /** Accessible label (required when `iconOnly`). */
  'aria-label'?: string;
  /** For menu triggers: whether the menu is open. */
  'aria-expanded'?: boolean;
  /** For menu triggers: type of popup (e.g. 'menu'). */
  'aria-haspopup'?: 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /** Optional class for the outer element. */
  className?: string;
}

/** Variant-specific styling. */
const variantStyles: Record<ButtonVariant, string> = {
  primary: clsx(
    'bg-theme-black text-theme-white',
    'border-4 border-theme-black rounded-br-2xl',
    'hover:bg-theme-cyan hover:text-theme-black',
  ),
  secondary: clsx(
    'bg-theme-white text-theme-black',
    'border-4 border-theme-black rounded-tl-2xl',
    'hover:bg-theme-cyan',
  ),
  tertiary: clsx(
    'bg-transparent text-theme-black',
    'border-0',
    'hover:bg-theme-cyan',
  ),
};

/** Shared styling for all variants. */
const sharedStyles = clsx(
  'inline-flex items-center gap-2',
  'px-5 py-2.5 font-bold',
  'transition-[color,background-color,border-color,translate] duration-100',
  'active:translate-y-1',
  'outline-0 focus-visible:outline-4 focus-visible:outline-[var(--theme-magenta)] focus-visible:outline-offset-2',
);

/**
 * Opinionated, self-contained interactive button.
 *
 * Renders its own visual treatment (border, background, hover, focus)
 * with three semantic variants:
 * - `primary` — the main action in a given context
 * - `secondary` — supporting / alternative action
 * - `tertiary` — low-emphasis, borderless, inline-feeling action
 *
 * Supports text, icon, or text+icon content. Uses `Pressable` internally
 * for element selection (Link / a / button).
 */
export default function Button({
  variant,
  label,
  icon,
  iconWeight,
  iconOnly = false,
  href,
  onClick,
  'aria-label': ariaLabel,
  'aria-expanded': ariaExpanded,
  'aria-haspopup': ariaHaspopup,
  className,
}: ButtonProps) {
  return (
    <Pressable
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      data-testid={BUTTON_DATA_TESTID}
      className={clsx(sharedStyles, variantStyles[variant], className)}
    >
      {!iconOnly && label && <span>{label}</span>}
      {icon && <Icon name={icon} size={iconOnly ? 20 : 18} weight={iconWeight} className="text-current" />}
    </Pressable>
  );
}
