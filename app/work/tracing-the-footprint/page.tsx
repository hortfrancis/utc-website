import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/tracing-the-footprint.mdx';
import Page from '@/components/Page/Page';

export default function TracingFootprintPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Tracing the Footprint', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
