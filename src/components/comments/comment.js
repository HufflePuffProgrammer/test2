import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Comment extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>title movie id</h4>
              <ul className="list-group">
                <li className="list-group-item">desc</li>
                <li className="list-group-item">writer: </li>
                <li className="list-group-item">director:</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Comment.propTypes = {
  movie: PropTypes.object.isRequired
};
export default Comment;
