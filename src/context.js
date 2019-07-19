import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [action.payload, ...state.movies]
      };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? (movie = action.payload) : movie
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    movies: [],
    comments: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    const resMovies = axios.get(
      "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies"
    );
    this.setState({ movies: resMovies.data });

    // const resGenres = axios.get(
    //   "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies"
    // );
    // this.setState({ comments: resGenres.data });
    console.log("context.js");
    console.log(this.state.movies);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
