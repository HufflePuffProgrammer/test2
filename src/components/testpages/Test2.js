import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {/*-- START --> */}
        <Table>
          <tbody>
            <tr>
              <td>
                <Card style={{ width: "56rem" }}>
                  <Card.Body>
                    <Card.Title>The Lobster</Card.Title>
                    <Card.Subtitle className="mb-1 text-muted">
                      Director: Yorgos Lanthimos
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">
                      Writer: Yorgos Lanthimos
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">
                      Starring: Rachel Weisz
                    </Card.Subtitle>
                    <Card.Text>
                      In a dystopian near future, single people, according to
                      the laws of The City, are taken to The Hotel, where they
                      are obliged to find a romantic partner in forty-five days
                      or are transformed into beasts and sent off into The
                      Woods.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <Table>
                <tbody>
                  <tr>
                    <td>
                      {/* If not comments is empty */}
                      <Card.Link href="#">More Comments</Card.Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card style={{ width: "56rem" }}>
                        <Card.Body>
                          <div class="container">
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-blue">Genre</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-blue">
                                  Superhero, Coming of Age, Road Trip
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-red">Good</div>
                              </div>
                              <div class="col-10">
                                <div>Opening shot,Character Arc, </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-yellow">Poor</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-yellow">
                                  Midpoint, Second Act, Third Act
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div>
                                <div class="panel panel-yellow"></div>
                              </div>
                              <div class="col-12">
                                <div class="panel panel-yellow">
                                  I really loved this movie, lots of great
                                  moments.
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card style={{ width: "56rem" }}>
                        <Card.Body>
                          <div class="container">
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-blue">Genre</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-blue">
                                  Superhero, Coming of Age, Road Trip
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-red">Good</div>
                              </div>
                              <div class="col-10">
                                <div>Opening shot,Character Arc, </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-yellow">Poor</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-yellow">
                                  Midpoint, Second Act, Third Act
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </tr>
          </tbody>
        </Table>
        <Card.Link href="#">More Comments</Card.Link>
        {/* END MOVIE 1*/}
        {/* START MOVIE 2*/}

        <Table borderless>
          <tbody>
            <tr>
              <td>
                <Card style={{ width: "56rem" }}>
                  <Card.Body>
                    <Card.Title>Back to the Future</Card.Title>
                    <Card.Subtitle className="mb-1 text-muted">
                      Director: Robert Zemeckis
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">
                      Writer: Bob Gale
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">
                      Starring: Michael Keaton, Lea Thompson, Crispin Glover
                    </Card.Subtitle>
                    <Card.Text>
                      Marty McFly, a 17-year-old high school student, is
                      accidentally sent thirty years into the past in a
                      time-traveling DeLorean invented by his close friend, the
                      maverick scientist Doc Brown.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <Table borderless>
                <tbody>
                  <tr>
                    <td>
                      <Card style={{ width: "56rem" }}>
                        <Card.Body>
                          <Card.Subtitle className="mb-2 text-muted">
                            Comments:
                          </Card.Subtitle>
                          <div class="container">
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-blue">Genre</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-blue">Road Trip</div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-red">Good</div>
                              </div>
                              <div class="col-10">
                                <div>Opening shot,Character Arc </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-yellow">Poor</div>
                              </div>
                              <div class="col10">
                                <div class="panel panel-yellow">
                                  Cardboard Cutout Enemy.
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div>
                                <div class="panel panel-yellow"></div>
                              </div>
                              <div class="col-12">
                                <div class="panel panel-yellow">
                                  Skirts were too long.
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Card style={{ width: "56rem" }}>
                        <Card.Body>
                          <Card.Subtitle className="mb-2 text-muted">
                            Comments:
                          </Card.Subtitle>
                          <div class="container">
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-blue">Genre</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-blue">
                                  Superhero, Coming of Age, Road Trip
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-red">Good</div>
                              </div>
                              <div class="col-10">
                                <div>Opening shot,Character Arc, </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-2">
                                <div class="panel panel-yellow">Poor</div>
                              </div>
                              <div class="col-10">
                                <div class="panel panel-yellow">
                                  Midpoint, Second Act, Third Act
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </tr>
          </tbody>
        </Table>

        {/* END MOVIE 2*/}
        <div>
          <Card style={{ width: "56rem" }}>
            <Card.Title>
              The Lobster{" "}
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
            <Card.Body>
              {/*<--START COMMENTS LIST//--> */}
              <div class="container-fluid">
                <table class="table">
                  <thead>
                    <tr class="d-flex">
                      <th class="w-10"></th>
                      <th class="w-90">
                        Richard Soriano
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
                  </thead>
                  <tbody>
                    <tr class="d-flex">
                      <td class="w-25">Genres </td>
                      <td class="w-75">Coming of Age</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Good</td>
                      <td class="w-75">Opening image, tables, joins</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Poor </td>
                      <td class="w-75">Arc, Char, Midpoint</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Comment </td>
                      <td class="w-75">The arc feels too long.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*<--END COMMENTS LIST //--> */}

              {/*<--START COMMENTS LIST//--> */}
              <div class="container-fluid">
                <table class="table">
                  <thead>
                    <tr class="d-flex">
                      <th class="w-10"></th>
                      <th class="w-90">
                        Lorraine Baines
                        <Link to={`/comments/edit/5`}>
                          <i
                            className="fas fa-pencil-alt"
                            style={{
                              cursor: "pointer",
                              float: "right",
                              color: "black",
                              marginRight: "10rem"
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
                  </thead>
                  <tbody>
                    <tr class="d-flex">
                      <td class="w-25">Genres </td>
                      <td class="w-75">
                        Coming of Age, Golden Fleece, Dude with Problem
                      </td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Good</td>
                      <td class="w-75">Opening image, tables, joins</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Poor </td>
                      <td class="w-75">Ending</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Comment </td>
                      <td class="w-75">
                        The actor who plays his Mom is hilarious. Oscar please.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*<--END COMMENTS LIST //--> */}

              {/*<--START COMMENTS LIST//--> */}
              <div class="container-fluid">
                <table class="table">
                  <thead>
                    <tr class="d-flex">
                      <th class="w-10"></th>
                      <th class="w-90">
                        Marty McFly
                        <Link to={`/comments/edit/5`}>
                          <i
                            className="fas fa-pencil-alt"
                            style={{
                              cursor: "pointer",
                              float: "right",
                              color: "black",
                              marginRight: "10rem"
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
                  </thead>
                  <tbody>
                    <tr class="d-flex">
                      <td class="w-25">Genres </td>
                      <td class="w-75">Superhero</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Good</td>
                      <td class="w-75">Char, Char arc, midpoint</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Poor </td>
                      <td class="w-75">Ending,</td>
                    </tr>
                    <tr class="d-flex">
                      <td class="w-25">Comment </td>
                      <td class="w-75">
                        I didn't find the actor who plays Biff to be a cardboard
                        cutout.
                      </td>
                    </tr>
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
