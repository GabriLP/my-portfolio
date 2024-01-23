import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1"> 
        I started web development over a year ago and love how it blends thinking and creativity. <br/>

        What excites me most about this field is the ability to positively impact both businesses and end-users. <br/>

        Continually updating my skills with the latest technologies, I&apos;m dedicated to crafting high-quality, clean, detail-oriented code.
      </Typography>

      {/* You can add more personal details, experiences, and skills here */}
    </Box>
  );
};

export default About;