import React from 'react';

import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from '@mui/icons-material';
import { Stack } from '@mui/material';

const UploadButton = () => {
  return (
    <Stack>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
};

export default UploadButton;
