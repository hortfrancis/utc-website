import clsx from 'clsx';
import Grid from './Grid';
import type { GridSquare } from './Grid';

interface FrontFaceProps {
  cubeSize: number;
  gridGap: number;
  position: 'front' | 'left' | 'top';
  gridSquares: GridSquare[];
}

export default function Face({
  gridGap,
  cubeSize,
  position,
  gridSquares
}: FrontFaceProps) {

  const cubeHalfSize = cubeSize / 2;

  const transformStyles = {
    front: `translateZ(${cubeHalfSize}px)`,
    top: `rotateX(90deg) translateZ(${cubeHalfSize}px)`,
    left: `rotateY(-90deg) translateZ(${cubeHalfSize}px)`,
  };

  const style = clsx(
    'absolute w-full h-full backface-hidden box-border flex content-center items-center',
  );

  return (
    <div
      className={style}
      style={{
        transform: transformStyles[position]
      }}
    >
      <Grid gap={gridGap} squares={gridSquares} />
    </div>
  );
}
