"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CardSpotlight from './ui/card-spotlight';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardSpotlight>
      <motion.article
        className="flex h-screen w-full items-center justify-center px-4 md:px-10 lg:px-20 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full h-full">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-heading-3 pt-4 text-foreground">{project.title}</h3>
            <p className="text-body-2 text-foreground">{project.description}</p>
            <div className="flex gap-4 z-10">
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-foreground rounded-md hover:bg-secondary transition-colors duration-200"
              >
                Repository
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-primary bg-background text-foreground rounded-md hover:bg-secondary transition-colors duration-200"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center relative overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={600}
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </motion.article>
    </CardSpotlight>
  );
};

export default ProjectCard;