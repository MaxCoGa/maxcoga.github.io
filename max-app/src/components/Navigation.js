import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'

const Navigation  = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      {/* <Container> */}
      <Navbar.Brand as={NavLink} to="/">MaxApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
          <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default Navigation;