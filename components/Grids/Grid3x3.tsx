import Square from './Square';
import type { GridSquare } from './types';

interface Grid3x3Props {
  gap: number;
  squares: GridSquare[];
}

/**
 * 3×3 grid (9 squares). Used by the logomark cube faces and elsewhere.
 */
export default function Grid3x3({ gap, squares }: Grid3x3Props) {
  const halfGap = gap / 2;

  return (
    <div
      className="grid grid-cols-3 grid-rows-3 w-full h-full box-border"
      style={{
        gap: `${gap}px`,
        padding: `${halfGap}px`,
      }}
    >
      {squares.map((square, index) => (
        <div key={index}>
          <Square colour={square.colour} corner={square.corner} />
        </div>
      ))}
    </div>
  );
}
