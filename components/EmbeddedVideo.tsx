import clsx from 'clsx';

interface EmbeddedVideoProps {
  /**
  * The URL of the video to be embedded.
  */
  src: string;
  /** 
  * Title for the iframe. 
  * Should just be the video title. 
  */
  title: string;
  /**
   * Aspect ratio of the video container.
   * 
   * Default is '16:9'.
   * 
   * Sets the aspect ratio of the video container using CSS `aspect-ratio` property (via Tailwind).
   */
  aspectRatio?: '16:9' | '4:3';
  /**
  * Determines whether the iframe receives a `loading="lazy"` HTML attribute.
  * 
  * If `true`, the video will only load when it is about to enter the viewport, which can improve page load performance.
  * 
  * Default: `false`, meaning the video loads 'eagerly'.
  */
  lazyLoad?: boolean;
}

/** 
 * Designed for YouTube videos; may support other video hosting platforms, but this is untested. 
*/
export default function EmbeddedVideo({
  src,
  title,
  aspectRatio = '16:9',
  lazyLoad = false,
}: EmbeddedVideoProps) {

  const aspectRatioClass = (() => {
    // Maintains 16:9 aspect ratio using `aspect-ratio` CSS property
    if (aspectRatio === '16:9') return 'aspect-video';
    if (aspectRatio === '4:3') return 'aspect-[4/3]';
    return '';
  })();

  const containerStyles = clsx(
    'bg-theme-black',
    'my-6',
    'rounded-md',
    'border-theme-black border border-2',
    'overflow-hidden',
    'w-full',
    aspectRatioClass,
  );
  const iframeStyles = 'w-full h-full border-0';

  return (
    <div className={containerStyles}>
      <iframe
        className={iframeStyles}
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
