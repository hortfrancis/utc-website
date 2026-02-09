import clsx from 'clsx';

const aspectRatioClasses = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1.43:1': 'aspect-[1.43/1]',
} as const;

export interface YoutubeEmbedProps {
  /** The YouTube embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID). */
  src: string;
  /** Accessible title for the iframe. Should be the video title. */
  title: string;
  /**
   * Aspect ratio of the video container.
   * @default '16:9'
   */
  aspectRatio?: keyof typeof aspectRatioClasses;
  /**
   * If `true`, the iframe receives `loading="lazy"` so it only loads
   * when approaching the viewport.
   * @default false
   */
  lazyLoad?: boolean;
  /** Additional CSS classes applied to the outer container. */
  className?: string;
}

/**
 * Responsive YouTube video embed.
 *
 * Wraps a YouTube iframe in a container with a fixed aspect ratio.
 * The iframe fills the container and scales with it.
 */
export default function YoutubeEmbed({
  src,
  title,
  aspectRatio = '16:9',
  lazyLoad = false,
  className,
}: YoutubeEmbedProps) {
  return (
    <div
      className={clsx(
        'bg-theme-black',
        'border-4 border-theme-black',
        'overflow-hidden',
        'w-full',
        aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      <iframe
        className="w-full h-full border-0"
        loading={lazyLoad ? 'lazy' : 'eager'}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
