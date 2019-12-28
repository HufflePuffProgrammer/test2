import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import axios from "axios";

class MovieEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      writer: "",
      director: "",
      errors: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
    );

    const movie = res.data;

    this.setState({
      title: movie.title,
      desc: movie.desc,
      writer: movie.writer,
      director: movie.director
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { title, desc, writer, director } = this.state;

    //Check for Errors
    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return;
    }
    if (director === "") {
      this.setState({ errors: { director: "Director is required" } });
      return;
    }
    if (writer === "") {
      this.setState({ errors: { writer: "Writer is required" } });
      return;
    }
    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }

    const updMovie = {
      title,
      desc,
      writer,
      director
    };
    const { id } = this.props.match.params;

    console.log("up movie");
    console.log(updMovie);
    //const res = await axios.put(
    //  `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`,
    //  updMovie
    // );

    console.log("update movie");
    console.log(updMovie);
    dispatch({
      type: "UPDATE_MOVIE",
      // payload: res.data
      payload: updMovie
    });
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
            <div>
              <header id="main-header" class="py-1 bg-warning text-white">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <h4>
                        <i class="fas fa-film"></i> Movies Edit
                      </h4>
                    </div>
                  </div>
                </div>
              </header>

              <section id="movie">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <TextInputGroup
                              type="text"
                              name="title"
                              label="Title"
                              value={title}
                              placeHolder="Enter the Title"
                              onChange={this.onChange}
                              error={errors.title}
                            />

                            <TextInputGroup
                              name="director"
                              label="Director"
                              value={director}
                              placeHolder="Enter the Director"
                              onChange={this.onChange}
                              error={errors.director}
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
                              type="text"
                              name="desc"
                              label="Description"
                              value={desc}
                              placeHolder="Enter a Description"
                              onChange={this.onChange}
                              error={errors.desc}
                            />
                            <section id="actions" class="py-4 mb-4 bg-light">
                              <div class="container">
                                <div class="row">
                                  <div class="col-md-3">
                                    <a
                                      href="index.html"
                                      class="btn btn-light btn-block"
                                    >
                                      <i class="fas fa-arrow-left"></i>Back
                                    </a>
                                  </div>
                                  <div class="col-md-3">
                                    <input
                                      class="btn btn-warning btn-block"
                                      type="submit"
                                    />
                                  </div>
                                </div>
                              </div>
                            </section>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
MovieEdit.propTypes = {
  id: PropTypes.number.isRequired
};
export default MovieEdit;