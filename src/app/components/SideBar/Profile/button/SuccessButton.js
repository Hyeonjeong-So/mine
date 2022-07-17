import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SuccessButton = () => {
  return (
    <Stack sx={{ width: 100, position: 'flex' }}>
      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>
  );
};

export default SuccessButton;
