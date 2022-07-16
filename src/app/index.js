import React from 'react';

import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import theme from './theme';

import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { SignupPage } from './pages/SignupPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ForgetPasswordPage } from './pages/ForgetPasswordPage';
import { Footer } from './components/Footer';
import Header from './components/Header';

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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
