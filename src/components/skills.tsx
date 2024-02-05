import React, { useRef, useEffect } from 'react';

const Skills: React.FC = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Redux', 'Bootstrap', 'Tailwind CSS', 'Material-UI',
  ];

  // Concatenate skills with separators to create a long string
  const skillSet = skills.join(' ✱ ') + ' ✱ ';

  // Use useRef to type the ref with HTMLElement
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define animation inside useEffect to ensure it's typed correctly
    let animation: Animation | null = null;

    if (marqueeRef.current) {
      const keyframes = [
        { transform: 'translateX(0%)' },
        { transform: 'translateX(-100%)' }
      ];
      const options = {
        duration: 20000, // Duration can be adjusted
        iterations: Infinity,
      };

      // Use the animate method on the current ref, checking for its existence
      animation = marqueeRef.current.animate(keyframes, options);
    }

    const handleMouseEnter = () => animation?.updatePlaybackRate(0.5);
    const handleMouseLeave = () => animation?.updatePlaybackRate(1);

    // Add event listeners if the ref is current
    marqueeRef.current?.addEventListener('mouseenter', handleMouseEnter);
    marqueeRef.current?.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners and cancel the animation
    return () => {
      marqueeRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      marqueeRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      animation?.cancel();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-heading-2 font-anton mb-4 text-center">My Tech Stack</h2>
      <div ref={marqueeRef} className="whitespace-nowrap text-heading-5 font-anton">
        {skillSet.repeat(20)} {/* Repeat the skill set to ensure it's long enough */}
      </div>
    </div>
  );
};

export default Skills;