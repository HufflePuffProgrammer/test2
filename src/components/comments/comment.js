import React, { Component } from "react";
import { Consumer } from "../../context";
import CommentText from "./CommentText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Comment extends Component {
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
          const { comment } = this.props;
          return (
            <React.Fragment>
              <CommentText commentText={comment} />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
export default Comment;
