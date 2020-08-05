import React from "react";
import { compose } from "recompose";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaRegTrashAlt } from "react-icons/fa";

import "./ProductsPage.css";

import ProductProvider from "./ProductProvider";
import { withAuthorization } from "../Session";
import { withProducts } from "./context";

const ProductPage = (props) => {
  const handleProps = () => {
    console.log(props);
  };

  return (
    <Container>
      <Row>
        <Col xs={10}>
          <h1>Tell us more about your products</h1>
        </Col>
        <Col className="icons-column">
          <FaPlus size={20} onClick={handleProps} />
          <FaEdit size={20} />
          <FaRegTrashAlt size={20} />
        </Col>
      </Row>
    </Container>
  );
};

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(ProductPage);
