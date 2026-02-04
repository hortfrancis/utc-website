import clsx from 'clsx';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export const SITE_HEADER_DATA_TESTID = 'SiteHeader';

export interface SiteHeaderProps {
  /** Initial open state for mobile nav (e.g. for Storybook). */
  defaultMobileNavOpen?: boolean;
}

export default function SiteHeader({ defaultMobileNavOpen = false }: SiteHeaderProps) {

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
    <div data-testid={SITE_HEADER_DATA_TESTID} className={styles}>
      <div className={topBorderStyles} />
      <MobileHeader defaultOpen={defaultMobileNavOpen} />
      <DesktopHeader />
    </div>
  );
}
