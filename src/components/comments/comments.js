import React, { Component } from "react";
import { Consumer } from "../../context";
import Comment from "./Comment";

class Comments extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { comments } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Comments v1.0 </span>List
              </h1>
              Comments:{" "}
              {comments.map(comment => (
                <Comment key={comment.movieid} comment={comment} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Comments;
