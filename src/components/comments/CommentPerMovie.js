import React, { Component } from "react";
import { Consumer } from "../../context";
import CommentPerMovieText from "./CommentPerMovieText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CommentPerMovie extends Component {
  onDeleteClick = (id, dispatch) => {
    // try {
    //   await axios.delete(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    //   );
    //   dispatch({ type: "DELETE_MOVIE", payload: id });
    // } catch (e) {

    dispatch({ type: "DELETE_COMMENT", payload: id });
    // }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { comment, movieid } = this.props;

          return (
            <React.Fragment>
              <CommentPerMovieText
                commentText={comment}
                key={movieid}
                movieid={movieid}
              />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

CommentPerMovie.propTypes = {
  comment: PropTypes.object.isRequired
};
export default CommentPerMovie;
