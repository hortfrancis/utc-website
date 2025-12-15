import Square from './Square';
import type { Square as SquareType } from './Icon.types';

interface InnerGridProps {
  squareSize: number;
  squares: SquareType[];
}

export default function InnerGrid({
  squareSize,
  squares
}: InnerGridProps) {

  console.log('InnerGrid squares:', squares);
  console.log('InnerGrid squareSize:', squareSize);

  // Create a 2x2 grid
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
      {squares.map((square, index) => (
        <Square key={index} size={squareSize} active={square.active} />
      ))}
    </div>
  );
}