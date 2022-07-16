import React from 'react';

import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from 'app/theme';

import { Footer } from 'app/components/Footer';
import Header from 'app/components/Header';
import Main from 'app/components/Main';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    background-color: white;
  }
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
