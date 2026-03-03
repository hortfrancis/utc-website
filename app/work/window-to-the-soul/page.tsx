import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/window-to-the-soul.mdx';
import Page from '@/components/Page/Page';

export default function WindowToTheSoulShowcasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Window to the Soul', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
