import React, { Component } from "react";
import CommentText from "./CommentText";
import PropTypes from "prop-types";
class Comment extends Component {
  render() {
    const { movieid } = this.props.comment;
    const comment = this.props.comment;

    return (
      <React.Fragment>
        <ul className="list-group">
          <CommentText commentText={comment} />
        </ul>
      </React.Fragment>
    );
  }
}

Comment.propTypes = {
  commentText: PropTypes.object.isRequired
};

export default Comment;
