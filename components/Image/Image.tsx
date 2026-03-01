import NextImage, { ImageProps as NextImageProps } from 'next/image';
import clsx from 'clsx';
import { Frame } from '../Frame';
import type { FrameBorderSide, FrameCorner } from '../Frame/Frame';

export interface ImageProps extends NextImageProps {
  /** Wrap the image in a Frame. Defaults to true. */
  framed?: boolean;
  /** Which sides get the border (forwarded to Frame). */
  borderSides?: readonly FrameBorderSide[];
  /** Which corners are rounded (forwarded to Frame). */
  roundedCorners?: readonly FrameCorner[];
  /** Extra classes on the Frame wrapper. */
  containerClassName?: string;
}

/**
 * Unified image component wrapping next/image.
 *
 * Framed by default — renders inside a Frame with border and overflow
 * hidden. Pass `framed={false}` for a bare image.
 * Single point to update when changing image hosting or optimisation.
 */
export default function Image({
  alt = '',
  framed = true,
  borderSides,
  roundedCorners,
  containerClassName,
  className,
  ...props
}: ImageProps) {
  const imageNode = (
    <NextImage
      alt={alt}
      className={clsx(framed && 'w-full', className)}
      {...props}
    />
  );

  if (!framed) return imageNode;

  return (
    <Frame
      borderSides={borderSides}
      roundedCorners={roundedCorners}
      className={clsx('overflow-hidden', containerClassName)}
    >
      {imageNode}
    </Frame>
  );
}
