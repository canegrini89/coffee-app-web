import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      {authUser.name ? authUser.name : "Venue"}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link to={ROUTES.PRODUCTS}>Products</Link>
      <Link to={ROUTES.ADMIN}>Admin</Link>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Nav>
    <SignOutButton />
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My Coffee</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Nav>
  </Navbar>
);

export default Navigation;
