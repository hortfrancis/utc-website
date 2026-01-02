import clsx from 'clsx';
import Heading from '@/components/Heading';
import linkedinPosts from '@/content/news/linkedinPosts';
import EmbeddedLinkedinPost from '@/components/EmbeddedLinkedinPost';

export default function NewsPage() {

  const listStyles = clsx(
    'w-full',
    'mx-auto mt-8 space-y-6',
    'list-none',
  );

  return (
    <div>
      <Heading level={1}>News</Heading>

      <ul className={listStyles}>
        {linkedinPosts.map((post) => (
          <li key={post.id}>
            <EmbeddedLinkedinPost
              id={post.id}
              embedCode={post.embedCode}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
