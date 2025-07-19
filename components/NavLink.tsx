'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
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
      >
        {children}
      </Link>
    </li>
  );
}
