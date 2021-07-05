import React from "react";
import "./NotFound.css";
import { Button } from "react-bootstrap";

const NotFound = (props) => {
  return (
    <div className="Notfound">
      <h2 className="fourOfour">404</h2>
      <h3>Page Not Found</h3>
      <Button variant="secondary" onClick={() => props.history.push("/")}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
