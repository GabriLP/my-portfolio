import { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export interface WordWithKey {
  word: string;
  key: string;
}

export const useWordAnimation = (texts: string[]) => {
  const controls = useAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);

  const splitWords = (text: string): WordWithKey[] => {
    return text.split(' ').map((word, index) => ({
      word,
      key: `${word}-${index}`,
    }));
  };

  const words = texts.map(splitWords).flat();

  // Trigger animations on page load
  const triggerPageLoadAnimation = () => {
    const totalWords = words.length;
    const animationDelay = totalWords * 100 * 0.1 + 500; // Adjust based on your stagger and duration
    controls.start("visible").then(() => {
      setTimeout(() => setAnimationComplete(true), animationDelay);
    });
  };

  // Placeholder for scroll-triggered animation setup
  const triggerScrollAnimation = () => {
    // Implement scroll-triggered animation logic here
  };

  return { words, controls, animationComplete, triggerPageLoadAnimation, triggerScrollAnimation };
};
