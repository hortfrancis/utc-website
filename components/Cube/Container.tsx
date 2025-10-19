import clsx from 'clsx';

interface ContainerProps {
  children?: React.ReactNode;
}

// Just centres the cube in the viewport
// It fills the entire viewport, at 100dvh height, at z-index 0.
// The global <header> & <footer> are at z-index 10 -- allowing click events. 
export default function Container({ children }: ContainerProps) {
  return (
    <div className={clsx(
      'h-[100dvh]',
      'absolute top-0 left-0 right-0 bottom-0',
      'flex justify-center items-center',
      'z-0'
    )}>
      {children}
    </div>
  );
}
