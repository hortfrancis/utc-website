import Scene from './Scene';
import Cube from './Cube';

interface LogomarkProps {
  cubeSize?: number;
}

export default function Logomark({
  cubeSize = 200,
}: LogomarkProps) {
  return (
    <Scene cubeSize={cubeSize}>
      <Cube size={cubeSize} />
    </Scene>
  );
}
