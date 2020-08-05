import React from "react";
import { Form, ProgressBar, Image } from "react-bootstrap";

import "./FileUpload.css";

const FileUpload = ({ updateValue, onUpload, picture, loading }) => {
  return (
    <>
      <h3 className="file-upload-text">Upload a picture of your venue</h3>
      {loading ? (
        <ProgressBar now={updateValue} label={`${updateValue}%`} />
      ) : (
        <Image
          src={`${picture}`}
          fluid
          className={picture ? "venue-image" : "venue-image-inactive"}
        />
      )}
      <Form.Group controlId="heroImage">
        <Form.File type="file" onChange={onUpload} />
      </Form.Group>
    </>
  );
};

export default FileUpload;
