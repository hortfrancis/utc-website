import clsx from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={clsx(
      'w-full h-full',
      'flex flex-col items-center justify-center',
      'bg-theme-black',
      'transition-colors duration-150',
      'hover:bg-theme-black/80'
    )}>
      {children}
    </div>
  );
}
