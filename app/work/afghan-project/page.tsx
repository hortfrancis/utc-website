import Breadcrumbs from '@/components/Breadcrumbs';
import Heading from '@/components/Heading';
import Page from '@/components/Page/Page';

export default function AfghanProjectShowcasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Afghan Project', current: true },
        ]}
      />
      <Page>
      <Heading level={1}>Afghan Project Showcase</Heading>
      <p>[Description of Afghan Project Showcase...]</p>

    </Page>
    </>
  );
}
