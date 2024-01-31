import React, { useState } from 'react';

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
    imageUrl: 'url-to-your-image-for-project-one',
    repositoryUrl: 'https://github.com/GabriLP/carbon-emissions-app',
    demoUrl: 'https://carbon-emissions-app.vercel.app/',
  },
  {
    title: 'restful mindspace',
    description: 'A mindfulness application designed to help you relax and meditate with customizable timers and soothing sounds.',
    imageUrl: 'url-to-your-image-for-project-two',
    repositoryUrl: 'https://github.com/GabriLP/meditation-app',
    demoUrl: 'https://gabrilp.github.io/meditation-app/',
  },
  {
    title: 'MeteOggi',
    description: 'A web application that allows you to check the current weather and forecast for any location.',
    imageUrl: 'url-to-your-image-for-project-three',
    repositoryUrl: 'https://github.com/GabriLP/MeteOggi',
    demoUrl: 'https://gabrilp.github.io/MeteOggi/',
  },
  {
    title: 'CountMeIn',
    description: 'A straightforward counter application that lets you easily increase or decrease the count using intuitive buttons or keyboard keys.',
    imageUrl: 'url-to-your-image-for-project-three',
    repositoryUrl: 'https://github.com/GabriLP/counter-app',
    demoUrl: 'https://gabrilp.github.io/counter-app/',
  },
];

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <>
      <div className="flex overflow-x-auto gap-4 p-4">
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 h-screen" onClick={() => handleClickOpen(project)}>
            <div className="max-w-xs bg-white shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && open && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 ${!open ? 'hidden' : ''}`} onClick={handleClose}>
          <div className="bg-white p-6 rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
            <h6 className="text-xl font-semibold mb-2" id="project-details-title">
              {selectedProject.title}
            </h6>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto mb-4" />
            <p className="text-base mb-4" id="project-details-description">
              {selectedProject.description}
            </p>
            <a href={selectedProject.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">
              Repository
            </a>
            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;