import React, { useEffect, useRef, useState } from 'react';

const Landing: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null); // Ref for the h1 element
  const [fontWeight, setFontWeight] = useState(200); // Starting font weight

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2));
        // Normalize distance to a value between 200 and 800 (for font weight)
        const maxDistance = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
        const normalizedWeight = 200 + (600 * (distance / maxDistance));
        setFontWeight(Math.min(Math.max(normalizedWeight, 200), 800));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="h-screen flex justify-center items-center p-[4%]">
      <div className="w-full text-center flex flex-col gap-y-3">
        <h1 ref={ref} className="text-heading-1 text-9xl font-anton mb-4 flex flex-col" style={{ fontWeight: fontWeight }}>
          <span className="pl-[15%] text-left">Hi there, I&apos;m </span>
          <span className="pr-[15%] text-right">Gabriele La Piana.</span>
        </h1>
        <p className="text-body-1 text-text mt-4">
          Front-End Developer based in Palermo, Italy.
        </p>
      </div>
    </section>
  );
};

export default Landing;