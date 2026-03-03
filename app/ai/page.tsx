import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/ai.mdx';
import Page from '@/components/Page/Page';

export default function AIPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'AI', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
