import React from 'react';
import Head from 'next/head';
import Landing from '../components/landing'; // Adjust the path if necessary
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my Next.js portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;