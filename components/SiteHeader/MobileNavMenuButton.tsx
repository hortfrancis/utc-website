import clsx from 'clsx';
import OpenNavMenuIcon from "@/components/icons/ui/OpenNavMenuIcon";
import CloseNavMenuIcon from '@/components/icons/ui/CloseNavMenuIcon';

interface MobileNavMenuButtonProps {
  /** Represents menu open/closed state */
  open: boolean;
  /** Click event handler, passed to <button> */
  onClick: () => void;
}

export default function MobileNavMenuButton({
  open,
  onClick
}: MobileNavMenuButtonProps) {

  const styles = clsx(
    'w-24 h-24',
    'flex items-center justify-center',
    'bg-theme-white',
    'border-4 border-theme-black border-t-0',
    'cursor-pointer',
    'hover:bg-theme-cyan transition-colors duration-200',
    'focus:outline-none focus:ring-4 focus:ring-theme-orange',
  );

  return (
    <button
      onClick={onClick}
      className={styles}
      type='button'
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
    >{
        open
          ? <CloseNavMenuIcon />
          : <OpenNavMenuIcon />
      }</button>
  );
}
