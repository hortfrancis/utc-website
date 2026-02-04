import { Grid3x3, type GridSquare } from '@/components/Grids';

interface FaceProps {
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
}: FaceProps) {

  const cubeHalfSize = cubeSize / 2;

  const transformStyles = {
    front: `translateZ(${cubeHalfSize}px)`,
    top: `rotateX(90deg) translateZ(${cubeHalfSize}px)`,
    left: `rotateY(-90deg) translateZ(${cubeHalfSize}px)`,
  };

  return (
    <div
      className='absolute w-full h-full backface-hidden box-border flex content-center items-center'
      style={{ transform: transformStyles[position] }}
    >
      <Grid3x3 gap={gridGap} squares={gridSquares} />
    </div>
  );
}
