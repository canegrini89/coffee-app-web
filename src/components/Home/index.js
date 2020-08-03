import React from "react";
import { compose } from "recompose";
import { Container } from "react-bootstrap";

import "./Home.css";

import { withAuthorization } from "../Session";
import VenueInfoForm from "../Forms/VenueInfoForm";

const HomePage = () => {
  return (
    <Container className="container-page">
      <VenueInfoForm />
    </Container>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(HomePage);
