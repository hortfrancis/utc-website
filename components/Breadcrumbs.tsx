import Link from 'next/link';

interface BreadcrumbsProps {
  items: { label: string; path?: string; current?: boolean }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-4 flex space-x-1 text-sm text-theme-black opacity-75" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.current ? (
            <span className="font-medium">{item.label}</span>
          ) : (
            <Link href={item.path || '#'} className="font-medium hover:underline hover:font-semibold decoration-1 underline-offset-2">
              {item.label}
            </Link>
          )}
          {index < items.length - 1 && <span className="ml-1">/</span>}
        </span>
      ))}
    </nav>
  );
}
