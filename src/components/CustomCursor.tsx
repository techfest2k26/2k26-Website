import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`transition-all duration-200 ${
            isPointer ? "w-12 h-12" : "w-8 h-8"
          } ${isClicking ? "scale-75" : "scale-100"}`}
        >
          <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-spin-slow" />
          <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-md" />
        </div>
      </div>

      {/* Glow Effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isPointer ? 1 : 0.5,
        }}
      >
        <div className={`w-32 h-32 rounded-full bg-gradient-to-r from-neon-cyan/10 via-neon-violet/10 to-neon-pink/10 blur-2xl ${isPointer ? "scale-150" : "scale-100"} transition-transform duration-300`} />
      </div>

      {/* Trail Effect */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
      </div>
    </>
  );
};

export default CustomCursor;
