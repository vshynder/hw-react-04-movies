import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./components/screens/Homepage";
import MoviesPage from "./components/screens/MoviesPage";
import MovieInfo from "./components/screens/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <Link className="nav__link" to="/">
            Home
          </Link>
          <Link className="nav__link" to="/movies">
            Movies
          </Link>
        </div>
        <Switch>
          <Route path="/movies/:movieId" component={MovieInfo} />
          <Route path="/movies" component={MoviesPage} />
          <Route exact path="/" component={Homepage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
