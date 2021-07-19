import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="Cursor">
      <AnimatedCursor
        innerSize={5}
        outerSize={30}
        color="247, 127, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
    </div>
  );
}
