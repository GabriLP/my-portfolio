import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import ProjectCard from './project-card';


// Extended type for project
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  demoUrl: string;
}

// Sample data for projects
const projects: Project[] = [
  {
    title: 'GlobalEmissions',
    description: 'A web application that provides users with the ability to analyze global emissions data based on country selection, geographical coordinates, and specific pollutants.',
    imageUrl: '/projects/globemiss.png',
    repositoryUrl: 'https://github.com/GabriLP/carbon-emissions-app',
    demoUrl: 'https://carbon-emissions-app.vercel.app/',
  },
  {
    title: 'restful mindspace',
    description: 'A mindfulness application designed to help you relax and meditate with customizable timers and soothing sounds.',
    imageUrl: '/projects/restfulmindspace.png',
    repositoryUrl: 'https://github.com/GabriLP/meditation-app',
    demoUrl: 'https://gabrilp.github.io/meditation-app/',
  },
  {
    title: 'MeteOggi',
    description: 'A web application that allows you to check the current weather and forecast for any location.',
    imageUrl: '/projects/meteoggi.png',
    repositoryUrl: 'https://github.com/GabriLP/MeteOggi',
    demoUrl: 'https://gabrilp.github.io/MeteOggi/',
  },
  {
    title: 'CountMeIn',
    description: 'A straightforward counter application that lets you easily increase or decrease the count using intuitive buttons or keyboard keys.',
    imageUrl: '/projects/countmein.png',
    repositoryUrl: 'https://github.com/GabriLP/counter-app',
    demoUrl: 'https://gabrilp.github.io/counter-app/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ProjectsCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-303%"]);


  return (
    <section ref={targetRef} className="relative h-[350vh]">
      <div className=" px-[4%] sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pr-[6%] md:pr-3" variants={containerVariants} initial="hidden" animate="show">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCarousel