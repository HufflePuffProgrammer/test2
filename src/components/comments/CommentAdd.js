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
    listCheckboxes["chararc_poor"] = false;
    listCheckboxes["dialogue_poor"] = false;

    listCheckboxes["opening_good"] = false;
    listCheckboxes["chararc_good"] = false;
    listCheckboxes["dialogue_good"] = false;

    listCheckboxes["superhero"] = false;
    listCheckboxes["goldenfleece"] = false;
    listCheckboxes["fooltriumphant"] = false;
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
    const { errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Comment</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    {this.createCheckboxes()}
                    <label htmlFor="label">Comment: </label>

                    <div className="form-group">
                      <textarea
                        name="commentText"
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
                      />
                      {errors.comment_text && (
                        <div className="invalid-feedback">
                          {errors.comment_text}
                        </div>
                      )}
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Add Comment"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
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
