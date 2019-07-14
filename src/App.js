import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "./components/movies/Movies";
import MovieAdd from "./components/movies/MovieAdd";

import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";

class App extends Component {
  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Screenplay Salon" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movies/add" component={MovieAdd} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>

          <Switch>
            <Route exact path="/movie/add" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
