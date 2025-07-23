import React, { useEffect, useRef } from "react";

export default function AppWrapper({ children }) {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const updateMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", updateMouse);

    const animate = () => {
      if (glow) {
        glow.style.transform = `translate(${mouseX - 150}px, ${mouseY - 150}px)`; // centered with bigger size
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => document.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Cursor Glow */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,149,135,0.45), transparent 50%)",
          pointerEvents: "none",
          filter: "blur(70px)",
          zIndex: 0,
          mixBlendMode: "screen",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Actual App */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
