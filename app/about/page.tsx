import Link from 'next/link';
import Heading from '@/components/Heading';
import Section from '@/components/Section';

export default function AboutPage() {
  return (
    <div>
      <Heading level={1}>About</Heading>

      <Section id='vision'>
        <Heading level={2}>Our Vision</Heading>
        <p>[Our vision explained ...]</p>
      </Section>

      <Section id='team'>
        <Heading level={2}>Team</Heading>
        <p>[Intro to team members ...]</p>
      </Section>

      <Section id='contact'>
        <p><Link href='/contact' className='text-blue-600 hover:underline'>Get in touch with us</Link></p>
      </Section>
    </div>
  )
}
