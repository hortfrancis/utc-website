import Breadcrumbs from '@/components/Breadcrumbs';
import Content from '@/content/about.mdx'
import Page from '@/components/Page/Page'

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'About', current: true },
        ]}
      />
      <Page>
      <Content />
    </Page>
    </>
  )
}
