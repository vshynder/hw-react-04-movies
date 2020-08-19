import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const MovieProview = (props) => {
  const path = `/movies/${props.movie.id}`;
  return (
    <Link className="movies-list__link" to={path}>
      <li className="movies-list__movie">{props.movie.title}</li>
    </Link>
  );
};

MovieProview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default MovieProview;
