import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";

import Table from "react-bootstrap/Table";

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>

        <div>
          <Card border="primary" bg="light" style={{ width: "36rem" }}>
            <Card.Header>The Lobster</Card.Header>
            <Card.Body>
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

          <Card borderless style={{ width: "56rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Comments:
              </Card.Subtitle>

              <Table striped bordered size="sm">
                <tbody>
                  <tr>
                    <td>Genres</td>
                    <td>lkjlkjlkj</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Opening image, tables, joins</td>
                  </tr>
                  <tr>
                    <td>Poor</td>
                    <td>Arc, Char, Midpoint</td>
                  </tr>
                  <tr>
                    <td>Comment</td>
                    <td>The arc feels too long.</td>
                  </tr>
                </tbody>
              </Table>
              <Card.Link href="#">More Comments</Card.Link>
            </Card.Body>
          </Card>
          <Card border="primary" bg="light" style={{ width: "36rem" }}>
            <Card.Header>Bring It On</Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Director: Peyton Reed
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Writer: Yorgos Lanthimos
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Starring: Jessica Bendinger
              </Card.Subtitle>
              <Card.Text>
                The hard work, dedication, and personal politics behind "rah rah
                rah!" and "sis boom bah!" go under the microscope in this
                engaging teen comedy. Torrance Shipman (Kirsten Dunst) discovers
                that being captain of her San Diego high school's six-time
                championship-winning cheerleading squad is more complicated than
                she had imagined. Torrance's parents want her to spend more time
                on her homework, her boyfriend wants her to spend more time with
                him, and she learns that the squad's former captain stole some
                of their best routines from other teams -- and that Isis
                (Gabrielle Union), captain of a top squad at a
              </Card.Text>
            </Card.Body>
          </Card>

          <Card borderless style={{ width: "56rem" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Comments:
              </Card.Subtitle>

              <Table striped bordered size="sm">
                <tbody>
                  <tr>
                    <td>Genres</td>
                    <td>Coming of Age, Comedy</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Relationships, Opening Shot, Money shots</td>
                  </tr>
                  <tr>
                    <td>Poor</td>
                    <td>Midpoint</td>
                  </tr>
                  <tr>
                    <td>Comment</td>
                    <td>The arc feels too long.</td>
                  </tr>
                </tbody>
              </Table>
              <Card.Link href="#">More Comments</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default Test;
