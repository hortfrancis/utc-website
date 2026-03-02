import Breadcrumbs from '@/components/Breadcrumbs';
import Heading from '@/components/Heading';
import Page from '@/components/Page/Page';
import Section from '@/components/Section';

export default function XRPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Cube', path: '/' },
          { label: 'XR', current: true },
        ]}
      />
      <Page>
      <Heading level={1}>XR: Extended Reality</Heading>

      <Section id='what-is-xr'>
        <Heading level={2}>What is XR?</Heading>
        <p>[Explanation of what XR is...]</p>
      </Section>

      <Section id='what-is-vr'>
        <Heading level={2}>What is VR?</Heading>
        <p>[Explanation of what VR is...]</p>
      </Section>

      <Section id='what-is-ar'>
        <Heading level={2}>What is AR?</Heading>
        <p>[Explanation of what AR is...]</p>
      </Section>
    </Page>
    </>
  );
}
