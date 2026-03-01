import Icon from '../../../Icon/Icon';
import type { IconName } from '../../../Icon/Icon';
import type { IconWeight } from '../../../Icon/Icon';

export interface IconQuadProps {
  /** Icons for each quadrant. Omit a key for an empty quadrant. */
  icons: {
    tl?: IconName;
    tr?: IconName;
    bl?: IconName;
    br?: IconName;
  };
  /** Centre all icons within their quadrants instead of anchoring to corners. Default: false. */
  centered?: boolean;
  /** Show the plus divider in the centre. Default: true. */
  showDivider?: boolean;
  /** Icon colour. Default: `var(--theme-white)`. */
  color?: string;
  /** Phosphor weight for the four icons. Default: 'fill'. */
  weight?: IconWeight;
  /** Overall opacity (0–1). Default: 1. */
  opacity?: number;
  /** Icon size in cqi units. Default: 5. */
  iconSize?: number;
  /** Divider size as a percentage of the cell (0–100). Default: 50. */
  dividerSize?: number;
  /** Divider opacity (0–1). Default: 0.5. */
  dividerOpacity?: number;
  /** Phosphor weight for the divider. Default: 'thin'. */
  dividerWeight?: IconWeight;
  /** Divider colour. Default: inherits from `color`. */
  dividerColor?: string;
}

/**
 * Four icons in a 2×2 layout within one grid cell, with an optional
 * Phosphor `plus` icon centred as a visual divider. Icon sizing uses
 * cqi units for responsive scaling.
 *
 * The component fills its parent cell. Use inside `<Cell>`.
 */
export default function IconQuad({
  icons,
  centered = false,
  showDivider = true,
  color = 'var(--theme-white)',
  weight = 'fill',
  opacity = 1,
  iconSize = 5,
  dividerSize = 50,
  dividerOpacity = 0.5,
  dividerWeight = 'thin',
  dividerColor,
}: IconQuadProps) {
  const positions = ['tl', 'tr', 'bl', 'br'] as const;

  const alignClasses: Record<string, string> = {
    tl: 'items-start justify-start',
    tr: 'items-start justify-end',
    bl: 'items-end justify-start',
    br: 'items-end justify-end',
    center: 'items-center justify-center',
  };

  return (
    <div
      data-component="IconQuad"
      className="relative grid grid-cols-2 grid-rows-2 w-full h-full"
      style={{ opacity }}
    >
      {positions.map((pos) => {
        const name = icons[pos];
        return (
          <div
            key={pos}
            className={`flex ${centered ? alignClasses.center : alignClasses[pos]} p-[1.5cqi]`}
          >
            {name && (
              <div
                className="flex items-center justify-center"
                style={{
                  width: `${iconSize}cqi`,
                  height: `${iconSize}cqi`,
                }}
              >
                <Icon
                  name={name}
                  size={999}
                  color={color}
                  weight={weight}
                  className="[&>svg]:w-full [&>svg]:h-full"
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Centre divider — Phosphor plus icon, sized as % of the cell */}
      {showDivider && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          style={{
            width: `${dividerSize}%`,
            height: `${dividerSize}%`,
            opacity: dividerOpacity,
          }}
        >
          <Icon
            name="plus"
            size={999}
            color={dividerColor ?? color}
            weight={dividerWeight}
            className="[&>svg]:w-full [&>svg]:h-full"
          />
        </div>
      )}
    </div>
  );
}
