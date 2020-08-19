import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
// import Homepage from "./components/screens/Homepage";
// import MoviesPage from "./components/screens/MoviesPage";
// import MovieInfo from "./components/screens/MovieInfo";

const Homepage = React.lazy(() => import("./components/screens/Homepage"));
const MoviesPage = React.lazy(() => import("./components/screens/MoviesPage"));
const MovieInfo = React.lazy(() => import("./components/screens/MovieInfo"));

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
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route path="/movies/:movieId">
              <MovieInfo />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
