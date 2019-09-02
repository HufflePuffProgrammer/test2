import React, { Component } from "react";
import CommentText from "./CommentText";

class Comment extends Component {
  render() {
    const comment = this.props.comment;

    return (
      <React.Fragment>
        <ul className="list-group">
          Comment:
          <CommentText commentText={comment} />
        </ul>
      </React.Fragment>
    );
  }
}

export default Comment;
