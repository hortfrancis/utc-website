import NavLink from './NavLink';

export default function Nav() {
  return (
    <nav>
      <ul className='flex space-x-6'>
        <NavLink href='/work'>Work</NavLink>
        <NavLink href='/xr'>XR</NavLink>
        <NavLink href='/news'>News</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </ul>
    </nav>
  );
}
