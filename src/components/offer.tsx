import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';

interface OfferCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, Icon }) => {
  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', m: 2, backgroundColor: '#101010', color: 'white' }}>
      <CardContent>
        <Icon style={{ fontSize: 40, color: 'white' }} />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Offer: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        My expertise
      </Typography>
      <Grid container justifyContent="center">
        <OfferCard
          title="Accessibility"
          description="Dedicated to creating inclusive web experiences that are accessible to all users, regardless of their abilities."
          Icon={AccessibilityNewIcon}
        />
        <OfferCard
          title="Performance"
          description="Focused on optimizing web applications for speed and efficiency to enhance user experience and engagement."
          Icon={SpeedIcon}
        />
        <OfferCard
          title="Responsive Design"
          description="Expert in crafting websites that provide an optimal viewing experience across a wide range of devices."
          Icon={DevicesIcon}
        />
        <OfferCard
          title="SEO Optimization"
          description="Skilled in optimizing websites to rank higher in search engine results, increasing visibility and traffic."
          Icon={SearchIcon}
        />
        {/* Add more cards as needed */}
      </Grid>
    </>
  );
};

export default Offer;
