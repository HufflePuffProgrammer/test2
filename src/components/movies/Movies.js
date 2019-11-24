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
                <section id="search" class="py-4 mb-4 bg-light">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-3">
                        <a href="/movie/add" class="btn btn-primary btn-block">
                          <i class="fas fa-plus"></i> Add Movie
                        </a>
                      </div>
                      <div class="col-md-6 ml-auto">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                          />
                          <div class="input-group-append">
                            <button class="btn-success">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div class="container">
                  <div class="row">
                    <div class="col md-9">
                      <table class="table table-striped">
                        <thead class="thead-dark">
                          <th width="20%">Poster</th>
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
              </section>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
