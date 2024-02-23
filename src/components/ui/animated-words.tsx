import React from 'react';
import { motion } from 'framer-motion';

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

interface AnimatedTextProps {
  text: string;
  split?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, split = true }) => {
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const words = splitWords(text);

  return (
    <motion.div
      className="inline-block"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '-100px'}}
    >
      {words.map(({ word, key }) => (
        <React.Fragment key={key}>
          <motion.span variants={itemVariants} className="inline-block">
            {word}
          </motion.span>
          {/* Add a space after each word if split is true */}
          {split && ' '}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default AnimatedText;