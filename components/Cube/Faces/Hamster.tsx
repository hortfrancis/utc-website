import FaceGrid from './FaceGrid';

export default function Hamster() {
  return (
    <FaceGrid>
      <div
        className="flex items-center justify-center text-black select-none"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        Hamster
      </div>
    </FaceGrid>
  );
}
