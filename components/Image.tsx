import NextImage, { ImageProps as NextImageProps } from 'next/image';
import clsx from 'clsx';

// Custom image component that wraps Next.js Image with custom styling
// Import this into MDX files to use instead of default img tag.
export default function Image({
  alt = '', // Preferred default for non-semantic images is an empty string
  ...props
}: NextImageProps) {

  const containerStyles = clsx(
    'bg-theme-white',
    'my-6',
    'rounded-md',
    'border-theme-black border border-2',
    'overflow-hidden'
  );
  const imageStyles = 'w-full';

  return (
    <div
      className={containerStyles}
    >
      <NextImage
        alt={alt}
        className={imageStyles}
        {...props}
      />
    </div>
  );
}
