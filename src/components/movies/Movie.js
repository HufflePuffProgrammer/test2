import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      showMovieInfo: false
    };
    this.onShowClick = this.onShowClick.bind(this);
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };

  onShowClick = () => {
    this.setState({
      showMovieInfo: !this.state.showMovieInfo
    });
  };

  render() {
    const { id, title, desc, writer, director } = this.props.movie;
    const { showMovieInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {title}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {showMovieInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{desc}</li>
                  <li className="list-group-item">writer: {writer}</li>
                  <li className="list-group-item">director: {director}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Movie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default Movie;
