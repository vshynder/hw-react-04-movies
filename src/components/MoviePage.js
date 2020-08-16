import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";

const MoviePage = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/review">
          <MovieCard path="review" {...props} />
        </Route>
        <Route path="/cast">
          <MovieCard path="cast" {...props} />
        </Route>
        <Route path="/">
          <MovieCard {...props} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const MovieCard = (props) => {
  let genres = props.genres.reduce((acc, genre) => {
    acc += `${genre.name}, `;
    return acc;
  }, "");
  genres = genres.substring(0, genres.length - 2);
  const { location } = props;
  const castTo = `${location.pathname}/cast`;
  const reviewsTo = `${location.pathname}/reviews`;
  console.log(props.path);
  return (
    <div className="movie-container">
      <div className="movie-card">
        <div className="movie-card__image">
          <img
            className="movie-card__image--src"
            alt={props.title}
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          />
        </div>
        <div className="movie-card__text">
          <h1 className="movie-card__title">{props.title}</h1>
          <p className="movie-card__votes">
            Average vote: {props.vote_average}
          </p>
          <h2 className="movie-card__overview">Overview</h2>
          <p className="movie-card__overview--desc">{props.overview}</p>
          <h2 className="movie-card__genres">Genres</h2>
          <div className="movie-card__genres--desc">{genres}</div>
        </div>
      </div>
      <div className="additional__info">
        <h3 className="additional__info--name">Additional information</h3>
        <ul className="additional__info--list">
          <li className="additional__info--listItem">
            <Link to={castTo} className="additional__info--link">
              Cast
            </Link>
          </li>

          <li className="additional__info--listItem">
            <Link to={reviewsTo} className="additional__info--link">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      {props.path === "cast" ? (
        <div>Cast loading</div>
      ) : props.path === "review" ? (
        <div>Review Loading</div>
      ) : null}
    </div>
  );
};

export default withRouter(MoviePage);
