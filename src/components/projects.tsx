import React, { useState } from 'react';

// Define the type for project
interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

// Sample data for projects
const projects: Project[] = [
  // ... your projects
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
          <div key={index} className="flex-shrink-0" onClick={() => handleClickOpen(project)}>
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
            <p className="text-base" id="project-details-description">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;