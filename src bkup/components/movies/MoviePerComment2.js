import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MoviePerComment extends Component {
  render() {
    const { id, title, desc, writer, director } = this.props.movie;
    return (
      <Card style={{ width: "56rem" }}>
        <Card.Title>
          {title}{" "}
          <Link to={`/comments/add/${id}`} className="nav-link">
            <i
              className="fas fa-plus"
              style={{
                float: "right",
                color: "blue",
                marginRight: "10rem"
              }}
            />
          </Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Director: {director}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Writer: {writer}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Starring:</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
      </Card>
    );
  }
}

MoviePerComment.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MoviePerComment;
