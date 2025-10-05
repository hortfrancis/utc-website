export default function Square({
  opaque = false,
}) {
  return (
    <div
      className={`w-full h-full ${opaque ? 'bg-black' : 'bg-white'}`}
    />
  );
}
