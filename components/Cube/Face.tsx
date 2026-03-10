import { XR, Work, Collaborators, AI, Showcase, Hamster } from "./Faces";

interface FaceProps {
  position: "front" | "back" | "left" | "right" | "top" | "bottom";
}

export default function Face({ position }: FaceProps) {
  return (
    <div
      className={`face face--${position} bg-theme-black`}
      data-face={position}
    >
      {position === "top" && <XR />}
      {position === "front" && <Work />}
      {position === "left" && <Collaborators />}
      {position === "back" && <AI />}
      {position === "right" && <Showcase />}
      {position === "bottom" && <Hamster />}
    </div>
  );
}
