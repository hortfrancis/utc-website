import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/bt-urban-ar.mdx';
import Page from '@/components/Page/Page';

export default function BTUrbanARPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'BT Urban.AR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
