import React, { useState, useContext } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "./SignUpPage.css";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import FirebaseContext from "../Firebase/context";

const SignUpPage = () => {
  const { handleRegisterUser } = useContext(FirebaseContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async () => {
    try {
      const user = await handleRegisterUser(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="container" fluid>
      <Card className="signup-card">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              onChange={(e) => setName(e.name)}
              type="text"
              placeholder="Enter the name of your store"
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(e) => setEmail(e.name)}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={(e) => setPassword(e.name)}
              type="password"
              placeholder="Enter the password"
            />
          </Form.Group>
          <Form.Group controlId="repeatPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.name)}
              type="password"
              placeholder="Repeat your password"
            />
          </Form.Group>
          <Form.Group controlId="termsAndConditions">
            <Form.Check
              type="checkbox"
              label="I Agree All Statements in Terms and Services"
            />
          </Form.Group>
          <Link to={ROUTES.SIGN_IN}>I am already a member</Link>
          <Button block className="button-form">
            Sign Up
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUpPage;
