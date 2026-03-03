import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/digital-ipswich.mdx';
import Page from '@/components/Page/Page';

export default function DigitalIpswichPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Digital Ipswich', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
