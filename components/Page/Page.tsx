import clsx from 'clsx';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Page({ children, className, style }: PageProps) {
  return (
    <div className={clsx(
      'sm:border-4 border-theme-black sm:rounded-tr-3xl',
      'sm:px-10 sm:py-10',
      'bg-theme-white',
      className,
    )}
    style={style}
    >
      {children}
    </div>
  );
}
