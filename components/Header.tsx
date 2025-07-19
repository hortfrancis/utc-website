import Logo from './Logo';
import Nav from './Nav/Nav';
import clsx from 'clsx';

export default function Header() {
  return (
    <header
      className={clsx(
        'flex items-center justify-between',
        'h-16 px-10',
        'border-b'
      )}
    >
      <Logo />
      <Nav />
    </header>
  );
}
