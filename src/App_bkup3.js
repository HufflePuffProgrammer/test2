import React, { Component } from "react";
import Checkbox from "./Checkbox";
import firebase from "./firebase.js";
import "./App.css";
import { Link } from "react-router";

import Movie from "./components/movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      userName: "",
      items: [],
      dishLabelTypes: [],
      dishLabelsArrayName: [],
      checkboxes: [],
      currentMovie: "",
      movies: [],
      comments: [],
      genres: [],
      good_characteristics: [],
      bad_characteristics: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyAj0bMYHcsNUbyCDakCQGSzH6kCZ_S3sQQ",
      authDomain: "test2-2813f.firebaseapp.com",
      databaseURL: "https://test2-2813f.firebaseio.com",
      projectId: "test2-2813f",
      storageBucket: "test2-2813f.appspot.com",
      messagingSenderId: "202543370394",
      appId: "1:202543370394:web:3cdb59955d3bea3f"
    };
    //Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
  };
  componentDidMount() {
    const dishlabelsRef = firebase.database().ref("dishlabels");

    // Read Checkbox label names and types from DB.
    dishlabelsRef.on("value", snapshot => {
      let dishLabels = snapshot.val();
      let dishLabelsArrayNameTemp = [];
      let checkboxesTemp = [];

      for (let d in dishLabels) {
        dishLabelsArrayNameTemp[d] = dishLabels[d];
        checkboxesTemp[d] = false;
      }

      this.setState({
        dishLabelsArrayName: dishLabelsArrayNameTemp,
        checkboxes: checkboxesTemp
      });
    });

    let newStateMovies = [];
    let newStateComments = [];
    let newStateGenres = [];

    const moviesRef = firebase.database().ref("movies");
    moviesRef.on("value", snapshot => {
      let movies = snapshot.val();
      for (let movie in movies) {
        newStateMovies.push({
          movie_id: movies[movie].movie_id,
          title: movies[movie].title,
          director: movies[movie].director,
          writer: movies[movie].writer
        });
      }
      this.setState({
        movies: newStateMovies
      });
    });

    const commentsRef = firebase.database().ref("comments");
    commentsRef.on("value", snapshot => {
      let comments = snapshot.val();
      for (let comment in comments) {
        let newComment = {
          comment_id: comments[comment].comment_id,
          movie_id: comments[comment].movie_id,
          comment_text: comments[comment].comment_text,
          genres: comments[comment].genres,
          good_characteristics: comments[comment].good_characteristics,
          bad_characteristics: comments[comment].bad_characteristics
        };
        newStateComments.push(newComment);
        let newGenre = {
          comment_id: comments[comment].comment_id,
          bad_characteristics: comments[comment].bad_characteristics
        };

        newStateGenres.push(newGenre);
      }
      this.setState({
        comments: newStateComments,
        genres: newStateGenres
      });
    });
  }

  removeItem(itemID) {
    const itemsRef = firebase.database().ref(`/items/${itemID}`);
    itemsRef.remove();
  }

  handleSubmit = event => {
    event.preventDefault();
    let dishtypes = {
      dessert: false,
      sidedish: false,
      maincourse: false
    };

    const itemsRef = firebase.database().ref("items");

    const items = {
      currentItem: this.state.currentItem,
      userName: this.state.userName,
      type: this.state.checkboxes
    };

    itemsRef.push(items);

    this.setState({
      currentItem: "",
      userName: "",
      checkboxes: []
    });
  };

  createCheckbox = (id, label) => (
    <Checkbox
      label={label}
      genre_id={id}
      isSelected={this.state.checkboxes[id]}
      onCheckboxChange={this.handleCheckboxChange}
      key={id}
    />
  );

  createCheckboxes = () => {
    let labelTypes = this.state.dishLabelsArrayName;
    let listCheckBoxes = [];

    for (let type in labelTypes) {
      listCheckBoxes.push(this.createCheckbox(type, labelTypes[type]));
    }
    return listCheckBoxes;
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  selectAllCheckboxes = isSelected => {
    for (let checkbox in this.state.checkboxes) {
      this.setState(prevState => ({
        checkboxes: { ...prevState.checkboxes, [checkbox]: isSelected }
      }));
    }
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [value]: !prevState.checkboxes[value]
      }
    }));
  };

  renderFoodTypes = types => {
    let stringTypes = "";

    for (let type in types) {
      if (types[type]) {
        stringTypes = stringTypes.concat(
          ",",
          this.state.dishLabelsArrayName[type]
        );
      }
    }
    let stringReturn = stringTypes;
    if (stringTypes.indexOf(",") === 0) {
      stringReturn = stringTypes.slice(1);
    }
    return stringReturn;
  };

  renderGenres = movie_id => {
    let { comments } = this.state;
    let strGenres = "";

    return comments
      .filter(c => {
        return c.movie_id === movie_id;
      })
      .map(c => {
        if (c.genres.coming_of_age) {
          strGenres = strGenres.concat(",", "Coming Of Age");
        }
        if (c.genres.golden_fleece) {
          strGenres = strGenres.concat(",", "Golden Fleece");
        }
        if (c.genres.monster_in_house) {
          strGenres = strGenres.concat(",", "Monster In House");
        }
        return strGenres.slice(1);
      });
  };
  renderGoodChars = movie_id => {
    let { comments } = this.state;
    let strGoodChars = "";

    return comments
      .filter(c => {
        return c.movie_id === movie_id;
      })
      .map(c => {
        if (c.good_characteristics.g_char_intro) {
          strGoodChars = strGoodChars.concat(",", " character introduction");
        }
        if (c.good_characteristics.g_dialogue) {
          strGoodChars = strGoodChars.concat(",", " dialogue");
        }
        if (c.good_characteristics.g_opening_shot) {
          strGoodChars = strGoodChars.concat(",", " opening shot");
        }
        return strGoodChars.slice(1);
      });
  };
  renderBadChars = movie_id => {
    let { comments } = this.state;
    let strBadChars = "";

    return comments
      .filter(c => {
        return c.movie_id === movie_id;
      })
      .map(c => {
        if (c.bad_characteristics.b_char_intro) {
          strBadChars = strBadChars.concat(",", "character introduction");
        }
        if (c.bad_characteristics.b_dialogue) {
          strBadChars = strBadChars.concat(",", "dialogue");
        }
        if (c.bad_characteristics.b_opening_shot) {
          strBadChars = strBadChars.concat(",", "opening shot");
        }
        return strBadChars.slice(1);
      });
  };

  renderComments = movie_id => {
    let { comments } = this.state;

    return comments
      .filter(c => {
        return c.movie_id === movie_id;
      })
      .map(c => {
        return c.comment_text;
      })
      .join(" ,");
  };

  render() {
    let returnArray = [];
    return (
      <div>
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="What's your name?"
                value={this.state.userName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="What are you bringing?"
                value={this.state.currentItem}
                onChange={this.handleChange}
              />

              {this.createCheckboxes()}
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.selectAll}
              >
                {" "}
                Select All
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <movies />
            </div>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {this.state.movies.map(movie => {
                  return (
                    <li key={movie.movie_id}>
                      <h3>{movie.title}</h3>

                      <p>
                        <i>director</i> {movie.director}
                      </p>
                      <p>
                        <i>writer</i> {movie.writer}
                      </p>
                      <p>
                        <i>Comments: </i> {this.renderComments(movie.movie_id)}
                      </p>
                      <p>
                        <i>Genres: </i> {this.renderGenres(movie.movie_id)}
                      </p>
                      <p>
                        <i>Good use of: </i>{" "}
                        {this.renderGoodChars(movie.movie_id)}
                      </p>
                      <p>
                        <i>Bad use of: </i>{" "}
                        {this.renderBadChars(movie.movie_id)}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
