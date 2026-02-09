import type { Meta, StoryObj } from '@storybook/nextjs';
import LinkedinEmbed from './LinkedinEmbed';

const meta = {
  title: 'Embeds/LinkedinEmbed',
  component: LinkedinEmbed,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive LinkedIn post embed. Scales proportionally on narrow viewports via CSS container queries + zoom.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="absolute inset-0 p-8 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) overflow-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LinkedinEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default rendering at native width (504px). */
export const Default: Story = {
  args: {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333068793641947136',
    height: 856,
  },
};

/** In a narrow (320px) container — iframe scales down to fit. */
export const Narrow: Story = {
  args: {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333068793641947136',
    height: 856,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
};

/** A taller post (different height value). */
export const TallPost: Story = {
  args: {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332343772250316800',
    height: 982,
  },
};

/** With a bottom-right curve, matching the Frame/badge design language. */
export const WithCurve: Story = {
  args: {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333068793641947136',
    height: 856,
    className: 'rounded-br-3xl',
  },
};
