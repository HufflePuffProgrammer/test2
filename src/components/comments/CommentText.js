import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentText extends Component {
  commentGenreText = commentText => {
    const { superhero, goldenfleece, fooltriumphant } = commentText;
    let genreString = "";

    if (superhero) {
      genreString = genreString + "Superhero, ";
    }
    if (fooltriumphant) {
      genreString = genreString + "Fool Triumphant, ";
    }
    if (goldenfleece) {
      genreString = genreString + "Golden Fleece, ";
    }

    let newStr = genreString.substr(0, genreString.length - 2);

    return newStr;
  };

  commentCharsGoodText = commentText => {
    const { opening_good, chararc_good, dialogue_good } = commentText;
    let charsGoodString = "";

    if (opening_good) {
      charsGoodString = charsGoodString + "Opening, ";
    }
    if (chararc_good) {
      charsGoodString = charsGoodString + "Character Arc, ";
    }
    if (dialogue_good) {
      charsGoodString = charsGoodString + "Dialogue, ";
    }

    let newStr = charsGoodString.substr(0, charsGoodString.length - 2);

    return newStr;
  };

  commentCharsPoorText = commentText => {
    const { opening_poor, chararc_poor, dialogue_poor } = commentText;
    let charsGoodString = "";

    if (opening_poor) {
      charsGoodString = charsGoodString + "Opening, ";
    }
    if (chararc_poor) {
      charsGoodString = charsGoodString + "Character Arc, ";
    }
    if (dialogue_poor) {
      charsGoodString = charsGoodString + "Dialogue, ";
    }

    let newStr = charsGoodString.substr(0, charsGoodString.length - 2);

    return newStr;
  };

  commentText = commentText => {
    const { comment_text } = commentText;

    return comment_text;
  };

  render() {
    const { commentText } = this.props;
    const { title, user } = commentText;
    return (
      <tr>
        <td>
          <div>
            <strong>{title}</strong> by <a href="#">User: {user}</a>{" "}
            <small>Date: 12/26/2019</small>
          </div>

          <div>
            <strong>Genres</strong> {this.commentGenreText(commentText)}
          </div>
          <div>
            <strong>Good </strong> {this.commentCharsGoodText(commentText)}{" "}
          </div>
          <div>
            <strong>Poor</strong> {this.commentCharsPoorText(commentText)}
          </div>
          <div>{this.commentText(commentText)}</div>
        </td>
      </tr>
    );
  }
}

CommentText.propTypes = {
  commentText: PropTypes.object.isRequired
};
export default CommentText;
