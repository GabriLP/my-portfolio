import React, { useRef, useEffect, RefObject } from 'react';
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';
import AnimatedContent from './ui/animated-content';

const useMarquee = (
  ref: RefObject<HTMLDivElement>,
  initialSpeed: number,
  direction: 'left' | 'right' = 'left'
) => {
  const speedRef = useRef<number>(initialSpeed);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let xPos = 0;
    const animate = () => {
      xPos += direction === 'left' ? -speedRef.current : speedRef.current;
      if (direction === 'left' && -xPos >= element.scrollWidth / 2) xPos = 0;
      if (direction === 'right' && xPos >= 0) xPos = -element.scrollWidth / 2;
      element.style.transform = `translateX(${xPos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleMouseEnter = () => speedRef.current = 0.15;
    const handleMouseLeave = () => speedRef.current = initialSpeed;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, initialSpeed, direction]); // React guarantees ref object stability
};

const Skills = () => {
  const skills1 = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Redux', 'Tailwind CSS', 'Material-UI',
  ];

  const skills2 = [
    'Framer Motion', 'Lenis', 'Axios', 'Lodash', 'Webpack', 'Babel', 'Context API',
    'Hooks', 'Recharts', 'Git'
  ];

  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  useMarquee(marqueeRef1, 0.3, 'left');
  useMarquee(marqueeRef2, 0.3, 'right');

  const renderSkills = (skills: string[]) => skills.map((skill, index) => (
    <React.Fragment key={index}>
      {skill} <span className="rotate-symbol text-different-color">❋</span>{' '}
    </React.Fragment>
  ));

  return (
    <section className="w-full h-screen overflow-hidden p-[4%]">
      <AnimatedHeading 
        tag='h2'
        className="text-heading-2 font-anton mb-4 py-8 text-center overflow-hidden"
        >
      <AnimatedText text='Which tools I use' split={true} />
      </AnimatedHeading>
      <AnimatedContent delay={0.7}>
      <div ref={marqueeRef1} className="p-[1rem] my-4 whitespace-nowrap text-heading-5 font-anton">
      {renderSkills(skills1)} {renderSkills(skills1)}
      </div>
      <div ref={marqueeRef2} className="p-[1rem] my-4 whitespace-nowrap text-heading-5 font-anton mt-4">
          {renderSkills(skills2)} {renderSkills(skills2)}
      </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;