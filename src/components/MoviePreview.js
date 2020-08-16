import React from "react";
import { Link } from "react-router-dom";

const MovieProview = (props) => {
  const path = `/movies/${props.movie.id}`;
  return (
    <Link className="movies-list__link" to={path}>
      <li className="movies-list__movie">{props.movie.title}</li>
    </Link>
  );
};

export default MovieProview;
