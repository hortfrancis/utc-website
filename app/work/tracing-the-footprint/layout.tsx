import Breadcrumbs from '@/components/Breadcrumbs';

export default function TracingFootprintLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Tracing the Footprint', current: true },
        ]}
      />
      {children}
    </>
  );
}
