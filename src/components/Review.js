import React from "react";
import ReviewItem from "./ReviewItem";

import PropTypes from "prop-types";

import CONSTANTS from "../constants";

class Review extends React.Component {
  state = {
    review: [],
  };

  getMovieReviews = async (movieId) => {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${CONSTANTS.API_KEY}`
    );
    const review = await movie.json();
    return review;
  };

  componentDidMount() {
    this.getMovieReviews(this.props.movieId).then(({ results }) => {
      if (!results) return;
      const movieReview = results.length > 10 ? results.slice(0, 10) : results;
      this.setState({ review: movieReview });
    });
  }

  render() {
    return (
      <ul className="review-list">
        {this.state.review.length ? (
          this.state.review.map((el) => (
            <ReviewItem key={el.id} name={el.author} quote={el.content} />
          ))
        ) : (
          <div>This movie has no reviews</div>
        )}
      </ul>
    );
  }
}

Review.propTypes = {
  movieId: PropTypes.number,
};

export default Review;
