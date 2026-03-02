import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../docs/storybook/intro.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  managerHead: (head) =>
    head.replace(/<title>.*?<\/title>/, '<title>UTC Design System – Storybook</title>'),
  staticDirs: ['../public'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};

export default config;
