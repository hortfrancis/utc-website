import React from "react";
import { XR, Work, Vision, News, Showcase, Hamster } from "./Faces";

interface FaceProps {
  position: "front" | "back" | "left" | "right" | "top" | "bottom";
  onButtonClick?: (position: FaceProps["position"]) => void;
}

export default function Face({ position, onButtonClick }: FaceProps) {
  return (
    <div className={`face face--${position}`}>
      {position === "top" && <XR />}
      {position === "front" && <Work />}
      {position === "left" && <Vision />}
      {position === "back" && <News />}
      {position === "right" && <Showcase />}
      {position === "bottom" && <Hamster />}

      {/* Center button (PoC click target) */}
      <button
        type="button"
        className="face__button"
        aria-label={`Open ${position}`}
        // Prevent the cube drag from starting when pressing the button
        onPointerDownCapture={(e) => e.stopPropagation()}
        onClick={(e) => {
          // For the alert() prototype: avoid leaving focus on the button,
          // which can make the next drag attempt feel "blocked".
          (e.currentTarget as HTMLButtonElement).blur();

          if (onButtonClick) onButtonClick(position);
          else alert(`Clicked ${position}`);
        }}
      >
        {position}
      </button>
    </div>
  );
}
