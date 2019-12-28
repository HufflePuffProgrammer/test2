import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInputGroup from "../layout/TextInputGroup";
import { Consumer } from "../../context";
import { withRouter } from "react-router-dom";

class MovieEditText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      writer: "",
      director: "",
      poster: "",
      errors: {}
    };
  }
  async componentDidMount() {
    const { movie } = this.props;
    this.setState({
      id: movie.id,
      title: movie.title,
      desc: movie.desc,
      writer: movie.writer,
      director: movie.director,
      poster: movie.poster
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id, title, desc, writer, director, poster } = this.state;

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
      id,
      title,
      desc,
      writer,
      director,
      poster
    };

    //const res = await axios.put(
    //  `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`,
    //  updMovie
    // );

    // try {
    //   // Implement DB
    //   const res = await axios.put(
    //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`,
    //     updMovie
    //   );
    //   dispatch({ type: "UPDATE_MOVIE", payload: updMovie });
    // } catch (e) {
    //   dispatch({ type: "UPDATE_MOVIE", payload: updMovie });
    // }
    // console.log("updMovie");
    // console.log(updMovie);
    dispatch({ type: "UPDATE_MOVIE", payload: updMovie });

    //clear fields
    // this.setState({
    //   title: "",
    //   desc: "",
    //   writer: "",
    //   director: "",
    //   poster: "",
    //   errors: {}
    // });
    //this.props.history.push(`/movie/detail/${id}`);
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //const { title } = movie;
    const { title, desc, writer, director, poster, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                  type="text"
                  label="Title"
                  name="title"
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
                  value={desc}
                  label="Description"
                  placeHolder="Enter a Description"
                  onChange={this.onChange}
                  error={errors.desc}
                />
                <TextInputGroup
                  type="text"
                  name="poster"
                  value={poster}
                  label="Poster"
                  placeHolder="http://www.abc.com"
                  onChange={this.onChange}
                  error={errors.desc}
                />
                <section id="actions" class="py-4 mb-4 bg-light">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-3">
                        <a href="/" class="btn btn-light btn-block">
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
          );
        }}
      </Consumer>
    );
  }
}
MovieEditText.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieEditText;
