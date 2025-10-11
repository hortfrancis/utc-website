import Breadcrumbs from '@/components/Breadcrumbs';

export default function PopXRLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Pop.XR', current: true },
        ]}
      />
      {children}
    </>
  );
}
