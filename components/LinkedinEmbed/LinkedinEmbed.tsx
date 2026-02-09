import clsx from 'clsx';
import './LinkedinEmbed.css';

/** Native width of all LinkedIn embed iframes, in pixels. */
const LINKEDIN_EMBED_WIDTH = 504;

export interface LinkedinEmbedProps {
  /** The LinkedIn embed iframe src URL. */
  src: string;
  /**
   * Native height of the embed in pixels, as specified in LinkedIn's
   * embed code. Used to set the iframe dimensions before zoom scaling.
   */
  height: number;
  /** Accessible title for the iframe. */
  title?: string;
  /** Additional CSS classes applied to the outer container. */
  className?: string;
}

/**
 * Renders an embedded LinkedIn post that scales responsively.
 *
 * At widths ≥ 504px the iframe displays at its native size.
 * On narrower containers it zooms down proportionally via CSS
 * container queries, preserving the full post without cropping.
 */
export default function LinkedinEmbed({
  src,
  height,
  title = 'Embedded LinkedIn post',
  className,
}: LinkedinEmbedProps) {
  return (
    <div
      className={clsx('linkedin-embed border-4 border-theme-black bg-theme-black overflow-hidden', className)}
      style={{
        '--linkedin-embed-width': `${LINKEDIN_EMBED_WIDTH}px`,
        '--linkedin-embed-height': `${height}px`,
      } as React.CSSProperties}
    >
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
