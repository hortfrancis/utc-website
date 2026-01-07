import Link from 'next/link';
import { clsx } from 'clsx';
import NewsIcon from '../icons/sections/newsIcon';

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  onClick
}: NavLinkProps) {

  const outerLinkStyles = clsx(
    'flex items-center',
    'h-18',
    'mt-[-2px] mb-[-2px]', // To offset the border thickness
  );

  const iconContainerStyles = clsx(
    'flex items-center justify-center',
    'h-full',
    'w-18',
    'bg-theme-white',
    'border-4 border-theme-black',
  );

  const textContainerStyles = clsx(
    'flex items-center justify-center',
    'h-full',
    'px-6',
    'bg-theme-white',
    'font-semibold text-3xl',
    'border-4 border-theme-black border-l-0',
    //  'h-full',
  );

  const icon = (() => {
    // if (href === '/news') return <NewsIcon />;
    // return null;

    // _temp
    return <NewsIcon />;
  })();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={outerLinkStyles}
    >
      <div className={iconContainerStyles}>
        {icon}
      </div>
      <div className={textContainerStyles}>
        {label}
      </div>
    </Link>
  );
}

// 'use client';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { clsx } from 'clsx';

// export interface NavLinkProps {
//   href: string;
//   label: string;
//   onClick?: () => void;
// }

// export default function NavLink({ href, label, onClick }: NavLinkProps) {
//   const pathname = usePathname();
//   const isActive = href !== '/' && pathname.startsWith(href);

//   const styles = clsx({
//     'text-theme-purple font-semibold border-b-2 border-theme-purple': isActive,
//     'text-foreground hover:text-theme-purple': !isActive,
//   });

//   return (
//     <li>
//       <Link
//         href={href}
//         className={styles}
//         aria-current={isActive ? 'page' : undefined}
//         onClick={onClick}
//       >
//         {label}
//       </Link>
//     </li>
//   );
// }
