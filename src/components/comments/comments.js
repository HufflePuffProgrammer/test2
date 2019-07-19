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
          console.log("Comments");
          console.log(comments);
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Comments </span>List
              </h1>
              {
                <Comment />
                //movies.map(movie => (
                //<Movie key={movie.id} movie={movie} />
                //))
              }
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Comments;
