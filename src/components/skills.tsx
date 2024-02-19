import React, { useRef, useEffect, RefObject } from 'react';
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';
import AnimatedContent from './ui/animated-content';

const useMarquee = (ref: RefObject<HTMLDivElement>, initialSpeed: number) => {
  const speedRef = useRef<number>(initialSpeed);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let xPos = 0;
    const animate = () => {
      xPos -= speedRef.current;
      if (-xPos >= element.scrollWidth / 2) xPos = 0;
      element.style.transform = `translateX(${xPos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleMouseEnter = () => speedRef.current = 0.25;
    const handleMouseLeave = () => speedRef.current = initialSpeed;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, initialSpeed]); // React guarantees ref object stability
};

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Redux', 'Bootstrap', 'Tailwind CSS', 'Material-UI',
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarquee(marqueeRef, 0.5); // Custom hook for marquee animation

  const skillSet = skills.map((skill, index) => (
    <React.Fragment key={index}>
      {skill} <span className="rotate-symbol text-different-color">❋</span>{' '}
    </React.Fragment>
  ));

  return (
    <section className="w-full h-screen overflow-hidden">
      <AnimatedHeading 
        tag='h2'
        className="text-heading-2 font-anton mb-4 text-center overflow-hidden"
        >
      <AnimatedText text='My tech stack' split={true} />
      </AnimatedHeading>
      <AnimatedContent delay={1}>
      <div ref={marqueeRef} className="neon-sign flicker whitespace-nowrap text-heading-5 font-anton">
        {skillSet} {skillSet} {/* Render the skill set twice for seamless loop */}
      </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;