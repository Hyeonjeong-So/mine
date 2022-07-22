import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SuccessButton from './SuccessButton/styles';
import UploadButton from './UploadButton/styles';

const Profile = () => {
  return (
    <Card sx={{ marginTop: 10 }}>
      <CardMedia
        component="img"
        width="250"
        height="250"
        // src={'components/images/profile.jpeg'}
        alt="Profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HyeonJeong
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 100 }}>
          안녕하세요. 소현정입니다.
        </Typography>
      </CardContent>
      <SuccessButton />
      <UploadButton />
    </Card>
  );
};

export default Profile;
