'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { clsx } from 'clsx';

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href !== '/' && pathname.startsWith(href);

  const styles = clsx({
    'text-blue-600 font-semibold border-b-2 border-blue-600': isActive,
    'text-gray-700 hover:text-blue-600': !isActive,
  });

  return (
    <li>
      <Link
        href={href}
        className={styles}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
