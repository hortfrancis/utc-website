import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import clsx from 'clsx';

export default function Header() {
  return (
    <header
      className={clsx(
        'flex items-center justify-between',
        'h-30 px-10',
        'bg-background border-b'
      )}
    >
      <Logo cubeSize={40} />
      <Nav />
    </header>
  );
}
