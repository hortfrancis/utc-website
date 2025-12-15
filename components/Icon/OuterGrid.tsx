import InnerGrid from "./InnerGrid";
import type { Squares } from './Icon.types';

interface OuterGridProps {
  squares: Squares;
  squareSize: number;
}

export default function OuterGrid({
  squares,
  squareSize
}: OuterGridProps) {

  console.log('OuterGrid squares:', squares);

  // Create a 3x3 grid 
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
      {squares.map((square, index) => (
        <InnerGrid
          key={index}
          squareSize={squareSize}
          squares={squares[index]} />
      ))}
    </div>
  );
}
