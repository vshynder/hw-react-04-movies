import React from "react";
import MoviesPreview from "./MoviePreview";

import PropTypes from "prop-types";

const RenderMovies = (props) => {
  return props.movies.map((movie) => (
    <MoviesPreview
      getDetails={props.handleMovieClick}
      key={movie.id}
      movie={movie}
    />
  ));
};

RenderMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      handleMovieClick: PropTypes.func,
      id: PropTypes.number,
    })
  ),
};

export default RenderMovies;
