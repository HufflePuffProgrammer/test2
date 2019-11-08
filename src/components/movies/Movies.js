import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context";

class Movies extends Component {
  constructor() {
    super();
  }
  deleteMovie = id => {
    const { movies } = this.state;
    let newMovies = movies.filter(movie => movie.id !== id);
    this.setState({
      movies: newMovies
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Movie </span>List
              </h1>
              {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
