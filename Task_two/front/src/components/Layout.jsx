import React from "react";
import { Route, Link } from "react-router-dom";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import '../styles/content.css'
import Home from './Home'
import Users from './Users'
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Layout = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row className="justify-content-md-center">
        <Col className="Content">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
          </main>
        </Col>
      </Row>
    </Container>
  </>
);
export default Layout;
