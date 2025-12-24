import clsx from 'clsx';

interface ButtonProps {
  // onButtonClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  // onButtonClick,
  children
}: ButtonProps) {

  function temp_triggerAlert() {
    alert(`Button clicked on face: ${children}`);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    // For the alert() prototype: avoid leaving focus on the button,
    // which can make the next drag attempt feel "blocked".
    (event.currentTarget as HTMLButtonElement).blur();

    temp_triggerAlert();
  }

  const buttonStyles = clsx(
    'bg-theme-cyan text-theme-purple',
    'px-4 py-2 rounded-md',
    'hover:bg-theme-cyan/80',
    'active:bg-theme-cyan/60',
    'focus:outline-none focus:ring-4 focus:ring-theme-cyan/50',
    'transition-all duration-150 ease-in-out',
    'select-none cursor-pointer',
  );

  return (
    <button
      type='button'
      className={`face__button ${buttonStyles}`}
      // Prevent the cube drag from starting when pressing the button
      onPointerDownCapture={(e) => e.stopPropagation()}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
