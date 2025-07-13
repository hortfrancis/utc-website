import Heading from '@/components/Heading';

export default function AboutPage() {
  return (
    <div>
      <Heading level={1}>About</Heading>

      <section id='vision'>
        <Heading level={2}>Our Vision</Heading>
        <p>[Our vision explained ...]</p>
      </section>

      <section id='team'>
        <Heading level={2}>Team</Heading>
        <p>[Intro to team members ...]</p>
      </section>

      <section id='contact'>
        <Heading level={2}>Contact Us</Heading>
        <p>[Info on how to contact UTC ...]</p>
      </section>
    </div>
  )
}
