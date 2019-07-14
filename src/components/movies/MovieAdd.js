import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

import uuid from "uuid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MovieAdd extends Component {
  state = {
    title: "",
    desc: "",
    writer: "",
    director: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { title, desc, writer, director } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }
    if (writer === "") {
      this.setState({ errors: { writer: "Writer is required" } });
      return;
    }
    if (director === "") {
      this.setState({ errors: { director: "Director is required" } });
      return;
    }
    const newMovie = {
      id: uuid(),
      title,
      desc,
      writer,
      director
    };
    dispatch({ type: "ADD_MOVIE", payload: newMovie });

    //clear fields
    this.setState({
      title: "",
      desc: "",
      writer: "",
      director: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, desc, writer, director, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Movie</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeHolder="Enter the Title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextInputGroup
                    label="Description"
                    name="desc"
                    placeHolder="Enter the description"
                    value={desc}
                    onChange={this.onChange}
                    error={errors.desc}
                  />
                  <TextInputGroup
                    label="Writer"
                    name="writer"
                    placeHolder="Enter the Writer"
                    value={writer}
                    onChange={this.onChange}
                    error={errors.writer}
                  />

                  <TextInputGroup
                    label="Director"
                    name="director"
                    placeHolder="Enter the Director"
                    value={director}
                    onChange={this.onChange}
                    error={errors.director}
                  />

                  <input
                    type="submit"
                    value="Add Movie"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MovieAdd;
