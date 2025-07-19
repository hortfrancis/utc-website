import Social from './Social';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className={clsx(
      'mt-auto p-4',
      'flex flex-col sm:flex-row gap-4',
      'bg-black text-gray-300',
      'text-left'
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
