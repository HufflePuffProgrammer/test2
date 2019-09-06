import React, { Component } from "react";
import Comment from "./Comment";
import axios from "axios";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;

    const res = await axios.get(
      `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/comments`
    );

    const comments = res.data;
    const commentsPerMovie = comments.filter(comment => comment.movieid == id);

    this.setState({
      comments: commentsPerMovie
    });
  }

  render() {
    const { comments } = this.state;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-primary">Comments v1.0 </span>List
        </h1>
        Comments:{" "}
        {comments.map(comment => (
          <Comment key={comment.movieid} comment={comment} />
        ))}
      </React.Fragment>
    );
  }
}

export default Comments;
