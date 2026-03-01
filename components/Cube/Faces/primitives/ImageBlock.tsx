import NextImage from 'next/image';

const MASK_GRADIENTS: Record<string, string> = {
  'fade-down': 'linear-gradient(to bottom, black 0%, transparent 100%)',
  'fade-up': 'linear-gradient(to top, black 0%, transparent 100%)',
  'fade-left': 'linear-gradient(to left, black 0%, transparent 100%)',
  'fade-right': 'linear-gradient(to right, black 0%, transparent 100%)',
};

export interface ImageBlockProps {
  /** Image source URL. */
  src: string;
  /** Alt text. */
  alt: string;
  /** Gradient mask direction. Default: none. */
  mask?: 'fade-down' | 'fade-up' | 'fade-left' | 'fade-right';
  /** CSS object-fit. Default: 'cover'. */
  objectFit?: React.CSSProperties['objectFit'];
  /** Opacity (0–1). Default: 1. */
  opacity?: number;
}

/**
 * Image that fills its parent cell. Supports directional gradient masks
 * for fade effects. Typically used inside a full-spanning `<Cell>`.
 */
export default function ImageBlock({
  src,
  alt,
  mask,
  objectFit = 'cover',
  opacity = 1,
}: ImageBlockProps) {
  const maskValue = mask ? MASK_GRADIENTS[mask] : undefined;

  return (
    <div
      data-component="ImageBlock"
      className="relative w-full h-full"
      style={{
        opacity,
        ...(maskValue && {
          maskImage: maskValue,
          WebkitMaskImage: maskValue,
        }),
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    </div>
  );
}
