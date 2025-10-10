import Image from 'next/image';

interface TestimonialProps {
  name: string;
  job: string;
  organisation: string;
  photo?: string; // Prefixed automatically with `@/public/images/testimonials/`
  children: React.ReactNode;
}

export default function Testimonial({
  name,
  job,
  organisation,
  photo,
  children
}: TestimonialProps) {

  const imageUrl = photo ? `@/public/images/testimonials/${photo}` : null;

  return (
    <div>
      <div>{name}</div>
      <div>{job}</div>
      <div>{organisation}</div>
      {imageUrl && (
        <Image src={imageUrl} alt={name} width={100} height={100} />
      )}
      <div>{children}</div>
    </div>
  );
}
