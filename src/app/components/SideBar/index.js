import React from 'react';

import { SideBarWrapper } from 'app/components/SideBar/styles';
import Slider from 'app/components/SideBar/Slider';
import Profile from 'app/components/SideBar/Profile';
import Music from 'app/components/SideBar/Music';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Slider />
      <Profile />
      <Music />
    </SideBarWrapper>
  );
};

export default SideBar;
