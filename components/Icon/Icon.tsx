import OuterGrid from './OuterGrid';
import type { IconConfig } from './Icon.types';
// import { Square as SquareType } from './Icon.types';

interface IconProps {
  config: IconConfig;
}

export default function Icon({ config }: IconProps) {

  console.log('Icon config:', config);

  return (
    <OuterGrid
      squares={config.squares}
      squareSize={config.squareSize}
    />
  );
}
