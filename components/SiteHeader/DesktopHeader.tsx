import Logo from "../Logo";
import Accent from "../Accent";
import { Pressable } from "../Pressable";
import { Frame } from "../Frame";
import DesktopNav from "../Nav/DesktopNav";

export const DESKTOP_HEADER_DATA_TESTID = 'DesktopHeader';

export default function DesktopHeader() {

  return (
    <div data-testid={DESKTOP_HEADER_DATA_TESTID} className='hidden md:block'>
      <div className='flex mt-2'>

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

        <div className='mr-auto'>
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
