import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/dock-stories.mdx';
import Page from '@/components/Page/Page';

export default function DockStoriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Dock Stories', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
