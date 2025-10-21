import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col items-center justify-center',
      'bg-theme-black'
    )}>
      {children}
    </div>
  );
}
