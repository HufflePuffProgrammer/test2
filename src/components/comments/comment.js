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
      dialogue_good,
      opening_poor,
      chararc_poor,
      dialogue_poor,
      comment_text
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
                  {goldenfleece ? ` Golden Fleece ` : null}
                  {fooltriumphant ? ` Fool Triumphant ` : null}
                </li>
                <li className="list-group-item">
                  {opening_good ? ` Opening Good` : null}
                  {chararc_good ? ` Character Arc Good ` : null}
                  {dialogue_good ? ` Dialogue Good ` : null}
                </li>
                <li className="list-group-item">
                  {opening_poor ? ` Opening Poor` : null}
                  {chararc_poor ? ` Character Arc Poor ` : null}
                  {dialogue_poor ? ` Dialogue Poor ` : null}
                </li>
                <li className="list-group-item">{comment_text}</li>
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
