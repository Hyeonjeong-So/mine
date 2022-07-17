import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Profile from 'app/components/Header/Profile';
import HeaderMenu from 'app/components/Header/HeaderMenu';
import { HeaderWrapper } from 'app/components/Header/styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <AppBar position="static" sx={{ color: '#fff9c4' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HeaderMenu />
            <Profile />
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;
