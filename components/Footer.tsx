import Social from './Social';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className={clsx(
      'mt-auto p-4',
      'flex',
      'bg-black text-gray-300'
    )}>
      <div className='ml-10'>
        &copy; {new Date().getFullYear()} Urban Tech Creative
      </div>
      <div className={clsx(
        'ml-auto mr-10',
        'flex gap-4',
      )}>
        <Social platform="linkedin" />
        <Social platform="instagram" />
        <Social platform="youtube" />
      </div>
    </footer>
  );
}
