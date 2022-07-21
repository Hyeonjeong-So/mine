import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SuccessButton from './SuccessButton/styles';
import UploadButton from './UploadButton/styles';

const Profile = () => {
  return (
    <Card sx={{ maxWidth: 250, height: 500, marginTop: 10 }}>
      <CardMedia
        component="img"
        height="250"
        src="public/images/profile.jpeg"
        alt="Profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 100 }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <SuccessButton />
      <UploadButton />
    </Card>
  );
};

export default Profile;
