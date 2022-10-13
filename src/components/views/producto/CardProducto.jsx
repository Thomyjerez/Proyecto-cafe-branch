import React from "react";
import { Card, Button } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        className="img-fluid"
        src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Card.Img>
      <Card.Body>
        <Card.Title>Brownie</Card.Title>
        <Card.Text>Precio:$400</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn btn-danger me-2">Ver mas</Button>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
