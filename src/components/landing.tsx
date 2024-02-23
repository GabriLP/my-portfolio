import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from './ui/animated-heading';
import AnimatedContent from './ui/animated-content';

interface WordWithKey {
  word: string;
  key: string;
}

const splitWords = (text: string): WordWithKey[] => {
  return text.split(' ').map((word: string, index: number): WordWithKey => ({
    word,
    key: `${word}-${index}`,
  }));
};

const Landing: React.FC = () => {
  const headerText1: string = "Hi there, I'm";
  const headerText2: string = "Gabriele La Piana.";
  const headerWords1: WordWithKey[] = splitWords(headerText1);
  const headerWords2: WordWithKey[] = splitWords(headerText2);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 300 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const divisor = height / 2; 
      const newOpacity = 1 - scrollY / divisor;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
    className="h-screen flex justify-center items-center p-[5%] lg:p-[4%]"
    style={{ opacity }}
  >
      <motion.div
        className="w-full text-center flex flex-col"
      >
        <AnimatedHeading 
        className="text-heading-1 text-9xl font-anton mb-4 flex flex-col" 
        tag="h1"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
          <div className="md:pl-[10%] lg:pl-[15%] text-left overflow-hidden">
            {headerWords1.map(({ word, key }) => (
              <motion.span key={key} className="inline-block" variants={itemVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
          <div className="text-left  lg:pr-[15%] lg:text-right md:text-right overflow-hidden">
            {headerWords2.map(({ word, key }) => (
              <motion.span key={key} className="inline-block" variants={itemVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        </AnimatedHeading>
        <AnimatedContent delay={1}>
        <p className='text-body-1 text-text mt-4'>
              Front-End Developer based in Palermo, Italy.
        </p>
        </AnimatedContent>
      </motion.div>
    </motion.section>
  );
};

export default Landing;