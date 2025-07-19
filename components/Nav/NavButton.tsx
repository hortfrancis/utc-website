import clsx from 'clsx';

interface NavButtonProps {
  onClick: () => void;
}

export default function NavButton({ onClick }: NavButtonProps) {
  const styles = clsx(
    'flex items-center justify-center',
    'w-8 h-8',
    'text-gray-700',
    'hover:text-gray-900',
    'focus:outline-none focus:bg-gray-200 rounded-sm',
    'cursor-pointer',
  );

  return (
    <button
      onClick={onClick}
      className={styles}
      aria-label="Toggle navigation">
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <path d="M7 10h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM25 12h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 16h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 20h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z" />
      </svg>
    </button>
  );
}
