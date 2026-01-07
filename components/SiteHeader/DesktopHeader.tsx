import { clsx } from "clsx";
import Logo from "../Logo";
import DesktopNav from "../Nav/DesktopNav";

export default function DesktopHeader() {

  const logoVerticalGradientStyles = clsx(
    'w-4',
    'border-4 border-theme-black',
    'border-r-0 border-t-0',
    'bg-gradient-to-b from-theme-magenta to-theme-green',
  );

  return (
    <div className='hidden md:block'>
      <div className='flex mt-2'>

        <div className={logoVerticalGradientStyles} />
        <Logo />

        <div className='mr-auto'>
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
