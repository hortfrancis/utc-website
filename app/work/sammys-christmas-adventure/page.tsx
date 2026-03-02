import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/work/sammys-christmas-adventure.mdx';
import Page from '@/components/Page/Page';

export default function SammysXmasAdventurePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'Work', path: '/work' },
          { label: "Sammy's Christmas Adventure", current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  );
}
