import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

const isStorybook = process.env.STORYBOOK === '1' || process.env.STORYBOOK_BUILD === '1';
if (!isStorybook) {
  void import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
}
