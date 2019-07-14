import React, { Component } from "react";

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
          movies: [
            action.payload,
            ...state.movies
          ]
        };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Spiderman: Far from home",
        desc:
          "Our friendly neighborhood Super Hero decides to join his best friends on a European vacation.",
        writer: "Chris McKenna",
        director: "Jon Watts"
      },
      {
        id: 2,
        title: "The Edge of 17",
        desc:
          "High-school life gets even more unbearable for Nadine when her best friend, Krista, starts dating her older brother.",
        writer: "Kelly Fremon Craig",
        director: "Kelly Craig"
      },
      {
        id: 3,
        title: "The Domestics",
        desc:
          "In the weeks following an apocalyptic event, a husband and wife venture across the countryside inhabited by deadly factions in search of safety, and must work together as they are pushed to the breaking point in order to survive.",
        writer: "Mike P. Nelson",
        director: "Mike Nelson"
      },
      {
        id: 4,
        title: "Red Hood",
        desc:
          "This little piggy went to the market. This little piggy never came home",
        writer: "Holly Soriano",
        director: "Zack Snyder"
      },
      {
        id: 5,
        title: "Star Wars: Rise of the Skywalkers",
        desc: "A long Time ago...",
        writer: "JJ Abrahms",
        director: "JJ Abrahms"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
