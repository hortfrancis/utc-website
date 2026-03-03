import Breadcrumbs from '@/components/Breadcrumbs';
import Heading from '@/components/Heading';
import Page from '@/components/Page/Page';

export default function WindowToTheSoulShowcasePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Window to the Soul', current: true },
        ]}
      />
      <Page>
      <Heading level={1}>Window to the Soul</Heading>
      <p>[Description of Window to the Soul...]</p>

    </Page>
    </>
  );
}
