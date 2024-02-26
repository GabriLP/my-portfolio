import React from 'react';
import Head from 'next/head';
import Landing from '../components/landing'; // Adjust the path if necessary
import About from '../components/about';
import Offer from '../components/offer';
import Projects from '../components/project-carousel';
import Skills from '../components/skills';
import Contact from '../components/contact';

const Home: React.FC = () => {
  return (
    <main className='bg-background text-white'>

      <Landing />
      <About />
      <Projects />
      <Offer />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;