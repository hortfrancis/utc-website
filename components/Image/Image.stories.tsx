import type { Meta, StoryObj } from '@storybook/nextjs';
import Image from './Image';

/**
 * Unified Image component wrapping `next/image`.
 *
 * Framed by default — renders inside a Frame with border.
 * Pass `framed={false}` for a bare image.
 */
const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flexible image component. Framed by default; pass framed={false} for a bare image.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    framed: {
      control: 'boolean',
      description: 'Wrap the image in a Frame (default: true).',
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) min-h-64 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE = {
  src: '/images/experiments/collaborator-bio-example01.png',
  alt: 'Sample image',
  width: 400,
  height: 300,
};

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

/** Default — framed with border. */
export const Default: Story = {
  args: {
    ...SAMPLE,
  },
};

/** Framed without a visible border. */
export const WithoutBorders: Story = {
  args: {
    ...SAMPLE,
    borderSides: [],
  },
};

/** Framed with specific rounded corners. */
export const WithRoundedCorners: Story = {
  args: {
    ...SAMPLE,
    roundedCorners: ['top-left', 'bottom-right'],
  },
};

/** Blend mode against a solid coloured background. */
export const BlendModeColoured: Story = {
  args: {
    ...SAMPLE,
    background: 'bg-theme-cyan',
    className: 'mix-blend-luminosity',
  },
};

/** Blend mode against a gradient background. */
export const BlendModeGradient: Story = {
  args: {
    ...SAMPLE,
    background: 'bg-linear-to-r from-theme-orange to-theme-purple',
    className: 'mix-blend-luminosity',
  },
};
