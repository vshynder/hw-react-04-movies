import React from "react";
import CONSTANTS from "../../constants";
import RenderMovies from "../RenderMovies";

class MoviesPage extends React.Component {
  state = {
    search: "",
    movies: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === "") return;
    const query = this.state.search.split(" ").join("+");
    this.fetchMovies(query).then(({ results }) => {
      const resp = <RenderMovies movies={results} />;
      this.setState({ search: "", movies: resp });
    });
  };

  fetchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${CONSTANTS.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const movies = await response.json();
    return movies;
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            onChange={this.handleChange}
            className="form__input"
            type="text"
            placeholder="Search movies..."
            value={this.state.search}
          />
          <button className="form__submit" type="submit">
            Search
          </button>
        </form>

        <ul className="movies-list">
          {this.state.movies ? (
            this.state.movies
          ) : (
            <li className="movies-list__movie">No movies found</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
