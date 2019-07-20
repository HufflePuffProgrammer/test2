import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Comment from "./comment";

class Comments extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { comments } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Comments </span>List
              </h1>
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
