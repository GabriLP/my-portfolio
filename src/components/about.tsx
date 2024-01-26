import React from 'react';

const About: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
      <h2 className="text-6xl font-anton mb-4">
        ABOUT ME
      </h2>
      <p className="text-base"> 
        I started web development over a year ago and love how it blends thinking and creativity. <br />

        What excites me most about this field is the ability to positively impact both businesses and end-users. <br />

        Continually updating my skills with the latest technologies, I&apos;m dedicated to crafting high-quality, clean, detail-oriented code.
      </p>
    </div>
  );
};

export default About;