import React, { Component } from "react";
import Comment from "./Comment";
import { Consumer } from "../../context";
import MoviePerComment from "../movies/MoviePerComment";
import { Link } from "react-router-dom";
//import axios from "axios";

class Comments extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <Consumer>
        {value => {
          const { comments, movies } = value;

          const commentsPerMovie = comments.filter(
            comment => comment.movieid == id
          );
          const moviesPerMovieID = movies.filter(movie => movie.id == id);

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Comments v1.0 </span>List
              </h1>
              <h4 className="display-6 mb-2">
                <span className="text-primary">Movie Comments </span>
              </h4>
              {moviesPerMovieID.map(movie => (
                <MoviePerComment key={movie.id} movie={movie} />
              ))}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">Comments: </li>
                <li className="nav-item">
                  <Link to={`/comments/add/${id}`} className="nav-link">
                    <i className="fas fa-plus" />
                    Add Comment
                  </Link>
                </li>
              </ul>
              {commentsPerMovie.map(comment => (
                <Comment
                  key={comment.commentsid}
                  movieid={comment.movieid}
                  comment={comment}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Comments;
