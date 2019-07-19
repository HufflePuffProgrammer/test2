import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      showMovieInfo: false
    };
    this.onShowClick = this.onShowClick.bind(this);
  }

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
      );
      dispatch({ type: "DELETE_MOVIE", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_MOVIE", payload: id });
    }
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
                <Link to={`movie/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
Comment.propTypes = {
  movie: PropTypes.object.isRequired
};
export default Comment;
