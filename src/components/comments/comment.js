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
    const {
      movieid,
      superhero,
      goldenfleece,
      fooltriumphant,
      opening_good,
      chararc_good,
      dialogue_good
    } = this.props.comment;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>movie id: {movieid}</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  {superhero ? ` Superhero` : null}
                  {goldenfleece ? ` Goldenfleece ` : null}
                  {fooltriumphant ? ` Fool Triumphant ` : null}
                </li>
                <li className="list-group-item">
                  {opening_good ? ` Opening Good` : null}
                  {chararc_good ? ` Character Arc Good ` : null}
                  {dialogue_good ? ` Dialogue Good ` : null}
                </li>
              </ul>
            </div>
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
