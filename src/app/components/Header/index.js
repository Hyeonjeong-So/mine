import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Profile from './Profile';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <AppBar position="static" sx={{ color: '#fff9c4' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderMenu />
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
