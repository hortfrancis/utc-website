import clsx from 'clsx';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const styles = clsx('my-8', className);

  return (
    <section id={id} className={styles}>
      {children}
    </section>
  );
}
