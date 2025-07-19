import Breadcrumbs from '@/components/Breadcrumbs';

export default function AfghanProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Afghan Project', current: true },
        ]}
      />
      {children}
    </>
  );
}
