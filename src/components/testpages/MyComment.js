import { Card } from "react-bootstrap";

<Card borderless style={{ width: "56rem" }}>
  <Card.Body>
    <Card.Header>The Lobster</Card.Header>
    <Card.Title>The Lobster</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Comments:</Card.Subtitle>

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
  </Card.Body>
</Card>;
