import React, { Component } from "react";
import { Consumer } from "../../context";
import Checkbox from "../checkboxes/Checkbox";
import axios from "axios";

class CommentAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      checkboxes: []
      // isSelectedBox: false
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

    this.setState({
      checkboxes: listCheckboxes
      //isSelectedBox: false
    });
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { commentText, checkboxes } = this.state;

    console.log("onsubmit");
    console.log(checkboxes);

    const newComment = {
      movieid: 5,
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

    console.log("newComments");
    console.log(newComment);

    //Check for Errors

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

    this.props.history.push("/comments");
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
    return (
      <div>
        <Checkbox
          genre_id="opening_poor"
          label="Poor Opening"
          key="opening_poor"
          isSelected={this.state.checkboxes["opening_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="chararc_poor"
          label="Poor Character Arc"
          key="chararc_poor"
          isSelected={this.state.checkboxes["chararc_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <Checkbox
          genre_id="dialogue_poor"
          label="Poor Dialogue"
          key="dialogue_poor"
          isSelected={this.state.checkboxes["dialogue_poor"]}
          onCheckboxChange={this.handleCheckboxChange}
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
    const { commentText } = this.state;

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

                    <input
                      type="text"
                      name="commentText"
                      value={commentText}
                      placeholder="Type your comment"
                      onChange={this.handleTextboxChange}
                    />
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
export default CommentAdd;
