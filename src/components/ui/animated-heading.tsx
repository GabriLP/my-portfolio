import React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type AnimatedHeadingProps = {
  className?: string;
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  variants?: any; // Might want to define a more precise type for variants
  initial?: string;
  animate?: string;
};

const hoverSpring = {
  type: "spring",
  stiffness: 250,
  damping: 15,
  mass: 0.8,
  velocity: 2,
};

const leaveSpring = {
  type: "spring",
  stiffness: 100,
  damping: 4,
  mass: 0.3,
  velocity: -2,
};

const useHoverAnimation = (initial: any, animate: any) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set(initial);
    
    if (animate) {
      controls.start(animate);
    }
  }, [controls, initial, animate]);

  const handleStart = () => {
    controls.start({
      fontWeight: 800,
      transition: hoverSpring,
    });
  };

  const handleEnd = () => {
    controls.start({
      fontWeight: 400,
      transition: leaveSpring,
    });
  };

  return { controls, handleStart, handleEnd };
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ className, children, tag = 'h1', variants, initial, animate }) => {
  const { controls, handleStart, handleEnd } = useHoverAnimation(initial, animate);
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      className={className}
      animate={controls}
      initial={initial} // Now using the prop
      variants={variants} // Now using the prop
      onMouseEnter={handleStart}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedHeading;