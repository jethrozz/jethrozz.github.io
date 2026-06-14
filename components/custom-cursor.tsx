"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 
      window.matchMedia("(pointer: coarse)").matches || 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0;
    
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    document.documentElement.classList.add("custom-cursor-active");

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target && 
        target.closest("a, button, [role='button'], input, select, textarea, .pixel-button")
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target && 
        target.closest("a, button, [role='button'], input, select, textarea, .pixel-button")
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div 
      className="fixed pointer-events-none z-50 left-0 top-0"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
      }}
    >
      <div 
        className={`border-2 border-black transition-all duration-100 ease-out ${
          isHovered 
            ? "w-6 h-6 bg-primary rotate-45 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
            : "w-3 h-3 bg-primary"
        }`}
      />
    </div>
  );
};

export default CustomCursor;