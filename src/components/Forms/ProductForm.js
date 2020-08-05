import React from "react";
import { Form, Card } from "react-bootstrap";

const ProductForm = () => {
  return (
    <Card className="form-card">
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Products Group Name</Form.Label>
          <Form.Control type="text" placeholder="For ex. coffee, juice, ..." />
        </Form.Group>

        <Form.Group controlId="productGroupImage">
          <Form.File type="file" label="Upload a picture of your venue" />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default ProductForm;
