import React, { Component } from "react";
import Comment from "./Comment";
import { Consumer } from "../../context";
import MovieAlone from "../movies/MovieAlone";
import PropTypes from "prop-types";
//import axios from "axios";

class Comments extends Component {
  onDeleteClick = (id, dispatch) => {
    // try {
    //   await axios.delete(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    //   );
    //   dispatch({ type: "DELETE_MOVIE", payload: id });
    // } catch (e) {

    //dispatch({ type: "DELETE_COMMENT", payload: id });
    console.log("Deleted Comment");
    // }
  };
  render() {
    const { id } = this.props.match.params;

    return (
      <Consumer>
        {value => {
          const { comments, movies } = value;
          const commentsPerMovie = comments.filter(
            comment => Number(comment.movieid) === Number(id)
          );
          const moviesPerMovieID = movies.filter(
            movie => Number(movie.id) === Number(id)
          );

          return (
            <React.Fragment>
              <header id="main-header" class="py-0 bg-success text-white">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1>
                        <i className="fas fa-folder"></i> Comments
                      </h1>
                    </div>
                  </div>
                </div>
              </header>

              <section id="search" class="py-2 mb-6 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <a href="/" class="btn btn-light btn-block">
                        <i className="fas fa-arrow-left"></i>Back
                      </a>
                    </div>

                    <div className="col-md-3">
                      <a
                        href={`/comments/add/${id}`}
                        className="btn btn-success btn-block"
                      >
                        <i className="fas fa-plus"></i>Add Comment
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section id="movie">
                <table className="table">
                  {moviesPerMovieID.map(movie => (
                    <MovieAlone key={movie.id} movie={movie} />
                  ))}
                </table>
              </section>

              <div className="row">
                <div className="col md-9">
                  <section id="header">
                    <header
                      id="main-header"
                      className="py-1 bg-success text-white"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <h6></h6>
                          </div>
                        </div>
                      </div>
                    </header>
                  </section>

                  <table className="table table-striped">
                    <tbody>
                      {commentsPerMovie.map(comment => (
                        <Comment
                          key={id}
                          movieid={comment.movieid}
                          comment={comment}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

// Comments.propTypes = {
//   id: PropTypes.number.isRequired
// };
export default Comments;
