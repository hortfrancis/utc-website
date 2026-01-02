import type { LinkedinPost } from '@/content/news/linkedinPosts.types';

// Simple component to render an embedded LinkedIn post, given its raw embed code 
export default function EmbeddedLinkedinPost({
  id,
  embedCode
}: LinkedinPost) {
  // The parent component that renders the mapped list still needs the `key` prop; 
  // `data-linkedin-post-id` is just an additional identifier for debugging purposes.
  return (
    <div
      data-linkedin-post-id={id}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}
