import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';

import { LoginPage } from 'app/pages/LoginPage';
import { LogoutPage } from 'app/pages/LogoutPage';
import { SignupPage } from 'app/pages/SignupPage';
import { HomePage } from 'app/pages/HomePage';
import { NotFoundPage } from 'app/pages/NotFoundPage';
import { ForgetPasswordPage } from 'app/pages/ForgetPasswordPage';
import { CalendarPage } from 'app/pages/CalendarPage';
import { DiaryPage } from 'app/pages/DiaryPage';
import { TodoPage } from 'app/pages/TodoPage';

import SideBar from 'app/components/SideBar';
import { MainWrapper } from 'app/components/Main/styles';

const homePageAddress = '/';
const loginPageAddress = '/login';
const signUpPageAddress = '/signup';
const logoutPageAddress = '/logout';
const forgetPassWordAddress = '/forget-password';
const calendarPageAddress = '/calendar';
const diaryPageAddress = '/diary';
const todoPageAddress = '/todo';

const showSideBar = (currentPageAddress) => {
  const sideBarIncludePages = [
    homePageAddress,
    calendarPageAddress,
    diaryPageAddress,
    todoPageAddress,
  ];

  return sideBarIncludePages.includes(currentPageAddress);
};

const Main = () => {
  const location = useLocation();

  return (
    <MainWrapper>
      {showSideBar(location.pathname) && <SideBar />}
      <Switch>
        <Route exact path={homePageAddress} component={HomePage} />
        <Route path={loginPageAddress} component={LoginPage} />
        <Route path={signUpPageAddress} component={SignupPage} />
        <Route path={logoutPageAddress} component={LogoutPage} />
        <Route path={forgetPassWordAddress} component={ForgetPasswordPage} />
        <Route path={calendarPageAddress} component={CalendarPage} />
        <Route path={diaryPageAddress} component={DiaryPage} />
        <Route path={todoPageAddress} component={TodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </MainWrapper>
  );
};

export default Main;
