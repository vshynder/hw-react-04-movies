import React from "react";
import MoviesPreview from "./MoviePreview";

const RenderMovies = (props) => {
  return props.movies.map((movie) => (
    <MoviesPreview
      getDetails={props.handleMovieClick}
      key={movie.id}
      movie={movie}
    />
  ));
};

export default RenderMovies;
