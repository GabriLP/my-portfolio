import React from 'react';
import Landing from '../components/landing'; // Adjust the path if necessary
import About from '../components/about';
import Offer from '../components/offer';
import Projects from '../components/project-carousel';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Navbar from '../components/navbar';
import ThemeToggle from '@/components/theme-toggle';

const Home: React.FC = () => {
  return (
    <main className='min-h-screen relative'>
      <Navbar />
      <ThemeToggle />
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