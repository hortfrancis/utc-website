// import Link from "next/link";
// import Square from "./Logomark/Square";
import Logomark from './Logomark';
import Logotype from './Logotype';

interface LogoProps {
  cubeSize?: number;
  type?: 'logomark' | 'logotype' | 'full';
  lockup?: 'horizontal' | 'vertical';
  textLayout?: 'single-line' | 'stacked';
}

export default function Logo({
  cubeSize = 100, // 100px by default
  // type = 'full', // logomark & logotype by default
  lockup = 'horizontal', // 'Lockup' = the spatial arrangement of logomark & logotype
  textLayout = 'stacked', // One line per word 
}: LogoProps) {

  return (
    <div className={`flex items-center ${lockup === 'horizontal' ? 'flex-row' : 'flex-col'} gap-6`}>
      <Logomark cubeSize={cubeSize} />
      <Logotype textLayout={textLayout} />
    </div>
  );
}
