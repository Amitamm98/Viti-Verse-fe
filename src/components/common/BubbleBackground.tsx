import React, { useState, useEffect } from "react";

const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<
    { id: number; size: number; x: number; y: number; speed: number }[]
  >([]);

  useEffect(() => {
    const bubbleCount = 40;
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 1 + 0.2,
    }));
    setBubbles(newBubbles);

    const animate = () => {
      setBubbles((prev) =>
        prev.map((b) => ({
          ...b,
          y: b.y - b.speed < -50 ? window.innerHeight + 50 : b.y - b.speed,
        }))
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bg-white/30 rounded-full backdrop-blur-sm" //
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
          }}
        />
      ))}
    </div>
  );
};
export default BubbleBackground ;