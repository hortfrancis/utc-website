import Face from './Face';
import type { GridSquare } from './Grid';
import './spin-cube.css';

type GridSquares = {
  front: GridSquare[];
  top: GridSquare[];
  left: GridSquare[];
}

interface CubeProps {
  size: number
  spin: boolean; // Experimental
}

export default function Cube({
  size,
  spin,
}: CubeProps) {

  const gridGap = size / 30;

  const gridSquares: GridSquares = {
    left: [
      // 'U' in 'UTC'
      { colour: 'opaque' },
      { colour: 'clear' },
      { colour: 'opaque', corner: 'top-left' },
      { colour: 'opaque' },
      { colour: 'clear' },
      { colour: 'opaque' },
      { colour: 'opaque' },
      { colour: 'opaque' },
      { colour: 'opaque' },
    ],
    top: [
      // 'T' in 'UTC'
      { colour: 'opaque' },
      { colour: 'opaque' },
      { colour: 'opaque', corner: 'bottom-right' },
      { colour: 'clear' },
      { colour: 'opaque' },
      { colour: 'clear' },
      { colour: 'clear' },
      { colour: 'opaque' },
      { colour: 'clear' },
    ],
    front: [
      // 'C' in 'UTC'
      { colour: 'opaque' },
      { colour: 'opaque' },
      { colour: 'opaque', corner: 'top-right' },
      { colour: 'opaque' },
      { colour: 'clear' },
      { colour: 'clear' },
      { colour: 'opaque' },
      { colour: 'opaque' },
      { colour: 'opaque', corner: 'bottom-right' },
    ],
  }

  return <div
    className={`relative transform-3d ${spin ? 'logomark-cube--spin' : ''}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      transform: 'rotateX(-33deg) rotateY(45deg)'
    }}
  >
    <Face position='front' cubeSize={size} gridGap={gridGap} gridSquares={gridSquares.front} />
    <Face position='top' cubeSize={size} gridGap={gridGap} gridSquares={gridSquares.top} />
    <Face position='left' cubeSize={size} gridGap={gridGap} gridSquares={gridSquares.left} />
  </div>;
}
