import Breadcrumbs from '@/components/Breadcrumbs';

export default function BTUrbanARLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'BT Urban.AR', current: true },
        ]}
      />
      {children}
    </>
  );
}
