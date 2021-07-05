import React from "react";
import { Button } from "react-bootstrap";
import "./Movie.css";

const Movie = ({ location, history }) => {
  
  console.log(location);

  return (
    <div className="MoviePage">
      <h2>{location.state.Name}</h2>

      <iframe
        width="853"
        height="480"
        src={location.state.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="desciption">{location.state.description}</p>

      <Button variant="secondary" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Movie;
