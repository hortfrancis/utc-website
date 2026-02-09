import type { Meta, StoryObj } from '@storybook/nextjs';
import YoutubeEmbed from './YoutubeEmbed';

const meta = {
  title: 'Embeds/YoutubeEmbed',
  component: YoutubeEmbed,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive YouTube video embed with configurable aspect ratio.',
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
} satisfies Meta<typeof YoutubeEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default 16:9 video. */
export const Default: Story = {
  args: {
    src: 'https://www.youtube-nocookie.com/embed/cVpRFsvdUcE?si=AThWxdp4JlArjeK5',
    title: 'Dock Stories',
  },
};

/** 4:3 aspect ratio. */
export const FourByThree: Story = {
  args: {
    src: 'https://www.youtube-nocookie.com/embed/cVpRFsvdUcE?si=AThWxdp4JlArjeK5',
    title: 'Dock Stories',
    aspectRatio: '4:3',
  },
};

/** With a bottom-right curve. */
export const WithCurve: Story = {
  args: {
    src: 'https://www.youtube-nocookie.com/embed/cVpRFsvdUcE?si=AThWxdp4JlArjeK5',
    title: 'Dock Stories',
    className: 'rounded-br-3xl',
  },
};

/** Lazy-loaded video. */
export const LazyLoaded: Story = {
  args: {
    src: 'https://www.youtube-nocookie.com/embed/cVpRFsvdUcE?si=AThWxdp4JlArjeK5',
    title: 'Dock Stories',
    lazyLoad: true,
  },
};
