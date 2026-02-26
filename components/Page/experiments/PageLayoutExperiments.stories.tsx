import type { Meta, StoryObj } from '@storybook/nextjs';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '@/mdx-components';
import Page from '../Page';
import AboutContent from '@/content/about.mdx';

/**
 * Page layout experiments. Exploring borders, framing, and
 * other stylistic treatments around the page content area.
 */
const meta = {
  title: 'Experiments/Page Layouts',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MDXProvider components={useMDXComponents()}>
        <div className="absolute inset-0 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) overflow-auto">
          <main className="p-10 w-full max-w-4xl mx-auto">
            <Story />
          </main>
        </div>
      </MDXProvider>
    ),
  ],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Content area with borders on the left and right sides. */
export const SideBorders: Story = {
  args: { children: null },
  render: () => (
    <Page className="border-x-4 border-theme-black px-10">
      <AboutContent />
    </Page>
  ),
};

/** Half-opacity side borders with grid background flanking the content area. */
export const SideBordersWithGrid: Story = {
  args: { children: null },
  decorators: [
    (Story) => (
      <MDXProvider components={useMDXComponents()}>
        <div
          className="absolute inset-0 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) overflow-auto"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch)
            `,
            backgroundSize: '2rem 2rem',
          }}
        >
          <main className="p-10 w-full max-w-4xl mx-auto">
            <Story />
          </main>
        </div>
      </MDXProvider>
    ),
  ],
  render: () => (
    <Page className="border-x-4 border-theme-black/50 px-10 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)">
      <AboutContent />
    </Page>
  ),
};

/** Same as SideBordersWithGrid but with 1rem grid squares. */
export const SideBordersWithSmallGrid: Story = {
  args: { children: null },
  decorators: [
    (Story) => (
      <MDXProvider components={useMDXComponents()}>
        <div
          className="absolute inset-0 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan) overflow-auto"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch)
            `,
            backgroundSize: '1rem 1rem',
          }}
        >
          <main className="p-10 w-full max-w-4xl mx-auto">
            <Story />
          </main>
        </div>
      </MDXProvider>
    ),
  ],
  render: () => (
    <Page className="border-x-4 border-theme-black/50 px-10 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)">
      <AboutContent />
    </Page>
  ),
};

/** Small grid that disappears below sm breakpoint. */
export const SideBordersWithSmallGridResponsive: Story = {
  args: { children: null },
  decorators: [
    (Story) => (
      <MDXProvider components={useMDXComponents()}>
        <div
          className="absolute inset-0 overflow-auto"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(to right, var(--background-faded-orange), var(--background-faded-cyan))
            `,
            backgroundSize: '1rem 1rem, 1rem 1rem, 100% 100%',
            backgroundAttachment: 'local, local, fixed',
          }}
        >
          <main className="p-5 sm:p-10 w-full max-w-4xl mx-auto">
            <Story />
          </main>
        </div>
      </MDXProvider>
    ),
  ],
  render: () => (
    <Page className="sm:border-x-4 border-theme-black/50 sm:px-10 bg-linear-to-r from-(--background-faded-orange) to-(--background-faded-cyan)">
      <AboutContent />
    </Page>
  ),
};

/** White page background with grid and side borders. */
export const WhiteBackground: Story = {
  args: { children: null },
  decorators: [
    (Story) => (
      <MDXProvider components={useMDXComponents()}>
        <div
          className="absolute inset-0 overflow-auto"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(rgba(0,0,0,0.2) 0.1ch, transparent 0.1ch),
              linear-gradient(to right, var(--background-faded-orange), var(--background-faded-cyan))
            `,
            backgroundSize: '1rem 1rem, 1rem 1rem, 100% 100%',
            backgroundAttachment: 'local, local, fixed',
          }}
        >
          <main className="p-5 sm:p-10 w-full max-w-4xl mx-auto">
            <Story />
          </main>
        </div>
      </MDXProvider>
    ),
  ],
  render: () => (
    <Page style={{ background: 'var(--theme-white)' }}>
      <AboutContent />
    </Page>
  ),
};
