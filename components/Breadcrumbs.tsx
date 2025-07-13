import Link from 'next/link';

interface BreadcrumbsProps {
  items: { label: string; path?: string; current?: boolean }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-4 flex space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <span key={index}>
          {item.current ? (
            <span className="font-semibold">{item.label}</span>
          ) : (
            <Link href={item.path || '#'} className="font-medium hover:underline">
              {item.label}
            </Link>
          )}
          {index < items.length - 1 && <span className="ml-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
