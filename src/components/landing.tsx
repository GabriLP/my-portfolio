import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Landing: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello, world!
      </Typography>
      <Typography variant="subtitle1">
        I&apos;m Gabriele, a Front-End Developer focused on crafting dynamic and interactive user interfaces
      </Typography>
    </Box>
  );
};

export default Landing;
