import React from 'react';
import Box from '@mui/material/Box';

// import DarkMode from './DarkMode/DarkMode';
import AdbIcon from '@mui/icons-material/Adb';
import { HomeLogo } from 'app/components/Header/HeaderMenu/HomeLogo';
import MenuButton from 'app/components/Header/HeaderMenu/MenuButton';

const pages = [
  { pageName: 'HOME', pageAddress: '/' },
  { pageName: 'CALENDAR', pageAddress: '/calendar' },
  { pageName: 'DIARY', pageAddress: '/diary' },
  { pageName: 'TODO', pageAddress: '/todo' },
];

const HeaderMenu = () => {
  return (
    <>
      <HomeLogo />
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <MenuButton
            key={page.pageName}
            pageName={page.pageName}
            pageAddress={page.pageAddress}
          />
        ))}
      </Box>
    </>
  );
};

export default HeaderMenu;
