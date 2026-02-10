import Heading from '@/components/Heading';
import NavList from '@/components/Nav/NavList';
import Page from '@/components/Page/Page';
import { workProjectLinks } from './projectLinks';

export default function WorkPage() {
  return (
    <Page>
      <Heading level={1}>Our Work</Heading>
      <div className="mt-6">
        <NavList links={workProjectLinks} size="desktop" />
      </div>
    </Page>
  );
}
