import React, { Component } from "react";
import { Consumer } from "../../context";
import Checkbox from "../checkboxes/Checkbox";
import PropTypes from "prop-types";
import axios from "axios";
import classnames from "classnames";

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    let listCheckboxes = [];
    listCheckboxes["chararc_poor"] = false;
    listCheckboxes["opening_poor"] = false;
    listCheckboxes["dialogue_poor"] = false;
    listCheckboxes["opening_good"] = false;
    listCheckboxes["chararc_good"] = false;
    listCheckboxes["dialogue_good"] = false;
    listCheckboxes["superhero"] = false;
    listCheckboxes["goldenfleece"] = false;
    listCheckboxes["fooltriumphant"] = false;

    this.state = {
      id: this.props.match.params,
      movieid: 0,
      commentText: "",
      checkboxes: listCheckboxes,
      commentText: "",
      errors: {}
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments/${id}`
    );

    const comment = res.data;

    let listCheckboxes = [];
    listCheckboxes["opening_poor"] = comment.opening_poor;
    listCheckboxes["chararc_poor"] = comment.chararc_poor;
    listCheckboxes["dialogue_poor"] = comment.dialogue_poor;
    listCheckboxes["opening_good"] = comment.opening_good;
    listCheckboxes["chararc_good"] = comment.chararc_good;
    listCheckboxes["dialogue_good"] = comment.dialogue_good;
    listCheckboxes["superhero"] = comment.superhero;
    listCheckboxes["goldenfleece"] = comment.goldenfleece;
    listCheckboxes["fooltriumphant"] = comment.fooltriumphant;

    this.setState({
      id: comment.id,
      movieid: comment.movieid,
      commentText: comment.comment_text,
      checkboxes: listCheckboxes
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id, commentText, checkboxes, movieid } = this.state;

    //Check for Errors
    if (commentText === "") {
      this.setState({ errors: { comment_text: "Comment is required" } });
      return;
    }
    //updComment has updated data in component
    const updComment = {
      id,
      movieid,
      comment_text: commentText,
      opening_poor: checkboxes["opening_poor"],
      chararc_poor: checkboxes["chararc_poor"],
      dialogue_poor: checkboxes["dialogue_poor"],
      opening_good: checkboxes["opening_good"],
      chararc_good: checkboxes["chararc_good"],
      dialogue_good: checkboxes["dialogue_good"],
      superhero: checkboxes["superhero"],
      goldenfleece: checkboxes["goldenfleece"],
      fooltriumphant: checkboxes["fooltriumphant"]
    };
    // const { id } = this.props.match.params;
    // const res = await axios.put(
    //   `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments/${id}`,
    //   updComment
    // );

    dispatch({
      type: "UPDATE_COMMENT",
      payload: updComment
    });

    //Clear fields
    this.setState({
      id,
      movieid,
      commentText,
      checkboxes: [],
      errors: {}
    });
    this.props.history.push(`/`);
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

  render() {
    const { checkboxes, commentText, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <header id="main-header" class="py-2 bg-warning text-white">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <h1>
                        <i class="far fa-comments"></i> Comment Edit
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
              <div className="card mb-3">
                <div className="card-header">Update Comment</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      createcheckbox
                      <label htmlFor="label">Comment: </label>
                      <textarea
                        name="commentText"
                        class="form-control form-control-sm mb-3"
                        rows="5"
                        id="commentText"
                        placeholder="Type your comment"
                        className={classnames(
                          "form-control form-control-sm mb-3",
                          {
                            "is-invalid": errors.comment_text
                          }
                        )}
                        onChange={this.handleTextboxChange}
                        value={commentText}
                      />
                      {errors.comment_text && (
                        <div className="invalid-feedback">
                          {errors.comment_text}
                        </div>
                      )}
                    </div>
                    <input
                      type="submit"
                      value="Update Comment"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// CommentEdit.propTypes = {
//   id: PropTypes.number.isRequired
// };
export default CommentEdit;
