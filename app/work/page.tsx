import Heading from "@/components/Heading";
import Link from "next/link";

export default function WorkPage() {

  // TODO: Make a reusable component? 
  const linkStyle = 'text-lg font-semibold hover:underline';

  return (
    <div>
      <Heading level={1}>Our Work</Heading>
      <p>[List of all examples of work ...]</p>
      <ul className='mt-4 space-y-2 list-disc list-inside'>
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
            BT Urban AR</Link>
        </li>
        <li>
          <Link
            href="/work/construct-ar" className={linkStyle}>
            Construct AR</Link>
        </li>
        <li>
          <Link
            href="/work/pop-xr" className={linkStyle}>
            Pop XR</Link>
        </li>
        <li>
          <Link
            href="/work/tracing-the-footprint" className={linkStyle}>
            Tracing the Footprint</Link>
        </li>
      </ul>
    </div>
  )
}