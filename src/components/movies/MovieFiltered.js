import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class MovieFiltered extends Component {
  render() {
    const { movieid } = this.props;

    return (
      <Consumer>
        {value => {
          const { movies } = value;
          const newMovie = movies.filter(movie => movie.id === movieid);

          const { title, director, writer, desc, poster } = newMovie[0];

          console.log("new movie");
          console.log(newMovie);
          console.log("poster");
          console.log(poster);

          return (
            <React.Fragment>
              <td>
                <Link to={`movie/view/${movieid}`}>
                  <img src={poster} alt={title} class="img-thumbnail"></img>
                </Link>
              </td>
              <td>
                <div class="row">
                  <h6>
                    <Link to={`movie/view/${movieid}`}>
                      <strong>{title}</strong>
                    </Link>
                  </h6>
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Dir: </text> {director}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Writer: </text> {writer}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Summary: </text> {desc}
                </div>
              </td>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
MovieFiltered.propTypes = {
  movieid: PropTypes.object.isRequired
};
export default MovieFiltered;
