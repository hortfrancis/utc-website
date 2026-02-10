import clsx from 'clsx';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  );
}
