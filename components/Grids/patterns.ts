import type { GridSquare } from './types';

/**
 * Extended reality icon: L-shape on the left (top bar, vertical stem, bottom bar),
 * T-shape on the right (one square above, gap, two squares below). Blocky pixel-art style.
 * Used by Grid6x6 stories and by XRIcon in the nav.
 */
export function extendedRealityIcon(): GridSquare[] {
  const opaque = new Set<string>([
    '0,0', '0,1', '0,2', '0,3',
    '1,0', '2,0', '3,0', '4,0',
    '2,3', '3,2', '3,4',
    '5,0', '5,1', '5,2', '5,3',
  ]);
  const squares: GridSquare[] = [];
  for (let i = 0; i < 36; i++) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    squares.push({ colour: opaque.has(`${row},${col}`) ? 'opaque' : 'clear' });
  }
  return squares;
}

/**
 * News icon: 5×6 pattern — top/bottom corners, two branches with middle spine.
 * Top row (0,0) and (0,4); row 1 at (1,1),(1,3); col 0,2,4 rows 2–3; row 4 at (4,1),(4,3); bottom (5,0),(5,4).
 * Used by Grid6x6 stories and by NewsIcon in the nav.
 */
export function newsIcon(): GridSquare[] {
  const opaque = new Set<string>([
    '0,0', '0,3',
    '1,1', '1,4',
    '2,2', '2,5',
    '3,2', '3,5',
    '4,1', '4,4',
    '5,0', '5,3',
  ]);
  const squares: GridSquare[] = [];
  for (let i = 0; i < 36; i++) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    squares.push({ colour: opaque.has(`${row},${col}`) ? 'opaque' : 'clear' });
  }
  return squares;
}

/**
 * Work icon: three horizontal bars each followed by a vertical step (stepped Z / three Ls).
 * Top bar, step down; middle bar left, step down; bottom bar left, step to bottom-right.
 * Used by Grid6x6 stories and by WorkIcon in the nav.
 */
export function workIcon(): GridSquare[] {
  const opaque = new Set<string>([
    // Top horizontal bar
    '0,0', '0,1', '0,2', '0,3',
    // First vertical step
    '1,3',
    // Middle horizontal bar (staggered left)
    '2,1', '2,2', '2,3', '2,4',
    // Second vertical step
    '3,4',
    // Bottom horizontal bar
    '4,2', '4,3', '4,4', '4,5',
    // Third vertical to bottom-right
    '5,5',
  ]);
  const squares: GridSquare[] = [];
  for (let i = 0; i < 36; i++) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    squares.push({ colour: opaque.has(`${row},${col}`) ? 'opaque' : 'clear' });
  }
  return squares;
}
