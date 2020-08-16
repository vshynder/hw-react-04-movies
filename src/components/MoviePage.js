import React from "react";
import {
  Route,
  Switch,
  Link,
  withRouter,
  useRouteMatch,
} from "react-router-dom";
import * as image from "../images/empty.png";

import Cast from "./Cast";
import Review from "./Review";

const MoviePage = (props) => {
  let genres = props.genres.reduce((acc, genre) => {
    acc += `${genre.name}, `;
    return acc;
  }, "");
  genres = genres.substring(0, genres.length - 2);
  const { path, url } = useRouteMatch();
  return (
    <div className="movie-container">
      <div className="movie-card">
        <div className="movie-card__image">
          <img
            className="movie-card__image--src"
            alt={props.title}
            src={
              props.poster_path
                ? `https://image.tmdb.org/t/p/original/${props.poster_path}`
                : image
            }
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
            <Link to={`${url}/cast`}>Cast</Link>
          </li>

          <li className="additional__info--listItem">
            <Link to={`${url}/review`}>Review</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={props.id} />
        </Route>
        <Route path={`${path}/review`}>
          <Review movieId={props.id} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(MoviePage);
