import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Landing: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Hi there, I&apos;m <br/> Gabriele La Piana.
      </Typography>
      <Typography variant="h4" component="h4">
        Front-End Developer based on Palermo, Italy.
      </Typography>
    </Box>
  );
};

export default Landing;
