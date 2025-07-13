import Breadcrumbs from '@/components/Breadcrumbs';

export default function SammysXmasAdventureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Sammy\'s Christmas Adventure', current: true },
        ]}
      />
      {children}
    </>
  );
}
