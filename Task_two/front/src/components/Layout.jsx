import React from "react";
import { Route, Link } from "react-router-dom";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import "../styles/content.css";
import Home from "./Home";
import Users from "./Users";
import TaskTwo from "./TaskTwo"
import TaskThree from "./TaskThree"
import { Container, Row, Col, Nav, Navbar,NavDropdown } from "react-bootstrap";

const Layout = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">React-Resliv-test</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/employees">Сотрудники</Nav.Link>
          <NavDropdown title="Tasks" id="basic-nav-dropdown">
          <NavDropdown.Item href="/tasktwo/filter">task_2</NavDropdown.Item>
          <NavDropdown.Item href="/taskthree">task_3</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">task_4</NavDropdown.Item>
        </NavDropdown>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row className="justify-content-md-center">
        <Col className="Content">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/employees" component={Users} />
            <Route exact path="/tasktwo/filter" component={TaskTwo} />
            <Route exact path="/taskthree" component={TaskThree} />
          </main>
        </Col>
      </Row>
    </Container>
  </>
);
export default Layout;
