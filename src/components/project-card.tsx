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
    index: number;
}

const itemVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }
    }
  };


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
      <CardSpotlight>
        <motion.article
        className="flex h-screen w-full items-center justify-center px-4 md:px-10 lg:px-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
        >
            <div className="grid grid-cols-1 gap-4 items-center w-full h-full">
            <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-heading-3 font-anton pt-4">{project.title}</h3>
                <p className="text-body-2 text-gray-300">{project.description}</p>
                <div className="flex gap-4 z-10">
                <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition-colors duration-200"
                    >
                    Repository
                </a>
                <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-black bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                    Demo
                </a>
                </div>
            </div>
            <div className="flex justify-center items-center md:w-[80%] relative overflow-hidden">
                <div style={{ width: '100%', paddingTop: '65%', position: 'relative' }}>
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-0 left-0 w-full h-full"
                    />
                </div>
            </div>
            </div>
        </motion.article>
      </CardSpotlight>
    );
  };
  
  export default ProjectCard