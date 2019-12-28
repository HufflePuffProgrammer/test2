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
    listCheckboxes["dialogue_poor"] = true;
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
    const { id, movieid, commentText, checkboxes } = this.state;

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

  createCheckboxes = checkboxes => {
    return (
      <div>
        <Checkbox
          genre_id="opening_poor"
          label="Poor Opening"
          key="opening_poor"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["opening_poor"]}
        />
        <Checkbox
          genre_id="chararc_poor"
          label="Poor Character Arc"
          key="chararc_poor"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["chararc_poor"]}
        />
        <Checkbox
          genre_id="dialogue_poor"
          label="Poor Dialogue"
          key="dialogue_poor"
          onCheckboxChange={this.handleCheckboxChange}
          isSelected={checkboxes["dialogue_poor"]}
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
    const { checkboxes, commentText, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Update Comment</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    {this.createCheckboxes(checkboxes)}
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
