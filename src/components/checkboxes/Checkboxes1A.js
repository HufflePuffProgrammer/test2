import React, { Component } from "react";
import Checkbox from "./Checkbox";

class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: []
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  componentDidMount() {
    let listCheckboxes = [];
    listCheckboxes["opening_poor"] = false;
    listCheckboxes["chararc_poor"] = false;
    listCheckboxes["dialogue_poor"] = false;
    this.setState({
      checkboxes: listCheckboxes
    });
  }

  handleCheckboxChange(event) {
    const { name, value } = event.target;

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

  render() {
    const { mycheckboxes } = this.props;
    let tempmycheckboxes = "inside commenttext";
    // this.props.mycheckboxes = tempmycheckboxes;
    // console.log("inside CommentText");
    // console.log(mycheckboxes);

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
  }
}
export default Checkboxes;
