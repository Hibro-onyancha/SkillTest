import React, { ReactNode, useState } from "react";
import styles from "./glow.module.css";

interface Props {
  children: ReactNode;
}
function GlowElement({ children }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <button
      className={styles.glow}
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": `${position.x}px`,
          "--y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </button>
  );
}

export default GlowElement;
