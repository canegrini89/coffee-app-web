import React from "react";
import "./VenueInfoForm.css";

import { Form, Card } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const VenueInfoForm = () => {
  return (
    <Card className="form-card">
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Venue Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the name" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Venue Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Enter a brief description of your brand"
          />
        </Form.Group>
        <Form.Group controlId="heroImage">
          <Form.File type="file" label="Upload a picture of your venue" />
        </Form.Group>
        <Form.Group controlId="serviceOptions">
          <Form.Label>Venue Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="What extraordinary things can we taste in your venue"
          />
        </Form.Group>
        <fieldset disabled>
          <Form.Group>
            <Form.Label htmlFor="ratingValue">
              By default you'll start with a rating value of 4
            </Form.Label>
            <Form.Control
              id="ratingValue"
              placeholder="Default rating value 4"
            />
          </Form.Group>
        </fieldset>
        <Form.Group controlId="name">
          <FaInstagram />
          <Form.Label>Instagram Account</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Instagram Account"
          />
        </Form.Group>
        <Form.Group controlId="name">
          <FaFacebook />
          <Form.Label>Facebook Account</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Instagram Account"
          />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default VenueInfoForm;
