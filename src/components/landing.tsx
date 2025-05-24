"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from './ui/animated-heading';
import AnimatedContent from './ui/animated-content';

const Landing: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const newOpacity = 1 - scrollY / height;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      className="h-screen flex justify-center items-center p-8 lg:p-16"
      style={{ opacity }}
      id="home"
      aria-label="Home Section"
    >
      <motion.div className="w-full text-center flex flex-col">
        <AnimatedHeading
          className="unselectable text-heading-1 md:text-7xl lg:text-8xl font-bold mb-4 flex flex-col font-display"
          tag="h1"
        >
          Hi there, I'm <span className="text-primary">Gabriele La Piana</span>
        </AnimatedHeading>
        <AnimatedContent delay={1}>
          <p className="text-body-1 mt-4">
            Front-End Developer based in Palermo, Italy.
          </p>
        </AnimatedContent>
      </motion.div>
    </motion.section>
  );
};

export default Landing;