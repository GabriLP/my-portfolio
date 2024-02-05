"use client";

import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from 'next/image';


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

const Projects: React.FC = () => {

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 p-4">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-3xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.imageUrl}
                  height="1000"
                  width="1000"
                  objectFit="cover"
                  className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Repository →
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Demo
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </section>
    </>
  );
};

export default Projects;