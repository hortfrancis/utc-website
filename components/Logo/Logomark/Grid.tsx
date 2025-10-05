import Square from './Square';

export type GridSquare = {
  background: 'opaque' | 'clear';
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface GridProps {
  gap: number;
  squares: GridSquare[];
}

export default function Grid({
  gap,
  squares
}: GridProps) {

  const halfGap = gap / 2;

  return (
    <div
      className='grid grid-cols-3 grid-rows-3 w-full h-full box-border'
      style={{
        gap: `${gap}px`,
        padding: `${halfGap}px`
      }}
    >
      {squares.map((square, index) => (
        <div
          key={index}
        >
          <Square opaque={square.background === 'opaque'} corner={square.corner} />
        </div>
      ))}
    </div>
  );
}
