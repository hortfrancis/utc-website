import Grid6x6 from '../../Grids/Grid6x6';
import { extendedRealityIcon } from '../../Grids/patterns';

/** Fixed design size: 24px with gap 1 gives integer cell size (3px). We scale to desired size. */
const DESIGN_SIZE = 24;

/**
 * Extended reality icon built from the 6×6 grid (L-shape + T-shape).
 * Renders at a fixed 24px (perfect pixel grid) then scales to the requested size
 * so all blocks stay equal at any display size.
 */
export default function XRIcon({ size = 40 }: { size?: number }) {
  const scale = size / DESIGN_SIZE;
  return (
    <div
      className="w-full h-full min-w-0 min-h-0 relative overflow-hidden"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: DESIGN_SIZE,
          height: DESIGN_SIZE,
          transform: `scale(${scale})`,
        }}
      >
        <Grid6x6 gap={1} squares={extendedRealityIcon()} />
      </div>
    </div>
  );
}
