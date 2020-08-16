import React from "react";
import { withRouter } from "react-router-dom";
import MoviePage from "../MoviePage";
import CONSTANTS from "../../constants";

class MovieInfo extends React.Component {
  state = {
    movie: "",
  };

  componentDidMount() {
    this.loadMovie().then((movie) => {
      const movieCard = <MoviePage {...movie} />;
      this.setState({ movie: movieCard });
    });
  }

  loadMovie = async () => {
    const { movieId } = this.props.match.params;

    const responce = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${CONSTANTS.API_KEY}&language=en-US`
    );
    const movie = await responce.json();
    return movie;
  };

  render() {
    return <div>{this.state.movie ? this.state.movie : <p>Loading</p>}</div>;
  }
}

export default withRouter(MovieInfo);
