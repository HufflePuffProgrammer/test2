import React, { Component } from "react";

class Test extends Component {
  state = {
    strName: "",
    charSingle: "",
    results: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async e => {
    e.preventDefault();
    const { strName, charSingle, success } = this.state;
    var results = false;
    if (strName.search(charSingle) >= 1) {
      results = true;
      console.log("Found");
    } else {
      results = false;
      console.log("Not Found");
    }

    console.log("strName");
    console.log(strName);
    console.log(charSingle);
    console.log(results);
  };
  render() {
    const { inputName, charSingle, results } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div class="row">
            <div class="col">
              Name{" "}
              <input
                type="text"
                name="strName"
                value={inputName}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              Single Char{" "}
              <input
                type="text"
                name="charSingle"
                value={charSingle}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="submit" name="Submit" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h1>Results are </h1>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Test;
