import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/construct-ar.mdx';
import Page from '@/components/Page/Page';

export default function ConstructARPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Construct.AR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
