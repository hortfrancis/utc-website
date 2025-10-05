export type GridSquare = {
  background: 'opaque' | 'clear';
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
          className={`w-full h-full ${square.background === 'opaque' ? 'bg-black' : 'bg-white'}`}
        />
      ))}
    </div>
  );
}
