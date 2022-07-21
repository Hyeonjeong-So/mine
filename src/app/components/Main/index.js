import React, { useEffect } from 'react';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { LogoutPage } from 'app/pages/LogoutPage';
import { HomePage } from 'app/pages/HomePage';
import { CalendarPage } from 'app/pages/CalendarPage';
import { DiaryPage } from 'app/pages/DiaryPage';
import { TodoPage } from 'app/pages/TodoPage';
import { LoginPage } from 'app/pages/LoginPage';
import { SignupPage } from 'app/pages/SignupPage';
import { NotFoundPage } from 'app/pages/NotFoundPage';
import { ForgetPasswordPage } from 'app/pages/ForgetPasswordPage';
import SideBar from 'app/components/SideBar';

const homePageAddress = '/';
const logoutPageAddress = '/logout';
const calendarPageAddress = '/calendar';
const diaryPageAddress = '/diary';
const todoPageAddress = '/todo';
const loginPageAddress = '/login';
const signUpPageAddress = '/signup';
const forgetPassWordAddress = '/forget-password';

const redirectToLoginPage = (location) => {
  if (
    [loginPageAddress, signUpPageAddress, forgetPassWordAddress].includes(
      location,
    )
  ) {
    return false;
  }
  return true;
};

const showSideBar = (currentPageAddress) => {
  const sideBarIncludePages = [
    homePageAddress,
    calendarPageAddress,
    diaryPageAddress,
    todoPageAddress,
  ];

  return sideBarIncludePages.includes(currentPageAddress);
};

const Main = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      if (redirectToLoginPage(location.pathname)) {
        navigate(loginPageAddress);
      }
    }
  }, [location, navigate, user]);

  return (
    <>
      {showSideBar(location.pathname) && <SideBar />}
      <Routes>
        <Route exact path={homePageAddress} element={<HomePage />} />
        <Route path={logoutPageAddress} element={<LogoutPage />} />
        <Route path={calendarPageAddress} element={<CalendarPage />} />
        <Route path={diaryPageAddress} element={<DiaryPage />} />
        <Route path={todoPageAddress} element={<TodoPage />} />
        <Route path={loginPageAddress} element={<LoginPage />} />
        <Route path={signUpPageAddress} element={<SignupPage />} />
        <Route path={forgetPassWordAddress} element={<ForgetPasswordPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Main;
