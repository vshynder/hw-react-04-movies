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

  handleBack = () => {
    if (
      this.props.location.pathname.includes("cast") ||
      this.props.location.pathname.includes("review")
    ) {
      this.props.history.goBack();
      this.props.history.goBack();
    } else {
      this.props.history.goBack();
    }
  };

  loadMovie = async () => {
    const { movieId } = this.props.match.params;

    const responce = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${CONSTANTS.API_KEY}&language=en-US`
    );
    const movie = await responce.json();
    return movie;
  };

  render() {
    return (
      <div className="movie_page">
        <button onClick={this.handleBack} className="movie_page__button">
          Go back
        </button>
        {this.state.movie}
      </div>
    );
  }
}

export default withRouter(MovieInfo);
