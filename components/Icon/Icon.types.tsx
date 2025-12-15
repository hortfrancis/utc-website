export type Square = {
  active: boolean;
  // Whether the corners are rounded
  corners?: {
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
  }
}

export type Squares = Square[][];

export type IconConfig = {
  squareSize: number;
  squares: Squares;
}
