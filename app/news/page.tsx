import Breadcrumbs from '@/components/Breadcrumbs';
import clsx from 'clsx';
import Heading from '@/components/Heading';
import Page from '@/components/Page/Page';
import linkedinPosts from '@/content/news/linkedinPosts';
import LinkedinEmbed from '@/components/LinkedinEmbed/LinkedinEmbed';

export default function NewsPage() {

  const listStyles = clsx(
    'w-full',
    'mx-auto mt-8 space-y-6',
    'list-none',
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'News', current: true },
        ]}
      />
      <Page>
      <Heading level={1}>News</Heading>

      <ul className={listStyles}>
        {linkedinPosts.map((post) => (
          <li key={post.id}>
            <LinkedinEmbed
              src={post.src}
              height={post.height}
            />
          </li>
        ))}
      </ul>
    </Page>
    </>
  )
}
