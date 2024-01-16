import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
  'Redux', 'Bootstrap', 'Tailwind CSS', 'Material-UI'
];

const Skills: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
