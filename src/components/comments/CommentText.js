import React, { Component } from "react";

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

    return (
      <div>
        <li className="list-group-item list-group-item-light">
          Genre: {this.commentGenreText(commentText)}
          <br />
          Good use of: {this.commentCharsGoodText(commentText)}
          <br />
          Poor use of: {this.commentCharsPoorText(commentText)}
          <br />
          <li>{this.commentText(commentText)}</li>
        </li>
      </div>
    );
  }
}

export default CommentText;
