import Scene from './Scene';
import Cube from './Cube';

interface LogomarkProps {
  cubeSize?: number;
  spin?: boolean; // Experimental
}

export default function Logomark({
  cubeSize = 200,
  spin = false,
}: LogomarkProps) {
  return (
    <Scene cubeSize={cubeSize}>
      <Cube size={cubeSize} spin={spin} />
    </Scene>
  );
}
