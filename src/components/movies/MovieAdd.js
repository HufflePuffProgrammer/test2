import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class MovieAdd extends Component {
  state = {
    title: "",
    desc: "",
    writer: "",
    director: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
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
      title,
      desc,
      writer,
      director
    };
    const res = await axios.post(
      "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies",
      newMovie
    );
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
                    name="title"
                    label="Title"
                    value={title}
                    placeHolder="Enter the Title"
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextInputGroup
                    name="desc"
                    label="Desc"
                    value={desc}
                    placeHolder="Enter the Description"
                    onChange={this.onChange}
                    error={errors.desc}
                  />
                  <TextInputGroup
                    name="writer"
                    label="Writer"
                    value={writer}
                    placeHolder="Enter the Writer"
                    onChange={this.onChange}
                    error={errors.writer}
                  />
                  <TextInputGroup
                    name="director"
                    label="Director"
                    value={director}
                    placeHolder="Enter the Director"
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
