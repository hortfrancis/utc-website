import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/bt-manufacturing-showcase.mdx';
import Page from '@/components/Page/Page';

export default function BTManufacturingShowcasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'BT Manufacturing Showcase', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
