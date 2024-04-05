import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from "react-router-bootstrap";
import './Header.css';

const Header = () => (
    <header>
      <Navbar collapseOnSelect expand="sm" className="bg-primary" data-bs-theme="dark">
          <Container fluid className="justify-content-sm-center">
            <Navbar.Brand href="/" className="me-5">
              <Image className="logo" src="/images/logo.png" alt="Withington Hope CF crest" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Offcanvas id="navbar" className="flex-sm-grow-0 bg-primary" data-bs-theme={"dark"} placement="end">
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav justify>
                  <LinkContainer to="/">
                    <Nav.Link className="mx-md-4">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link className="mx-md-4">About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/players">
                    <Nav.Link className="mx-md-4">Players</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/matches">
                    <Nav.Link className="mx-md-4">Matches</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="contact">
                    <Nav.Link className="mx-md-4">Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </header>
);

export default Header;