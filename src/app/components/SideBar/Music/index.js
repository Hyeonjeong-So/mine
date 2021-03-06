import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Music = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        marginTop: '30px',
        width: '250px',
        height: '150px',
        justifyContent: 'center',
        alignContent: 'center',
        bgcolor: '#fce4ec',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          margin: 'auto',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="14">
            Like Im Gonna Lose You
          </Typography>
          <Typography variant="14" color="text.secondary" component="div">
            Meghan Trainor
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default Music;
