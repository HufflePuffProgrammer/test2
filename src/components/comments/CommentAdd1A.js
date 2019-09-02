import React, { Component } from "react";
import { Consumer } from "../../context";
import Checkboxes from "../checkboxes/Checkboxes";

import axios from "axios";

class CommentAdd extends Component {
  constructor() {
    super();
    this.state = {
      commentText: "",
      mycheckboxes: "test"
    };
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { commentText, checkboxes, mycheckboxes } = this.state;

    const newComment = {
      commentText
    };
    let res;
    res.data = newComment;
    console.log("onsubmit");
    console.log(mycheckboxes);
    console.log(res.data);

    //Check for Errors

    dispatch({ type: "ADD_COMMENT", payload: res.data });
    //Clear inputs
    // this.setState({
    //   newComment: "",
    //   selectBoxes: []
    // });

    //this.props.history.push("/comments");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { commentText, mycheckboxes } = this.state;
    console.log("Mycheckboxes CommentAdd");
    console.log(mycheckboxes);
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
                    <Checkboxes
                      commentText={commentText}
                      mycheckboxes={this.state.mycheckboxes}
                    />

                    <label htmlFor="label">Comment: </label>

                    <input
                      type="text"
                      name="commentText"
                      value={commentText}
                      placeholder="Type your comment"
                      onChange={this.onChange}
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
