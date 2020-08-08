import React, { useState } from "react";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const ModalAddUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const changeInput = () => {
    const newUser = [{
      first_name: firstName,
      last_name: lastName,
      email: email,
      avatar: avatar,
    }];
    props.setUsers(usersArray => usersArray.concat(newUser));
    props.setShow(false);
  };
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Add New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="First Name"
            aria-label="First Name"
            onInput={(e) => setFirstName(e.target.value)}
          />
          <FormControl
            placeholder="Last Name"
            aria-label="Last Name"
            onInput={(e) => setLastName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon2"
            onInput={(e) => setEmail(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@e-mail</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <label htmlFor="basic-url">Your avatar URL</label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">url</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            onInput={(e) => setAvatar(e.target.value)}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShow(false)}>
          Close
        </Button>
        <Button onClick={() => changeInput()}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddUser;
