interface LogotypeProps {
  textLayout: 'single-line' | 'stacked';
}

export default function Logotype({ textLayout }: LogotypeProps) {
  return (
    <div className={`text-md font-bold leading-[1.25] ${textLayout === 'stacked' ? 'flex flex-col' : 'flex-row'}`}>
      <span>Urban</span>
      <span>Tech</span>
      <span>Creative</span>
    </div>
  );
}