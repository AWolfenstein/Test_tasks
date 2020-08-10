import React, { useState, useEffect } from "react";

import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import queryString from "query-string";
import { Form, Row, Col } from "react-bootstrap";

const TaskTwo = (props) => {
  const pathname = props.location.pathname;
  const location = window.location.search;
  const parsed = queryString.parse(location);

  const [state, setState] = useState({
    size: parsed.size,
    color: parsed.color,
    manufacturer: parsed.manufacturer,
  });
  const chkUnd = typeof state.color !== "undefined";

  useEffect(() => {
    newQueryUrls();
  }, [state],console.log("New Url: "+pathname+location));

  const newQueryUrls = () => {
    let new_query = queryString.stringify(state);
    props.history.push({
      pathname: pathname,
      search: new_query.toString(),
    });
    
  };

  const changeMultiVal = () => {
    let selected = Array.from(
      window.event.target.selectedOptions,
      (option) => option.value
    );

    setState((prevState) => ({
      ...prevState,
      manufacturer: selected,
    }));
  };
  const changeVal = () => {
    let { id } = window.event.target;
    if (id !== state.size) {
      setState((prevState) => ({
        ...prevState,
        size: id,
      }));
    }
  };

  const changeChekVal = () => {
    let isChecked = window.event.target.checked;
    let value = window.event.target.value;
    let colorArr = state.color;

    let index = chkUnd ? colorArr.indexOf(value) : -1;
    if (isChecked && index === -1) {
      let newArr = chkUnd ? [...colorArr, value] : (colorArr = [value]);

      setState((prevState) => ({
        ...prevState,
        color: newArr,
      }));
    } else if (!isChecked && index !== -1) {
      colorArr.splice(index, 1);
      let newArr = colorArr.slice(0);
      setState((prevState) => ({
        ...prevState,
        color: newArr,
      }));
    }
  };
  const { color, size, manufacturer } = state;
 
  return (
    <div>
      <h1>TaskTwo</h1>
      <Form>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={1}>
            Size:
          </Form.Label>
          <Col>
            <br></br>
            <Form.Check
              type="radio"
              label="S"
              name="size"
              id="S"
              checked={size == "S"}
              onChange={changeVal}
            />
            <Form.Check
              type="radio"
              label="M"
              name="size"
              id="M"
              checked={size == "M"}
              onChange={changeVal}
            />
            <Form.Check
              type="radio"
              label="L"
              name="size"
              id="L"
              checked={size == "L"}
              onChange={changeVal}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={1}>
            Color:
          </Form.Label>
          <Col>
            <br></br>
            <Form.Check
              label="1"
              id="color1"
              value={"1"}
              checked={chkUnd && color.includes("1")}
              onChange={changeChekVal}
            />
            <Form.Check
              label="2"
              id="color2"
              value={"2"}
              checked={chkUnd && color.includes("2")}
              onChange={changeChekVal}
            />
            <Form.Check
              label="3"
              id="color3"
              value={"3"}
              checked={chkUnd && color.includes("3")}
              onChange={changeChekVal}
            />
            <Form.Check
              label="4"
              id="color4"
              value={"4"}
              checked={chkUnd && color.includes("4")}
              onChange={changeChekVal}
            />
            <Form.Check
              label="5"
              id="color5"
              value={"5"}
              checked={chkUnd && color.includes("5")}
              onChange={changeChekVal}
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>manufacturer:</Form.Label>
          <Form.Control
            as="select"
            multiple
            name="manufacturer"
            value={manufacturer}
            onChange={() => changeMultiVal()}
          >
            <option value={"aaa"}>aaa</option>
            <option value={"b&c"}>b&c</option>
            <option value={"ddd"}>ddd</option>
            <option value={"eee"}>eee</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={1}>
            Sale:
          </Form.Label>
          <Col>
            <br></br>
            <Form.Check label="1" id="sale" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TaskTwo);
