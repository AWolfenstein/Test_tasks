import React, { useState, useEffect } from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const TaskThree = (props) => {
  const [answer, setAnswer] = useState(0);
 
 
  const [add, setAdd] = useState({
    a: 1,
    b: 2,
  });
  const [mult, setMult] = useState({
    a: 2,
    b: 2,
  });
  const postAdd = new Promise(
    (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3001/math");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(add));
    
    xhr.onload = function () {
      if (xhr.status != 200) {
        const err = new Error(`Ошибка ${xhr.status}: ${xhr.statusText}`)
        reject (err)
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        resolve (xhr.response)
      }
    }
     
  });

  const postMultip  = new Promise(
    (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3001/math/two");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(mult));
    xhr.onload = function () {
      if (xhr.status != 200) {
        const err = new Error(`Ошибка ${xhr.status}: ${xhr.statusText}`)
        reject (err)
      } else {  
        resolve (xhr.response)
      }
    };
  });

  const postTwo =  async() => {
    let resultAdd = await postAdd 
    let resultMult = await postMultip 
    setAnswer(`${resultAdd} и ${resultMult}`)
  console.log("оба ответа получены")
  
  };
  
 
  return (
    <div>
      <h1>TaskThree</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Сложение</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          defaultValue={add.a}
          onChange={(e) => setAdd({ ...add, a: parseInt(e.target.value) })}
        />
        <FormControl
          defaultValue={add.b}
          onChange={(e) => setAdd({ ...add, b: parseInt(e.target.value) })}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Умножение</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          defaultValue={mult.a}
          onChange={(e) => setMult({ ...mult, a: parseInt(e.target.value) })}
        />
        <FormControl
          defaultValue={mult.b}
          onChange={(e) => setMult({ ...mult, b: parseInt(e.target.value) })}
        />
        <InputGroup.Append>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="outline-secondary" onClick={() => postTwo()}>
        Умножить и Сложить
      </Button>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Ответ: </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" value={answer} />
      </InputGroup>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TaskThree);
