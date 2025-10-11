import Heading from '@/components/Heading';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  p: (props) => <p className="my-4 leading-6.5" {...props} />,
  a: ({ href = '', ...props }) => {
    const linkStyle = 'text-theme-purple font-semibold hover:underline decoration-2 underline-offset-2';

    const isExternal = href.startsWith('http');
    return isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle} {...props} />
    ) : (
      // Use next/link for internal links for client-side navigation
      <Link href={href} className={linkStyle} {...props} />
    );
  },
  hr: (props) => <hr className="my-8 border-theme-black" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
