import clsx from 'clsx';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function SiteHeader() {

  const styles = clsx(
    'absolute top-0 w-full',
    'z-10' // Needed due to full-screen Cube positioning in Home page
  ); 

  const topBorderStyles = clsx(
    'w-full',
    'absolute top-0',
    'border-t border-8 border-theme-black',
  );

  return (
    <div className={styles}>
      <div className={topBorderStyles} />
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}
