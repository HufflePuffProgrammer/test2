import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Comment from "../comments/Comment";
import axios from "axios";

class Movie extends Component {
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
    const { id, title, desc, writer, director, poster } = this.props.movie;
    const { showMovieInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { comments } = value;

          const newComments = comments.filter(
            comment => comment.movieid === id
          );

          return (
            <tr>
              <td>
                <img src={poster} alt={title} class="img-thumbnail"></img>
              </td>
              <td>
                <div class="row">
                  <h4>{title}</h4>
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Dir: </text> {director}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Writer: </text> {writer}
                </div>
                <div class="row">
                  <text class="mr-1 font-weight-bold">Summary: </text> {desc}
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col">
                    <small class="mr-1 text-muted">Poor:</small> 1Opening,
                    Character
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <small class="mr-1 text-muted">Good:</small> Effects,
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <small class="text-muted">Genre: </small>Golden Fleece
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    1This movie will blow big time just like the Death Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum,{" "}
                    <a href="#">
                      <i class="fas fa-angle-double-right"></i>More Comments
                    </a>
                  </div>
                </div>
              </td>
            </tr>
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
