import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedContentProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children, delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;