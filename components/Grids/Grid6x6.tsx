import Square from './Square';
import type { GridSquare } from './types';

interface Grid6x6Props {
  gap: number;
  squares: GridSquare[];
  /** Padding around grid. If omitted, uses half of gap (original behaviour). */
  padding?: number;
}

/**
 * 6×6 grid (36 squares). Each 2×2 block in the top-left corresponds to
 * one cell in the 3×3 grid — so four squares here equal one square there.
 */
export default function Grid6x6({ gap, squares, padding }: Grid6x6Props) {
  const paddingPx = padding !== undefined ? padding : gap / 2;

  return (
    <div
      className="grid grid-cols-6 grid-rows-6 w-full h-full box-border"
      style={{
        gap: `${gap}px`,
        padding: `${paddingPx}px`,
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
