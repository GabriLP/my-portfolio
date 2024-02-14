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
      <Head>
        <title>Gabriele La Piana — Front End Developer</title>
        <meta name="description" content="Welcome to my portfolio, where I showcase my personal projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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