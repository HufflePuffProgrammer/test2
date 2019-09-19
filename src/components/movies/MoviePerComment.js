import React, { Component } from "react";

class MoviePerComment extends Component {
  render() {
    const { id, title, desc, writer, director } = this.props.movie;
    return (
      <React.Fragment>
        <h4>{title}</h4>
        <ul className="list-group">
          <li className="list-group-item">{desc}</li>
          <li className="list-group-item">writer: {writer}</li>
          <li className="list-group-item">director: {director}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MoviePerComment;
