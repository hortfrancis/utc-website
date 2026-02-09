import type { Meta, StoryObj } from '@storybook/nextjs';

/**
 * LinkedIn embed responsiveness experiments.
 *
 * LinkedIn's embed iframes render at a fixed 504px width internally —
 * unlike YouTube, they don't reflow content when resized. These experiments
 * use CSS container queries + `zoom` to scale the iframe proportionally
 * on narrow viewports without cropping.
 *
 * Technique: `container-type: inline-size` on a wrapper, then
 * `zoom: calc(min(100cqw, 504px) / 504px)` on the iframe.
 * `zoom` affects layout (unlike `transform: scale`), so the element's
 * box shrinks naturally — no wrapper height hacks needed.
 */
const meta = {
  title: 'Experiments/LinkedinEmbed',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Experiments for making LinkedIn embed iframes responsive using CSS container queries + zoom.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-8 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) min-h-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const SAMPLE_SRC =
  'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333068793641947136';
const NATIVE_WIDTH = 504;
const NATIVE_HEIGHT = 856;

/* ------------------------------------------------------------------ */
/*  CSS                                                                */
/* ------------------------------------------------------------------ */

const zoomCSS = `
  .li-embed-container {
    container-type: inline-size;
    width: 100%;
    max-width: ${NATIVE_WIDTH}px;
  }
  .li-embed-iframe {
    width: ${NATIVE_WIDTH}px;
    height: ${NATIVE_HEIGHT}px;
    border: 0;
    zoom: calc(min(100cqw, ${NATIVE_WIDTH}px) / ${NATIVE_WIDTH}px);
  }
`;

/* ------------------------------------------------------------------ */
/*  1. Baseline                                                        */
/* ------------------------------------------------------------------ */

/**
 * **Baseline** — Raw LinkedIn iframe at its native 504×856 dimensions.
 * No responsive handling. Resize the Storybook canvas below 504px to
 * see the overflow problem.
 */
export const Baseline: Story = {
  render: () => (
    <div>
      <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest mb-2 block">
        Baseline (no responsive handling)
      </span>
      <iframe
        src={SAMPLE_SRC}
        width={NATIVE_WIDTH}
        height={NATIVE_HEIGHT}
        frameBorder="0"
        allowFullScreen
        title="Embedded LinkedIn post"
      />
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  2. Zoom                                                            */
/* ------------------------------------------------------------------ */

/**
 * **Zoom** — Container query + `zoom`. The iframe scales proportionally
 * when the container is narrower than 504px. At 504px or wider, zoom = 1.
 */
export const Zoom: Story = {
  render: () => (
    <div>
      <style>{zoomCSS}</style>
      <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest mb-2 block">
        Container Query + Zoom
      </span>
      <div className="li-embed-container mx-auto">
        <iframe
          className="li-embed-iframe"
          src={SAMPLE_SRC}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="Embedded LinkedIn post"
        />
      </div>
    </div>
  ),
};

/* ------------------------------------------------------------------ */
/*  3. Narrow Container (320px)                                        */
/* ------------------------------------------------------------------ */

/**
 * **Narrow Container** — Same zoom technique forced into a 320px wrapper
 * to simulate mobile without resizing the canvas.
 */
export const NarrowContainer: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <style>{zoomCSS}</style>
      <span className="text-xs font-bold text-theme-black/50 uppercase tracking-widest mb-2 block">
        Zoom @ 320px
      </span>
      <div className="li-embed-container">
        <iframe
          className="li-embed-iframe"
          src={SAMPLE_SRC}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          title="Embedded LinkedIn post"
        />
      </div>
    </div>
  ),
};

