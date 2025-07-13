import Logo from './Logo';
import Nav from './Nav';
import clsx from 'clsx';

export default function Header() {
  return (
    <header className={clsx(
      'flex items-center justify-between',
      'px-10 py-4',
      'border-b'
    )}>
      <Logo />
      <Nav />
    </header>
  );
}
