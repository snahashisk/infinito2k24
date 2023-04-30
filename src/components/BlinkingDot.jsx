import React, { useState, useEffect } from "react";

function BlinkingDot() {
  const [color, setColor] = useState("bg-green-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "bg-green-500" ? "bg-white" : "bg-green-500"
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block w-2 h-2 rounded-full ml-1 ${color}`}></span>
  );
}

export default BlinkingDot;
