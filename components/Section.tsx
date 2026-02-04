import clsx from 'clsx';

export const SECTION_DATA_TESTID = 'Section';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const styles = clsx('my-8', className);

  return (
    <section data-testid={SECTION_DATA_TESTID} id={id} className={styles}>
      {children}
    </section>
  );
}
