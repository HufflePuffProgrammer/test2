import React, { Component } from "react";
import { Consumer } from "../../context";
import MovieEditText from "./MovieEditText";
import TextInputGroup from "../layout/TextInputGroup";

class MovieEdit extends Component {
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
    console.log("com did mount");
    console.log(movie);
    if (movie) {
      this.setState({
        // id: movie.id,
        title: movie.title,
        desc: movie.desc,
        writer: movie.writer,
        director: movie.director,
        poster: movie.poster
      });
    }
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id, title, desc, writer, director, poster } = this.state;
    console.log("title");
    console.log(title);
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
    //this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  displayMovieEditText = (movie, dispatch) => {
    const { title, desc, writer, director, poster, errors } = movie;

    console.log("disp title");
    console.log(title);

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
            error={this.state.errors.title}
          />
          <input class="btn btn-warning btn-block" type="submit" />
        </form>
      </div>
    );
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { movies, dispatch } = value;

          const moviesFromDB = movies.filter(movie => movie.id === 1);
          console.log("Movie from DB [0]");
          console.log(moviesFromDB[0]);
          const movie = moviesFromDB[0];
          console.log("movie");
          console.log(movie);
          const { title, desc, writer, director, poster, errors } = this.state;
          // Filter the movie and grab the first one.

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
                        <div class="card-body"></div>
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

export default MovieEdit;
