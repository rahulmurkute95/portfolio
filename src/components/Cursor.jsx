
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 150ms ease",
      }}
    >
      <div className="w-5 h-5 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
    </div>
  );
}

export default Cursor;
