import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MoviePerComment extends Component {
  render() {
    const { id, title, desc, writer, director } = this.props.movie;
    return (
      <div class="container">
        <div class="row">
          <div class="col md-9">
            <table class="table">
              <tr>
                <td width="20%">
                  <img
                    src="https://static.metacritic.com/images/products/movies/3/e539bd40e3b68ba9e95ad337b30136b2-250h.jpg"
                    alt="Skywalker Risen"
                    class="img-thumbnail"
                  ></img>
                </td>
                <td width="80%">
                  <div class="row">
                    <h4>Rise of Skywalker</h4>
                  </div>
                  <div class="row">
                    <strong>Dir: </strong> {director}
                  </div>
                  <div class="row">
                    <strong>Writer: </strong> {writer}
                  </div>
                  <div class="row">
                    <strong>Summary: </strong> {desc}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

MoviePerComment.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MoviePerComment;
