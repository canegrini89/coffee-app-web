import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./SignInPage.css";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (email, password) => {};

  return (
    <Container className="container" fluid>
      <Card className="signup-card">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(email) => setEmail(email)}
              type="email"
              placeholder="Enter the email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={(password) => setPassword(password)}
              type="password"
              placeholder="Enter the password"
            />
          </Form.Group>
          <Form.Group controlId="rememberMe">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Link to={ROUTES.SIGN_UP}>Create an Account</Link>
          <Button onSubmit={handleSubmit} block className="button-form">
            Log In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignInPage;
