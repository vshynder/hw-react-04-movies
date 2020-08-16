import React from "react";
import { withRouter } from "react-router-dom";

import CastItem from "./CastItem";
import CONSTANTS from "../constants";
import * as image from "../images/empty.png";

class Cast extends React.Component {
  state = {
    cast: [],
  };

  getMovieCast = async (movieId) => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${CONSTANTS.API_KEY}`
    );
    const cast = await movie.json();
    return cast;
  };

  componentDidMount() {
    this.getMovieCast(this.props.movieId).then(({ cast }) => {
      const movieCast = cast.length > 10 ? cast.slice(0, 10) : cast;
      this.setState({ cast: movieCast });
    });
  }

  render() {
    return (
      <ul className="cast-list">
        {this.state.cast.length ? (
          this.state.cast.map((el) => (
            <CastItem
              key={el.cast_id}
              name={el.name}
              profileImage={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : image
              }
            />
          ))
        ) : (
          <div>This movie has no cast</div>
        )}
      </ul>
    );
  }
}

export default withRouter(Cast);
