import clsx from 'clsx';

interface SquareProps {
  colour: 'opaque' | 'clear';
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

/**
 * Rounded corners use 25% of the cell size so the curve scales with the grid
 * and looks consistent at any render size.
 */
export default function Square({
  colour = 'clear',
  corner,
}: SquareProps) {
  const style = clsx(
    'w-full h-full',
    {
      'bg-foreground': colour === 'opaque',
      'bg-transparent': colour === 'clear',
    },
    corner === 'top-left' && 'rounded-tl-[33%]',
    corner === 'top-right' && 'rounded-tr-[33%]',
    corner === 'bottom-left' && 'rounded-bl-[33%]',
    corner === 'bottom-right' && 'rounded-br-[33%]'
  );

  return <div className={style} />;
}
