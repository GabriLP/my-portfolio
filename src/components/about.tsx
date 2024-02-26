import React from 'react';
import AnimatedHeading from './ui/animated-heading';
import AnimatedText from './ui/animated-words';
import AnimatedContent from './ui/animated-content';

const About: React.FC = () => {
  return (
    <section id='about' className="h-screen flex flex-col p-[4%]">
      <AnimatedHeading
        tag='h2' 
        className="unselectable text-heading-2 text-6xl font-anton mb-4 overflow-hidden py-8"
      >
      <AnimatedText text='About me' split={true} />
      </AnimatedHeading>
      <AnimatedContent delay={0.7}>
      <p className="text-body-1 text-gray-300 flex justify-end"> 
        I started web development over a year ago and love how it blends thinking and creativity. <br />

        What excites me most about this field is the ability to positively impact both businesses and end-users. <br />

        Continually updating my skills with the latest technologies, I&apos;m dedicated to crafting high-quality, clean, detail-oriented code.
      </p>
      </AnimatedContent>
    </section>
  );
};

export default About;