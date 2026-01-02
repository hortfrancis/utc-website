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
  lazyLoad = false,
}: EmbeddedVideoProps) {

  const containerStyles = clsx(
    'bg-theme-black',
    'my-6',
    'rounded-md',
    'border-theme-black border border-2',
    'overflow-hidden',
    'w-full',
    'aspect-video' // Maintains 16:9 aspect ratio using `aspect-ratio` CSS property
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
