import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/contact.mdx';
import Page from '@/components/Page/Page';

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Contact', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
