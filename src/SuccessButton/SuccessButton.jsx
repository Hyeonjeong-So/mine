import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack sx = {{width : 100,  position : "flex"}}>
      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>
  );
}