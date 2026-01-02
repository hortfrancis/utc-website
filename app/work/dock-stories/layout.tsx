import Breadcrumbs from '@/components/Breadcrumbs';

export default function ConstructARLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Dock Stories', current: true },
        ]}
      />
      {children}
    </>
  );
}
