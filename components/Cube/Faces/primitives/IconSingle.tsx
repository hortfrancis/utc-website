import Icon from '../../../Icon/Icon';
import type { IconName } from '../../../Icon/Icon';
import type { IconWeight } from '../../../Icon/Icon';

export interface IconSingleProps {
  /** Icon name from the registry. */
  name: IconName;
  /** Icon colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Phosphor weight. Default: 'fill'. */
  weight?: IconWeight;
  /** Overall opacity (0–1). Default: 1. */
  opacity?: number;
  /** Icon size in cqi units. Default: 12 (~72% of one cell). */
  iconSize?: number;
}

/**
 * A single icon centred within a grid cell. Sized larger than IconQuad
 * icons for when a cell should feature one prominent icon.
 * Use inside `<Cell>`.
 */
export default function IconSingle({
  name,
  color = 'var(--theme-white)',
  weight = 'fill',
  opacity = 1,
  iconSize = 12,
}: IconSingleProps) {
  return (
    <div
      data-component="IconSingle"
      className="flex items-center justify-center w-full h-full"
      style={{ opacity }}
    >
      <div
        className="flex items-center justify-center"
        style={{ width: `${iconSize}cqi`, height: `${iconSize}cqi` }}
      >
        <Icon
          name={name}
          size={999}
          color={color}
          weight={weight}
          className="[&>svg]:w-full [&>svg]:h-full"
        />
      </div>
    </div>
  );
}
