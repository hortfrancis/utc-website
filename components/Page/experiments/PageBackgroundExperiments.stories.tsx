import type { Meta, StoryObj } from '@storybook/nextjs';

/**
 * Page background experiments. Each story explores a different
 * CSS-only background pattern for the page content area.
 */
const meta = {
  title: 'Experiments/Backgrounds',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Grid lines over a magenta→orange gradient. */
export const GridBackground1: Story = {
  render: () => (
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(90deg, #F849C1, #FBB006)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, white 0.25ch, transparent 0.25ch),
            linear-gradient(white 0.25ch, transparent 0.25ch)
          `,
          backgroundSize: '2rem 2rem',
        }}
      />
    </div>
  ),
};

/** White grid lines over theme-black background. */
export const GridBackground2: Story = {
  render: () => (
    <div
      className="absolute inset-0 bg-theme-black"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, white 0.25ch, transparent 0.25ch),
            linear-gradient(white 0.25ch, transparent 0.25ch)
          `,
          backgroundSize: '2rem 2rem',
        }}
      />
    </div>
  ),
};

/** Light grey grid lines on white — subtle graph paper. */
export const GridBackground3: Story = {
  render: () => (
    <div
      className="absolute inset-0 bg-white"
      style={{
        backgroundImage: `
          linear-gradient(90deg, lightGrey 0.1ch, transparent 0.1ch),
          linear-gradient(lightGrey 0.1ch, transparent 0.1ch)
        `,
        backgroundSize: '2rem 2rem',
      }}
    />
  ),
};

/** Light grey grid lines over the site's faded orange→cyan gradient. */
export const GridBackground3WithSiteGradient: Story = {
  render: () => (
    <div
      className="absolute inset-0 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, lightGrey 0.1ch, transparent 0.1ch),
            linear-gradient(lightGrey 0.1ch, transparent 0.1ch)
          `,
          backgroundSize: '2rem 2rem',
        }}
      />
    </div>
  ),
};
