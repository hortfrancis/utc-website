import clsx from 'clsx';
import Logo from '../Logo';
import Accent from '../Accent';
import { Pressable } from '../Pressable';
import { Frame } from '../Frame';
import PrimaryNav from '../Nav/PrimaryNav';

export const SITE_HEADER_DATA_TESTID = 'SiteHeader';

export default function SiteHeader() {
  const styles = clsx(
    'absolute top-0 w-full',
    'z-10' // Needed due to full-screen Cube positioning in Home page
  );

  return (
    <div data-testid={SITE_HEADER_DATA_TESTID} className={styles}>
      <div className="flex">
        <Pressable href="/" aria-label="Urban Tech Creative – home" className="group flex items-stretch">
          <Accent
            direction="vertical"
            gradient="magenta-green"
            borderSides={['top', 'bottom', 'left']}
          />
          <Frame
            borderSides={['top', 'right', 'bottom', 'left']}
            roundedCorners={['bottom-right']}
            className="flex items-center justify-center gap-6 w-48 h-24 group-hover:bg-theme-cyan transition-colors duration-200"
          >
            <Logo />
          </Frame>
        </Pressable>

        <div className="ml-auto">
          <PrimaryNav />
        </div>
      </div>
    </div>
  );
}
