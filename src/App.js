import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./components/navbar/NavigationBar";

import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PasswordForgetPage from "./pages/PasswordForgetPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

import * as ROUTES from "./constants/routes";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </>
  );
}

export default App;
