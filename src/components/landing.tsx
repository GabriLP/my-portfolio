import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adjust stagger timing for a slower effect
      },
    },
  };

  const itemVariants = {
    hidden: { y: 200 }, // Start lower to slide up without affecting opacity
    visible: {
      y: 0,
      transition: {
        duration: 0.5, // Longer duration for a slower animation
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  useEffect(() => {
    // Assuming the animation time and staggering, calculate when the last heading animation will complete
    const totalHeaderWords = headerWords1.length + headerWords2.length;
    const animationDelay = totalHeaderWords * 0.1 * 0.5; // Total words * stagger delay * duration
    setTimeout(() => setHeaderAnimationComplete(true), animationDelay * 3000); // Convert to milliseconds
  }, []);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const divisor = height / 2; // Adjust this value as needed
      const newOpacity = 1 - scrollY / divisor;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
    className="h-screen flex justify-center items-center p-[15%] lg:p-[4%]"
    style={{ opacity }}
  >
      <motion.div
        className="w-full text-center flex flex-col gap-y-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-heading-1 text-9xl font-anton mb-4 flex flex-col">
          <div className="lg:pl-[15%] text-left overflow-hidden">
            {headerWords1.map(({ word, key }) => (
              <motion.span key={key} className="inline-block" variants={itemVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
          <div className="text-left lg:pr-[15%] lg:text-right overflow-hidden">
            {headerWords2.map(({ word, key }, index) => (
              <motion.span key={key} className="inline-block" variants={itemVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        </h1>
        <AnimatePresence>
          {headerAnimationComplete && (
            <motion.p
              className="text-body-1 text-text mt-4"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              Front-End Developer based in Palermo, Italy.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Landing;