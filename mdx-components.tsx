import Heading from '@/components/Heading';
import Anchor from '@/components/Anchor';
import type { MDXComponents } from 'mdx/types';

// Default `img` fallback is not overriden; 
// we expect to use custom `Image` from `@/components/Image` in MDX files directly, 
// in order to specify `width` & `height` for `next/image`.
const components: MDXComponents = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  p: (props) => <p className="my-4 leading-6.5" {...props} />,
  a: ({ href = '', ...props }) => <Anchor href={href} {...props} />,
  hr: (props) => <hr className="my-8 border-theme-black" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
