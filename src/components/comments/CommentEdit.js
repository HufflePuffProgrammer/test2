import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

import uuid from "uuid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class CommentEdit extends Component {
  state = {
    commentText: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments/${id}`
    );

    const comment = res.data;

    this.setState({
      id: comment.id,
      movieid: comment.movieid,
      commentText: comment.commentText,
      superhero: comment.superhero
    });
    console.log("comment");
    console.log(this.state.id);
    console.log(this.state.movieid);
    console.log(this.state.commentText);
    console.log(this.state.superhero);
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id, movieid, commenttext, superhero } = this.state;

    //Check for Errors

    const updComment = {
      id,
      movieid,
      commenttext,
      superhero
    };
    // const { id } = this.props.match.params;
    const res = await axios.put(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments/${id}`,
      updComment
    );

    dispatch({
      type: "UPDATE_COMMENT",
      payload: res.data
    });
    //clear fields
    this.setState({
      id,
      movieid,
      commenttext,
      superhero,
      errors: {}
    });
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { id, movieid, commenttext, superhero, errors } = this.state;

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
                    {
                      //this.createCheckboxes()
                    }
                    <label htmlFor="label">Comment: </label>
                    <input
                      type="text"
                      name="commentText"
                      value={commenttext}
                      placeholder="Type your comment"
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
export default CommentEdit;
