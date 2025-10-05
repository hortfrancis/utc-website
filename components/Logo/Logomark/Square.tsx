import clsx from 'clsx';

interface SquareProps {
  opaque: boolean;
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Square({
  opaque = false,
  corner
}: SquareProps) {

  const style = clsx(
    'w-full h-full',
    {
      'bg-black': opaque,
      'bg-white': !opaque
    },
    corner === 'top-left' && ('rounded-tl-lg'),
    corner === 'top-right' && ('rounded-tr-lg'),
    corner === 'bottom-left' && ('rounded-bl-lg'),
    corner === 'bottom-right' && ('rounded-br-lg')
  );

  return (
    <div className={style} />
  );
}
