"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DynamicBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based animations
  const lightRayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const gradientX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Parallax Layer 1: Soft Light Rays */}
      <motion.div
        style={{ opacity: lightRayOpacity, y: parallaxY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
      />

      {/* Parallax Layer 2: Flowing Gradient */}
      <motion.div
        style={{ x: gradientX }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
      />


      {/* Particle Effects */}
      <ParticleEffects />
    </div>
  );
};

const ParticleEffects = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 w-full h-full";
    document.querySelector(".dynamic-background")?.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(109, 40, 217, ${particle.opacity})`;
        ctx.fill();

        // Move particles
        particle.y += particle.speed;
        if (particle.y > canvas.height + particle.size) {
          particle.y = -particle.size;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return null;
};

export default DynamicBackground;