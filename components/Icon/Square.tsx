interface SquareProps {
  active: boolean;
  size: number;
  corners?: {
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
  }
}

export default function Square({
  active = false,
  corners,
  size,
}: SquareProps) {

  console.log('Square props - active:', active, 'size:', size, 'corners:', corners);

  const styles = `w-12 h-12 ${active ? 'bg-theme-black' : 'bg-transparent'}`;

  return (
    <div
      className={styles}
    />
  );
}
