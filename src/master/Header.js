import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => (
    <header>
      <Navbar collapseOnSelect expand="sm" className="bg-primary" data-bs-theme="dark">
          <Container fluid className="justify-content-sm-center">
            <Navbar.Brand href="/">
              <Image src="/images/logo.png" alt="Withington Hope CF crest" width="90" fluid/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Offcanvas id="navbar" className="flex-sm-grow-0 bg-primary" data-bs-theme={"dark"} placement="end">
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav justify>
                  <Nav.Link className="mx-sm-4" href="#">Home</Nav.Link> {/* TODO add aria */}
                  <Nav.Link className="mx-sm-4" href="#">About</Nav.Link>
                  <Nav.Link className="mx-sm-4" href="#">Players</Nav.Link>
                  <Nav.Link className="mx-sm-4" href="#">Fixtures</Nav.Link>
                  <Nav.Link className="mx-sm-4" href="#">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </header>
);

export default Header;