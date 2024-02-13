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

    // Change the background position every 5 seconds
    const intervalId = setInterval(moveBackground, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // No need to return a JSX element if you're only manipulating the <main> element
  return null;
};

export default BackgroundAnimation;