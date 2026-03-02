import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/pop-xr.mdx';
import Page from '@/components/Page/Page';

export default function PopXRPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Pop.XR', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
