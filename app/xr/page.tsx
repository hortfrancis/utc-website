import Heading from '@/components/Heading';

export default function XRPage() {
  return (
    <div className=''>
      <Heading level={1}>XR: Extended Reality</Heading>

      <section id='what-is-xr'>
        <Heading level={2}>What is XR?</Heading>
        <p>[Explanation of what XR is...]</p>
      </section>

      <section id='what-is-vr'>
        <Heading level={2}>What is VR?</Heading>
        <p>[Explanation of what VR is...]</p>
      </section>

      <section id='what-is-ar'>
        <Heading level={2}>What is AR?</Heading>
        <p>[Explanation of what AR is...]</p>
      </section>
    </div>
  );
}