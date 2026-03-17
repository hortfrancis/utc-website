import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/building-projection-sammy-the-reindeer.mdx';
import Page from '@/components/Page/Page';

export default function BuildingProjectionSammyTheReindeerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: 'Building Projection Sammy the Reindeer', current: true },
        ]}
      />
      <Page>
        <Content />
      </Page>
    </>
  );
}
