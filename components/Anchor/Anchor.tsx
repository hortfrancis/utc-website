import Link from 'next/link';
import clsx from 'clsx';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** URL or path. External links (http/https) open in a new tab. */
  href: string;
  /** Additional class names. */
  className?: string;
}

/**
 * Unified inline link component.
 *
 * - Internal paths use next/link for client-side navigation.
 * - External URLs open in a new tab with noopener/noreferrer.
 * - Consistent styling from the design system.
 */
export default function Anchor({
  href,
  className,
  children,
  ...props
}: AnchorProps) {
  const styles = clsx(
    'text-theme-purple font-semibold hover:underline decoration-2 underline-offset-2',
    className,
  );

  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}
