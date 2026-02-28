import FaceGrid from './FaceGrid';

export default function Vision() {
  return (
    <FaceGrid>
      <div
        className="flex items-center justify-center text-white select-none"
        style={{ gridColumn: '1 / -1', gridRow: '1 / -1' }}
      >
        Vision
      </div>
    </FaceGrid>
  );
}
