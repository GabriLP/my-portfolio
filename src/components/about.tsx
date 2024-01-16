import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1"> 
        I have 1+ year of experience in the industry, working with technologies like React, Next.js, TypeScript, and Redux. 
        I&apos;m constantly learning and staying up-to-date with the latest technologies in web development.
        I am committed to delivering high-quality code with meticulous attention to detail, ensuring every project is robust and scalable.
      </Typography>
      {/* You can add more personal details, experiences, and skills here */}
    </Box>
  );
};

export default About;