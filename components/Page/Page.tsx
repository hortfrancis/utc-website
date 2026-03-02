import clsx from 'clsx';

export interface PageProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Page({ children, className, style }: PageProps) {
  return (
    <div className={clsx(
      'border-t-4 border-b-4 sm:border-4 border-theme-black sm:rounded-tr-3xl',
      'px-6 py-6 sm:px-16 sm:py-10',
      'mt-4 sm:mt-0',
      'bg-theme-white',
      className,
    )}
    style={style}
    >
      {children}
    </div>
  );
}
