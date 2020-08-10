import React, { useState } from "react";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const ModalAddUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const changeInput = () => {
    const newUser = [
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        avatar: avatar,
      },
    ];
    props.setUsers((usersArray) => usersArray.concat(newUser));
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
          Новый сотрудник
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Имя и Фамилия</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Имя"
            aria-label="Имя"
            onInput={(e) => setFirstName(e.target.value)}
          />
          <FormControl
            placeholder="Фамилия"
            aria-label="Фамилия"
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
        <label htmlFor="basic-url"> URL картинки</label>
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
          Закрыть
        </Button>
        <Button onClick={() => changeInput()}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddUser;
