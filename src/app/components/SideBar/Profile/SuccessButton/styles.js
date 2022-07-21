import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SuccessButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        출석
      </Button>
    </Stack>
  );
}
