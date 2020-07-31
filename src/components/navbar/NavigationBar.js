import React from "react";
import { Link } from "react-router-dom";
import { Form, Navbar, Nav, FormControl, Button } from "react-bootstrap";

import * as ROUTES from "../../constants/routes";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={ROUTES.HOME}>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavigationBar;
