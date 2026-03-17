import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/cambridge-arts-festival-ar-trail.mdx';
import Page from '@/components/Page/Page';

export default function CambridgeArtsFestivalArTrailPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Cambridge Arts Festival AR Trail', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
