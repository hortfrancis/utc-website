interface SceneProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  cubeSize: number;
}

export default function Scene({
  cubeSize,
  children
}: SceneProps) {

  return (
    <div
      className='perspective-[9999px] perspective-origin-center'
      style={{ width: `${cubeSize}px`, height: `${cubeSize}px` }}
    >
      {children}
    </div>
  );
}
