import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import theme from './theme';

const Globalstyle = createGlobalStyle`
  ${reset};
  body{
    background-color: white;
  }
`;

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Globalstyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
