import Image from '../../../Image';

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
  /** CSS object-position. Controls which part of the image is visible when cropped. */
  objectPosition?: React.CSSProperties['objectPosition'];
  /** Opacity (0–1). Default: 1. */
  opacity?: number;
  /** CSS mix-blend-mode. When set, image blends with content behind it. */
  mixBlendMode?: React.CSSProperties['mixBlendMode'];
  /** Scale factor for zoomed center crop. E.g. 2 = 2× zoom, clipped to cell bounds. */
  scale?: number;
}

/**
 * Image that fills its parent cell. Supports directional gradient masks,
 * scale/zoom for center-cropped zoom, objectPosition for pan, and
 * mixBlendMode for layering. Typically used inside a `<Cell>`.
 */
export default function ImageBlock({
  src,
  alt,
  mask,
  objectFit = 'cover',
  objectPosition,
  opacity = 1,
  mixBlendMode,
  scale,
}: ImageBlockProps) {
  const maskValue = mask ? MASK_GRADIENTS[mask] : undefined;

  const imageStyle: React.CSSProperties = {
    objectFit,
    ...(objectPosition && { objectPosition }),
  };

  const inner = (
    <div
      data-component="ImageBlock"
      className="relative w-full h-full"
      style={{
        opacity,
        ...(maskValue && {
          maskImage: maskValue,
          WebkitMaskImage: maskValue,
        }),
        // mixBlendMode is on the outer wrapper when scale is used (transform creates
        // a stacking context that isolates blend mode on descendants)
        ...(mixBlendMode && scale == null && { mixBlendMode }),
      }}
    >
      <Image src={src} alt={alt} fill framed={false} style={imageStyle} />
    </div>
  );

  if (scale != null && scale > 0) {
    return (
      <div
        className="w-full h-full overflow-hidden"
        style={mixBlendMode ? { mixBlendMode } : undefined}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center',
          }}
        >
          {inner}
        </div>
      </div>
    );
  }

  return inner;
}
