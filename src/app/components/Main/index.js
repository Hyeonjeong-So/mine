import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { LoginPage } from 'app/pages/LoginPage';
import { LogoutPage } from 'app/pages/LogoutPage';
import { SignupPage } from 'app/pages/SignupPage';
import { HomePage } from 'app/pages/HomePage';
import { NotFoundPage } from 'app/pages/NotFoundPage';
import { ForgetPasswordPage } from 'app/pages/ForgetPasswordPage';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/forget-password" component={ForgetPasswordPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Main;
