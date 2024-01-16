import React, { useState, Fragment } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box } from '@mui/material';

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
  // Initialize selectedProject with null and only render if it's not null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null); // Reset the selected project on close
    setOpen(false);
  };

  return (
    <Fragment>
      <div style={{ overflowX: 'auto', display: 'flex', gap: '16px', padding: '16px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ flex: '0 0 auto' }} onClick={() => handleClickOpen(project)}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="project-details-title"
          aria-describedby="project-details-description"
        >
          <Box>
            <Typography id="project-details-title" variant="h6" component="h2">
              {selectedProject.title}
            </Typography>
            <Typography id="project-details-description" sx={{ mt: 2 }}>
              {selectedProject.description}
            </Typography>
          </Box>
        </Modal>
      )}
    </Fragment>
  );
};

export default Projects;