"use client";

import React, { useEffect, useRef } from "react";

const BlurryLights = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lights = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 100 + 50,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lights.forEach((light) => {
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          light.x,
          light.y,
          0,
          light.x,
          light.y,
          light.radius
        );
        gradient.addColorStop(0, `rgba(109, 40, 217, ${light.opacity})`);
        gradient.addColorStop(1, `rgba(109, 40, 217, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Move lights
        light.y += light.speed;
        if (light.y > canvas.height + light.radius) {
          light.y = -light.radius;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BlurryLights;