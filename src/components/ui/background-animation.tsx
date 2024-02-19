import React, { useState, useEffect } from 'react';

const BackgroundAnimation = () => {
  useEffect(() => {
    const moveBackground = () => {
      // Generate random positions for X and Y
      const xPos = Math.floor(Math.random() * 100);
      const yPos = Math.floor(Math.random() * 100);
      
      // Select the main element and update its backgroundPosition style
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.backgroundPosition = `${xPos}% ${yPos}%`;
      }
    };

    const intervalId = setInterval(moveBackground, 100);

    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default BackgroundAnimation;