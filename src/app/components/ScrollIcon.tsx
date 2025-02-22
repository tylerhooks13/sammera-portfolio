// components/ScrollIcon.tsx
"use client";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollIcon() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`, // Center the plus icon
      }}
    >
      <Plus size={24} />
    </div>
  );
}
