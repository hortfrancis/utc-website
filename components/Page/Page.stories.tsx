import type { Meta, StoryObj } from '@storybook/nextjs';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '@/mdx-components';
import Page from './Page';
import AboutContent from '@/content/about.mdx';

const meta = {
  title: 'Pages/Page',
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

export const Default: Story = {
  args: {
    children: 'Hello',
  },
};

export const About: Story = {
  args: { children: null },
  render: () => (
    <Page>
      <AboutContent />
    </Page>
  ),
};
