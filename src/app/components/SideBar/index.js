import React from 'react';

import { SideBarWrapper } from 'app/components/SideBar/styles';

import ScoringSlider from 'app/components/SideBar/ScoringSlider';
import Profile from 'app/components/SideBar/Profile';
import Music from 'app/components/SideBar/Music';

const SideBar = () => {
  return (
    <SideBarWrapper>
      <ScoringSlider />
      <Profile />
      <Music />
    </SideBarWrapper>
  );
};

export default SideBar;
