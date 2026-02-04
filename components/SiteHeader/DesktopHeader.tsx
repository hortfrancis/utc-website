import Logo from "../Logo";
import Accent from "../Accent";
import { Button } from "../Button";
import DesktopNav from "../Nav/DesktopNav";

export const DESKTOP_HEADER_DATA_TESTID = 'DesktopHeader';

export default function DesktopHeader() {

  return (
    <div data-testid={DESKTOP_HEADER_DATA_TESTID} className='hidden md:block'>
      <div className='flex mt-2'>

        <Accent
          direction="vertical"
          gradient="magenta-green"
          borderSides={['left', 'bottom']}
        />
        <Button href="/" aria-label="Urban Tech Creative – home">
          <Logo />
        </Button>

        <div className='mr-auto'>
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
