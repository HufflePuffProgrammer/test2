import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Hi. My name is Richard</h1>
        <div>
          <Card style={{ width: "36rem" }}>
            <Card.Body>
              <Card.Title>The Lobster</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Director: Yorgos Lanthimos
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Writer: Yorgos Lanthimos
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Starring: Rachel Weisz
              </Card.Subtitle>
              <Card.Text>
                In a dystopian near future, single people, according to the laws
                of The City, are taken to The Hotel, where they are obliged to
                find a romantic partner in forty-five days or are transformed
                into beasts and sent off into The Woods.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Card style={{ width: "56rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Comments:</Card.Subtitle>
            <div class="container">
              <div class="row">
                <div class="col-1">
                  <div class="panel panel-blue">Genre</div>
                </div>
                <div class="col-11">
                  <div class="panel panel-blue">
                    Superhero, Coming of Age, Road Trip
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <div class="panel panel-red">Good</div>
                </div>
                <div class="col-11">
                  <div>Opening shot,Character Arc, </div>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <div class="panel panel-yellow">Poor</div>
                </div>
                <div class="col-11">
                  <div class="panel panel-yellow">
                    Midpoint, Second Act, Third Act
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Header>Movies</Card.Header>

            <ListGroup variant="flush">
              <ListGroup.Item>
                Force Awakens - WALT DISNEY STUDIOS MOTION PICTURES | RELEASE
                DATE: DECEMBER 18, 2015 Summary: A continuatio of the Star Wars
                saga. variant="flush"
              </ListGroup.Item>
              <ListGroup.Item>The Last Jedi</ListGroup.Item>
              <ListGroup.Item>SkyWalker Rises</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <div class="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Image head</th>
                <th scope="col">Movie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg"
                    thumbnail
                    roundedCircle
                    alt="Sheep"
                  />
                </td>
                <td>Bootstrap 4 CDN and Starter Template</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Test;
