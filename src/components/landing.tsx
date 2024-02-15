import React from 'react';
import { useAnimation } from 'framer-motion';
import AnimatedHeading from './ui/animated-heading';

const Landing: React.FC = () => {
  const controls = useAnimation();

  // Spring configuration for hover state
  const hoverSpring = {
    type: "spring",
    stiffness: 250,
    damping: 15,
    mass: 0.8,
    velocity: 2, // Adding an initial velocity for a quicker start
  };
  
  const leaveSpring = {
    type: "spring",
    stiffness: 100,
    damping: 5,
    mass: 0.3,
    velocity: -2, // Negative velocity for a quicker initial pull back
  };

  // Function to trigger on mouse enter
  const handleStart = () => {
    controls.start({
      scale: 1,
      fontWeight: 800,
      transition: hoverSpring,
    });
  };

  // Function to trigger on mouse leave
  const handleEnd = () => {
    controls.start({
      scale: 1,
      fontWeight: 400,
      transition: leaveSpring,
    });
  };

  return (
    <section className="h-screen flex justify-center items-center p-[4%]">
      <div className="w-full text-center flex flex-col gap-y-3">
        <AnimatedHeading 
          tag='h1'
          className="text-heading-1 text-9xl font-anton mb-4 flex flex-col"
        >
          <span className="pl-[15%] text-left">Hi there, I&apos;m </span>
          <span className="pr-[15%] text-right">Gabriele La Piana.</span>
        </AnimatedHeading>
        <p className="text-body-1 text-text mt-4">
          Front-End Developer based in Palermo, Italy.
        </p>
      </div>
    </section>
  );
};

export default Landing;