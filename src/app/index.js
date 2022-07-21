import React, { useEffect, useState } from 'react';

import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from 'app/theme';

import Header from 'app/components/Header';
import Main from 'app/components/Main';
import { TotalWrapper } from 'app/styles';
import { MainWrapper } from 'app/components/Main/styles';
import { ThemeProvider } from '@mui/material';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    background-color: white;
  }
`;

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    const fetchedUser = getUser();
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <TotalWrapper>
          {user && <Header />}
          <MainWrapper>
            <Main user={user} />
          </MainWrapper>
        </TotalWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}
