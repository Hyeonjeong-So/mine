import React from 'react';
import Typography from '@mui/material/Typography';

const homeLogoName = 'Mine';

const HomeLogo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#fff9c4',
        textDecoration: 'none',
      }}
    >
      {homeLogoName}
    </Typography>
  );
};

export { HomeLogo };
