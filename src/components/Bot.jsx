import React, { useState } from "react";

const Bot = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 z-[999] flex items-center gap-3 cursor-pointer transition-all duration-300"
      title="Contact Me"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label tooltip */}
      <span
        className="text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300"
        style={{
          background: "rgba(249, 115, 22, 0.95)",
          backdropFilter: "blur(10px)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Say Hello 👋
      </span>

      {/* Button */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl relative"
        style={{
          background: "#f97316",
          boxShadow: "0 0 20px rgba(249, 115, 22, 0.5), 0 4px 20px rgba(0,0,0,0.3)",
          transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Ping animation */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(249, 115, 22, 0.3)",
            animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
        <style>{`
          @keyframes ping {
            75%, 100% { transform: scale(1.8); opacity: 0; }
          }
        `}</style>
        <ion-icon name="chatbubble-ellipses" />
      </div>
    </a>
  );
};

export default Bot;
