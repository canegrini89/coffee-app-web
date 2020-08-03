import React from "react";
import { Container } from "react-bootstrap";

import ProductsList from "./ProductList";

const ProductPage = () => (
  <Container>
    <h1>Tell us more about your products</h1>
    <ProductsList />
  </Container>
);

export default ProductPage;
