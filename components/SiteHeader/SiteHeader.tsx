import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function SiteHeader() {

  const styles = 'z-10'; // Needed due to full-screen Cube positioning in Home page

  return (
    <div className={styles}>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}
