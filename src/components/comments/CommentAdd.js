import React, { Component } from "react";
import { Consumer } from "../../context";
import Checkbox from "../checkboxes/Checkbox";
import uuid from "uuid";
import PropTypes from "prop-types";
import classnames from "classnames";

class CommentAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: "",
      checkboxes: [],
      movieid: this.props.match.params,
      errors: {}
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  componentDidMount() {
    let listCheckboxes = [];
    listCheckboxes["opening_poor"] = false;
    listCheckboxes["premise_poor"] = false;
    listCheckboxes["character_poor"] = false;
    listCheckboxes["dialogue_poor"] = false;

    listCheckboxes["opening_good"] = false;
    listCheckboxes["premise_good"] = false;
    listCheckboxes["character_good"] = false;
    listCheckboxes["dialogue_good"] = false;

    listCheckboxes["dude_with_a_problem"] = false;
    listCheckboxes["golden_fleece"] = false;
    listCheckboxes["buddy_love"] = false;
    listCheckboxes["institutionalized"] = false;
    const { id } = this.props.match.params;

    this.setState({
      checkboxes: listCheckboxes,
      movieid: id
      //isSelectedBox: false
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { commentText, checkboxes, movieid } = this.state;

    //Check for Errors
    if (commentText === "") {
      this.setState({ errors: { comment_text: "Comment is required" } });
      return;
    }
    const newComment = {
      id: uuid(),
      movieid: movieid,
      superhero: checkboxes.superhero,
      goldenfleece: checkboxes.goldenfleece,
      fooltriumphant: checkboxes.fooltriumphant,
      opening_good: checkboxes.opening_good,
      chararc_good: checkboxes.chararc_good,
      dialogue_good: checkboxes.dialogue_good,
      opening_poor: checkboxes.opening_poor,
      chararc_poor: checkboxes.chararc_poor,
      dialogue_poor: checkboxes.dialogue_poor,
      comment_text: commentText
    };

    //Call reducer and dispatch
    //const res = axios.post(
    // "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments",
    //  newComment
    //);

    dispatch({ type: "ADD_COMMENT", payload: newComment });

    this.deselectAll();
    this.setState({
      commentText: ""
    });
    this.props.history.push(`/comments/${movieid}`);
  };

  handleCheckboxChange(event) {
    const { value } = event.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [value]: !prevState.checkboxes[value]
      }
    }));
  }
  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: { ...prevState.checkboxes, [checkbox]: isSelected }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);
  handleTextboxChange = e => this.setState({ [e.target.name]: e.target.value });

  createPoorCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Poor Points</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="opening_poor"
          label="Opening"
          key="opening_poor"
          isSelected={checkboxes["opening_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="premise_poor"
          label="Premise"
          key="premise_poor"
          isSelected={checkboxes["premise_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="character_poor"
          label="Character"
          key="character_poor"
          isSelected={checkboxes["character_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_poor"
          label="Dialogue"
          key="dialogue_poor"
          isSelected={checkboxes["dialogue_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };
  createGoodCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Good Points</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="opening_good"
          label="Opening"
          key="opening_good"
          isSelected={checkboxes["opening_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="premise_good"
          label="Premise"
          key="premise_good"
          isSelected={checkboxes["premise_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="character_good"
          label="Character"
          key="character_good"
          isSelected={checkboxes["character_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_good"
          label="Dialogue"
          key="dialogue_good"
          isSelected={checkboxes["dialogue_good"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };

  createGenreCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div class="col-sm-4">
        <div>
          <h6>
            <strong>Genres</strong>
          </h6>
        </div>
        <Checkbox
          genre_id="dude_with_a_problem"
          label="Dude with a problem"
          key="dude_with_a_problem"
          isSelected={checkboxes["dude_with_a_problem"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="golden_fleece"
          label="Golden Fleece"
          key="golden_fleece"
          isSelected={checkboxes["golden_fleece"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="buddy_love"
          label="Buddy Love"
          key="buddy_love"
          isSelected={checkboxes["buddy_love"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="institutionalized"
          label="Institutionalized"
          key="institutionalized"
          isSelected={checkboxes["institutionalized"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  };
  createCheckboxes = () => {
    const { checkboxes } = this.state;
    return (
      <div>
        <Checkbox
          genre_id="opening_poor"
          label="Poor Opening"
          key="opening_poor"
          isSelected={checkboxes["opening_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="chararc_poor"
          label="Poor Character Arc"
          key="chararc_poor"
          isSelected={checkboxes["chararc_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_poor"
          label="Poor Dialogue"
          key="dialogue_poor"
          isSelected={checkboxes["dialogue_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_good"
          label="Good Dialogue"
          key="dialogue_good"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["dialogue_good"]}
        />
        <Checkbox
          genre_id="chararc_good"
          label="Good Character Arc"
          key="chararc_good"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["chararc_good"]}
        />
        <Checkbox
          genre_id="opening_good"
          label="Good Opening"
          key="opening_good"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["opening_good"]}
        />
        <Checkbox
          genre_id="fooltriumphant"
          label="Fool Triumphant"
          key="fooltriumphant"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["fooltriumphant"]}
        />
        <Checkbox
          genre_id="superhero"
          label="Super Hero"
          key="superhero"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["superhero"]}
        />
        <Checkbox
          genre_id="goldenfleece"
          label="Golden Fleece"
          key="goldenfleece"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["goldenfleece"]}
        />
        <div class="row mt-4"></div>

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
      </div>
    );
  };

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          //Add later. Show movie title
          // const moviesPerMovieID = movies.filter(
          //   movie => Number(movie.id) === Number(id)
          // );
          return (
            <div>
              <header id="main-header" class="py-2 bg-warning text-white">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <h1>
                        <i class="far fa-comments"></i> Comment Add
                      </h1>
                    </div>
                  </div>
                </div>
              </header>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                          <div class="row">
                            {this.createGoodCheckboxes()}
                            {this.createPoorCheckboxes()}
                            {this.createGenreCheckboxes()}

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
                          </div>
                          <div class="row mt-4"></div>

                          <div class="row">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <label for="title">
                                  {" "}
                                  <strong>Title</strong>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Please enter a title"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <label for="body">
                                  <strong>Comment</strong>
                                </label>
                                <textarea
                                  name="editor1"
                                  class="form-control"
                                  placeholder="Please enter a comment"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section id="actions" class="py-2 mb-2 bg-light">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <a
                        href={`/comments/${id}`}
                        class="btn btn-light btn-block"
                      >
                        <i class="fas fa-arrow-left"></i> Back to Dashboard
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="/" class="btn btn-warning btn-block">
                        <i class="fas fa-check"></i> Add Comment
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <script src="https://cdn.ckeditor.com/4.13.0/standard/ckeditor.js"></script>
              <script>
                $("#year").text(new Date().getFullYear()); CKEDITOR.replace(
                'editor1' );
              </script>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// CommentAdd.propTypes = {
//   id: PropTypes.number.isRequired
// };

export default CommentAdd;
