import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/xr.mdx';
import Page from '@/components/Page/Page';

export default function XRPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'XR', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
