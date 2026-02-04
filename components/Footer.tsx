import Social from './Social';
import clsx from 'clsx';

export const FOOTER_DATA_TESTID = 'Footer';

export default function Footer() {
  return (
    <footer data-testid={FOOTER_DATA_TESTID} className={clsx(
      'mt-auto p-4',
      'flex flex-col sm:flex-row gap-4',
      'bg-theme-black text-theme-white/75',
      'text-left',
      'z-10' // Needed due to full-screen Cube positioning in Home page
    )}>
      <div className='ml-4 sm:ml-6'>
        &copy; {new Date().getFullYear()} Urban Tech Creative
      </div>
      <div className={clsx(
        'ml-4 sm:ml-auto mr-10',
        'flex gap-4',
      )}>
        <Social platform="linkedin" />
        <Social platform="instagram" />
        <Social platform="youtube" />
      </div>
    </footer>
  );
}
