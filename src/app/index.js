import React from 'react';

import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from 'app/theme';

import Header from 'app/components/Header';
import Main from 'app/components/Main';
import history from 'app/utils/history';
import { TotalWrapper } from 'app/styles';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    background-color: white;
  }
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <GlobalStyle />
        <TotalWrapper>
          <Header />
          <Main />
        </TotalWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}
