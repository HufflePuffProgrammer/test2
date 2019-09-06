import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "./components/movies/Movies";
import MovieAdd from "./components/movies/MovieAdd";
import MovieEdit from "./components/movies/MovieEdit";
import Comments from "./components/comments/Comments";
import CommentAdd from "./components/comments/CommentAdd";

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
                <Route exact path="/movie/add" component={MovieAdd} />
                <Route exact path="/movie/edit/:id" component={MovieEdit} />
                <Route exact path="/about" component={About} />
                <Route exact path="/comments/:id" component={Comments} />
                <Route exact path="/comments/add" component={CommentAdd} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
