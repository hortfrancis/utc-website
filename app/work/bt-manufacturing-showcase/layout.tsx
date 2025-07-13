import Breadcrumbs from '@/components/Breadcrumbs';

export default function BTManufacturingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'BT Manufacturing Showcase', current: true },
        ]}
      />
      {children}
    </>
  );
}
