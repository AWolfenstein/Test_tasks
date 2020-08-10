import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Cards from "./card";
import { load } from "../reducers/users";
import { Button } from "react-bootstrap";
import ModalAddUser from "./modalAdd";

const Users = (props) => {
  const [usersArray, setUsers] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (usersArray == 0) {
      props.load();
      setUsers(props.user);
    }
  }, [usersArray, props]);

  const deleteUser = (num) => {
    let usersArrOld = usersArray;
    usersArrOld.splice(num, 1);
    let usersArr = usersArrOld.slice(0);
    setUsers(usersArr);
  };

  return (
    <div>
      <h1>Сотрудники</h1>
      <Button
        variant="primary"
        style={{ marginBottom: 20 }}
        onClick={() => setShow(true)}
      >
       Добавить нового сотрудника
      </Button>
      <Cards user={usersArray} deleteUser={deleteUser}></Cards>
      <ModalAddUser
        show={show}
        setShow={setShow}
        setUsers={setUsers}
        usersArray={usersArray}
      ></ModalAddUser>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  user: users.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      load,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
