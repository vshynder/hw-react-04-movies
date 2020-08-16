import React from "react";
import RenderMovies from "../RenderMovies";

import CONSTANTS from "../../constants";

class Homepage extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchPopular().then(({ results }) => {
      this.setState({ movies: results });
    });
  }

  fetchPopular = async () => {
    const moviesPromise = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${CONSTANTS.API_KEY}&language=en-US&page=1`
    );

    const movies = await moviesPromise.json();
    return movies;
  };

  render() {
    return (
      <ul className="movies-list">
        <RenderMovies movies={this.state.movies} />
      </ul>
    );
  }
}

export default Homepage;
