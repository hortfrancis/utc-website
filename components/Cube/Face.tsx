import { XR, Work, Vision, News, Showcase, Hamster } from './Faces';

interface FaceProps {
  position: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';
}

// function PlaceholderContent({ position }: { position: string }) {
//   return (
//     <div className='w-full h-full bg-theme-purple border-4 border-theme-black flex flex-col items-center justify-center text-white font-bold'>
//       FACE {position.toUpperCase()}
//       <div className='text-[0.5em] mt-2'>
//         Smaller text
//       </div>
//     </div>
//   );
// }

export default function Face({
  position,
}: FaceProps) {
  return (
    <div
      className={`face face--${position}`}>

      {position === 'top' && <XR />}
      {position === 'front' && <Work />}
      {position === 'left' && <Vision />}
      {position === 'back' && <News />}
      {position === 'right' && <Showcase />}
      {position === 'bottom' && <Hamster />}

      {/* <PlaceholderContent position={position} /> */}
    </div >
  );
}
