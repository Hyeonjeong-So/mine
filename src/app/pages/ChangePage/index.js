import { Box, Container } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';

export const ChangePage = () => {
  return (
    <>
      <Container component="main">
        <Box
          sx={{
            width: '100%',
            height: '85%',
            borderRadius: '10%',
            border: '1px solid black',
            bgcolor: 'white',
          }}
        />
      </Container>
    </>
  );
};
