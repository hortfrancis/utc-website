import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const navigationLinks = [
  { href: '/work', label: 'Work' },
  { href: '/xr', label: 'XR' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Nav() {

  return (
    <div className="relative">
      <MobileNav links={navigationLinks} />
      <DesktopNav links={navigationLinks} />
    </div>
  );
}
