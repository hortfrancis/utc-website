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
      { background: 'opaque' },
      { background: 'clear' },
      { background: 'opaque', corner: 'top-left' },
      { background: 'opaque' },
      { background: 'clear' },
      { background: 'opaque' },
      { background: 'opaque' },
      { background: 'opaque' },
      { background: 'opaque' },
    ],
    top: [
      // 'T' in 'UTC'
      { background: 'opaque' },
      { background: 'opaque' },
      { background: 'opaque', corner: 'bottom-right' },
      { background: 'clear' },
      { background: 'opaque' },
      { background: 'clear' },
      { background: 'clear' },
      { background: 'opaque' },
      { background: 'clear' },
    ],
    front: [
      // 'C' in 'UTC'
      { background: 'opaque' },
      { background: 'opaque' },
      { background: 'opaque', corner: 'top-right' },
      { background: 'opaque' },
      { background: 'clear' },
      { background: 'clear' },
      { background: 'opaque' },
      { background: 'opaque' },
      { background: 'opaque', corner: 'bottom-right' },
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
