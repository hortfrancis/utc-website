import Heading from "@/components/Heading";
import Link from "next/link";

export default function WorkPage() {

  // TODO: Make a reusable component? 
  const linkStyle = 'text-theme-purple font-bold hover:underline decoration-2 underline-offset-2';

  return (
    <div>
      <Heading level={1}>Our Work</Heading>
      <ul className='mt-6 space-y-4 text-xl list-disc list-inside'>
        <li>
          <Link
            href="/work/sammys-christmas-adventure" className={linkStyle}>
            Sammy&apos;s Christmas Adventure</Link>
        </li>
        <li>
          <Link
            href="/work/bt-manufacturing-showcase" className={linkStyle}>
            BT Manufacturing Showcase</Link>
        </li>
        <li>
          <Link
            href="/work/bt-urban-ar" className={linkStyle}>
            BT Urban.AR</Link>
        </li>
        <li>
          <Link
            href="/work/construct-ar" className={linkStyle}>
            Construct.AR</Link>
        </li>
        <li>
          <Link
            href="/work/pop-xr" className={linkStyle}>
            Pop.XR</Link>
        </li>
        <li>
          <Link
            href="/work/tracing-the-footprint" className={linkStyle}>
            Tracing the Footprint</Link>
        </li>
        <li>
          <Link
            href="/work/afghan-project" className={linkStyle}>
            Afghan Project</Link>
        </li>
      </ul>
    </div>
  )
}