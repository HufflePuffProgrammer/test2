import React, { Component } from "react";
import CommentText from "./CommentText";
import { Link } from "react-router-dom";
class Comment extends Component {
  render() {
    const comment = this.props.comment;

    return (
      <React.Fragment>
        <ul className="list-group">
          <CommentText commentText={comment} />
          <Link to={`/comments/edit/${comment.movieid}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </ul>
      </React.Fragment>
    );
  }
}

export default Comment;
