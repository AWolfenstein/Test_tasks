import React from "react";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import { CardColumns, Button } from "react-bootstrap";

const Cards = (props) => {
  
  const userCard = (
    <CardColumns>
      {props.user &&
        props.user.map((user, index) => {
          return (
            <Card key={index}>
              <Card.Img variant="top" src={user.avatar} />
              <Card.Body>
                <Card.Title>
                  {user.first_name + " " + user.last_name}
                </Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                <Button variant="danger" onClick={() =>props.deleteUser(index)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </CardColumns>
  );
  return userCard;
};

export default Cards;
