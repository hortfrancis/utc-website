import { XR, Work, Collaborators, News, Showcase, Hamster } from "./Faces";

interface FaceProps {
  position: "front" | "back" | "left" | "right" | "top" | "bottom";
}

export default function Face({ position }: FaceProps) {
  return (
    <div
      className={`face face--${position}`}
      data-face={position}
    >
      {position === "top" && <XR />}
      {position === "front" && <Work />}
      {position === "left" && <Collaborators />}
      {position === "back" && <News />}
      {position === "right" && <Showcase />}
      {position === "bottom" && <Hamster />}
    </div>
  );
}
