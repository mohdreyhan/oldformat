import React, { Component } from "react";
import { Navbar, FormControl, Form, Nav, Button } from "react-bootstrap";

export default class NavbarPage extends Component {
  render() {
    const {navigatetologin} =this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">JayaKar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Categories</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Button
          variant="outline-light"
          style={{ marginLeft: 5 }}
          onClick={navigatetologin}
        >
          Logout
        </Button>
      </Navbar>
    );
  }
}
