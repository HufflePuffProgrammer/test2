import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Select from "react-select";

class Test extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handlePoorClick = this.handlePoorClick.bind(this);

    const selectGenresTemp = [
      { label: "Superhero", value: "superhero" },
      { label: "Coming Of Age", value: "comingofage" },
      { label: "Road Trip", value: "roadtrip" },
      { label: "Golden Fleece", value: "goldenfleece" }
    ];
    const selectGoodTemp = [
      { label: "Good - Opening Image", value: "gopeningimage" },
      { label: "Good - Midpoint", value: "gmidpoint" },
      { label: "Good - Character Arc", value: "gchararc" },
      { label: "Good - Theme", value: "gtheme" }
    ];
    const selectPoorTemp = [
      { label: "Poor - Opening Image", value: "popeningimage" },
      { label: "Poor - Midpoint", value: "pmidpoint" },
      { label: "Poor - Character Arc", value: "pchararc" },
      { label: "Poor - Theme", value: "ptheme" }
    ];

    this.state = {
      selectedGenreOption: null,
      selectedGoodOption: null,
      selectedPoorOption: null,
      selectPoor: selectPoorTemp,
      selectGood: selectGoodTemp,
      selectGenres: selectGenresTemp
    };
  }

  handleGenreClick = selectedGenreOption => {
    const { label, value } = selectedGenreOption;
    console.log("Option selected:", selectedGenreOption);
    console.log("label");
    console.log(label);
    console.log(value);
    this.setState({ selectedGenreOption });
  };

  handleGoodClick = selectedGoodOption => {
    const { label, value } = selectedGoodOption;
    console.log("label");
    console.log(label);
    console.log(value);
    this.setState({ selectedGoodOption });
    console.log("Option selected:", selectedGoodOption);
  };

  handlePoorClick = selectedPoorOption => {
    const { label, value } = selectedPoorOption;
    console.log("label");
    console.log(label);
    console.log(value);
    this.setState({ selectedPoorOption });
    console.log("Option selected:", selectedPoorOption);
  };
  render() {
    return (
      <div>
        <h2>Comments</h2>

        <div col="12">
          <div row="4">
            <Select
              placeholder={"Genres"}
              options={this.state.selectGenres}
              onChange={this.handleGenreClick}
              value={this.state.selectedGenreOption}
            />
          </div>
          <div row="4">
            <Select
              placeholder={"Good Characteristics"}
              options={this.state.selectGood}
              onChange={this.handleGoodClick}
              value={this.state.selectedGoodOption}
            />
          </div>
          <div row="4">
            <Select
              placeholder={"Poor Characteristics"}
              options={this.state.selectPoor}
              onChange={this.handlePoorClick}
              value={this.state.selectedPoorOption}
            />
          </div>
        </div>

        {/* Movie Details Per Comment BEGIN */}
        <div>
          <Card style={{ width: "56rem" }}>
            <Card.Title>
              The Lobster
              <Link to="/comments/add" className="nav-link">
                <i
                  className="fas fa-plus"
                  style={{
                    float: "right",
                    color: "blue",
                    marginRight: "10rem"
                  }}
                />
              </Link>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            {/* Movie Details Per Comment END */}
            <Card.Body>
              {/*<--START COMMENTS LIST//--> */}
              <div class="container-fluid">
                <table class="table">
                  <thead>
                    {/* Movies Per Comment BEGIN*/}
                    <tr class="d-flex">
                      <th class="w-5"></th>
                      <th class="w-95">
                        User: Richard Soriano {/* */}
                        <Link to={`/comments/edit/5`}>
                          <i
                            className="fas fa-pencil-alt"
                            style={{
                              cursor: "pointer",
                              float: "right",
                              color: "black",
                              marginRight: "20rem"
                            }}
                          />
                        </Link>{" "}
                        <i
                          className="far fa-trash-alt"
                          style={{
                            cursor: "pointer",
                            float: "right",
                            color: "red"
                          }}
                        />
                      </th>
                    </tr>
                    {/* Movies Per Comment END */}
                  </thead>
                  <tbody>
                    {/* Comment Text Begin*/}
                    <tr class="d-flex">
                      <td class="w-25">Genres </td>
                      <td class="w-75">
                        {" "}
                        {/*this.commentGenreText(commentText) */}
                      </td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Good</td>
                      <td class="w-75">
                        {/*this.commentCharsGoodText(commentText) */}
                      </td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Poor </td>
                      <td class="w-75">
                        {/* this.commentCharsPoorText(commentText)}*/}
                      </td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Comment </td>
                      <td class="w-75">
                        {" "}
                        {/* this.commentText(commentText) */}}
                      </td>
                    </tr>
                    {/* Comment Text End */}
                  </tbody>
                </table>
              </div>
              {/*<--END COMMENTS LIST //--> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default Test;
