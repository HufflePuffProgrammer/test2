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
              <section id="movies">
                <div class="container">
                  <div class="row">
                    <div class="col md-9">
                      <table class="table table-striped">
                        <thead class="thead-dark">
                          <th width="20%">1Poster</th>
                          <th width="40%">Movie</th>
                          <th width="40%">Comments</th>
                        </thead>
                        <tbody>
                          {movies.map(movie => (
                            <Movie key={movie.id} movie={movie} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <h1 className="display-4 mb-2">
                  <span className="text-primary">1Movie </span>List
                </h1>
                {movies.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </section>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
