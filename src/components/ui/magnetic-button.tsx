"use client";

import React, { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    gsap.to(buttonRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.5 });
  };

  const onMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.5 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={onMouseMove as any}
      onMouseLeave={onMouseLeave}
      className="relative overflow-hidden px-6 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:text-background"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
    </button>
  );
};

export default MagneticButton;