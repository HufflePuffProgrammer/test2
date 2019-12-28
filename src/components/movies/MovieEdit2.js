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

  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   const res = await axios.get(
  //     `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
  //   );

  //   const movie = res.data;

  //   this.setState({
  //     title: movie.title,
  //     desc: movie.desc,
  //     writer: movie.writer,
  //     director: movie.director
  //   });
  // }

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
    //dispatch({ type: "UPDATE_MOVIE", payload: updMovie });

    //clear fields
    this.setState({
      title: "",
      desc: "",
      writer: "",
      director: "",
      errors: {}
    });
    this.props.history.push(`/movie/detail/${id}`);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id } = this.props.match.params;
    return (
      <Consumer>
        {value => {
          const { dispatch, movies } = value;
          const { errors } = this.state;
          console.log("movies");
          console.log(movies);
          const newMovie = movies.filter(movie => movie.id === Number(id));
          console.log("ID");
          console.log(id);

          console.log("new Movie");
          console.log(newMovie[0].desc);

          // const { title, director, writer, desc, poster } = newMovie[0];

          // const moviePerMovieID = movies.filter(
          //   movie => Number(movie.id) === Number(id)
          // );
          //const { title, desc, writer, director } = moviePerMovieID[0];
          //const { title } = moviePerMovieID[0];
          //console.log("move per iD");
          //console.log(moviePerMovieID[0]);
          //const { title } = moviePerMovieID[0];
          // this.setState({
          //   title: moviePerMovieID.title,
          //   desc: moviePerMovieID.desc,
          //   writer: moviePerMovieID.writer,
          //   director: moviePerMovieID.director
          // });

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
                {" "}
                <div class="container">
                  {" "}
                  <div class="row">
                    <div class="col">
                      <div class="card">
                        <div class="card-body">
                          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <TextInputGroup
                              type="text"
                              name="title"
                              label="Title"
                              placeHolder="Enter the Title"
                              onChange={this.onChange}
                              error={errors.title}
                            />
                            <TextInputGroup
                              name="director"
                              label="Director"
                              placeHolder="Enter the Director"
                              onChange={this.onChange}
                              error={errors.director}
                            />
                            <TextInputGroup
                              name="writer"
                              label="Writer"
                              placeHolder="Enter the Writer"
                              onChange={this.onChange}
                              error={errors.writer}
                            />
                            <TextInputGroup
                              type="text"
                              name="desc"
                              label="Description"
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
