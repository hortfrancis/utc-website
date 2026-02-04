import Logo from "../Logo";
import Accent from "../Accent";
import DesktopNav from "../Nav/DesktopNav";

export default function DesktopHeader() {

  return (
    <div className='hidden md:block'>
      <div className='flex mt-2'>

        <Accent
          direction="vertical"
          gradient="magenta-green"
          borderSides={['left', 'bottom']}
        />
        <Logo />

        <div className='mr-auto'>
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
