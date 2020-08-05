import React, { useState, useRef } from "react";
import "./VenueInfoForm.css";
import { Form, Card, Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaStar } from "react-icons/fa";
import firebase from "firebase";

import FileUpload from "../FileUpload/FileUpload";
import { textFormated } from "../../utils";

const VenueInfoForm = () => {
  const [updateValue, setUpdateValue] = useState(0);
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const description = useRef(null);
  const instagramAccount = useRef(null);
  const facebooAccount = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/venue/images/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUpdateValue(percentage);
        setLoading(true);
      },
      (error) => {
        console.log(error);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((filePath) => {
          setPicture(filePath);
          setUpdateValue(100);
          setLoading(false);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const venueData = {
      name: textFormated(name.current.value),
      description: description.current.value,
      picture,
      ranking: 4,
      instagramAccount: instagramAccount.current.value,
      facebooAccount: facebooAccount.current.value,
    };

    firebase
      .firestore()
      .collection("venues")
      .doc(`${venueData.name}`)
      .set(venueData);
  };

  return (
    <Card className="form-card">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Venue Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the name" ref={name} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Venue Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Enter a brief description of your brand"
            ref={description}
          />
        </Form.Group>
        <FileUpload
          updateValue={updateValue}
          picture={picture}
          loading={loading}
          onUpload={handleUpload}
        />
        <div className="ranking-container">
          <div className="ranking-text">
            By default you'll start with a rating value of 4
          </div>
          <div className="ranking-stars">
            <FaStar size={28} color="orange" />
            <FaStar size={28} color="orange" />
            <FaStar size={28} color="orange" />
            <FaStar size={28} color="orange" />
            <FaStar size={28} fillOpacity={0.3} />
          </div>
        </div>

        <Form.Group controlId="name">
          <FaInstagram />
          <Form.Label>Instagram Account</Form.Label>
          <Form.Control
            ref={instagramAccount}
            type="text"
            placeholder="https://instagram.com/myvenue"
          />
        </Form.Group>
        <Form.Group controlId="name">
          <FaFacebook />
          <Form.Label>Facebook Account</Form.Label>
          <Form.Control
            ref={facebooAccount}
            type="text"
            placeholder="https://instagram.com/myvenue"
          />
        </Form.Group>
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default VenueInfoForm;
