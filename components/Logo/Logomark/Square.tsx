import clsx from 'clsx';

interface SquareProps {
  colour: 'opaque' | 'clear';
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Square({
  colour = 'clear',
  corner
}: SquareProps) {

  const style = clsx(
    'w-full h-full',
    {
      'bg-foreground': colour === 'opaque',
      'bg-transparent': colour === 'clear'
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
