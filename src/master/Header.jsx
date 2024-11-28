import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import {LinkContainer} from "react-router-bootstrap";
import "./Header.css";
import {Col, Row} from "react-bootstrap";

const Header = () => (
    <header className="bg-primary py-2">
      <Container fluid="lg">
        <Row className="justify-content-between justify-content-sm-start align-items-center">
          <Col xs="auto">
            <Image className="logo" src="/images/logo.png" alt="Withington Hope CF crest" />
          </Col>
          <Col xs="auto" className="ms-0">
            <Navbar collapseOnSelect expand="sm" data-bs-theme="dark">
              <div className="d-flex d-sm-block">
                <Navbar.Brand href="/">
                  <span className="text-uppercase h2 fw-bold d-none d-sm-inline">Withington Hope Club de Fútbol</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"/>
                <Navbar.Offcanvas id="navbar" className="flex-sm-grow-0 bg-primary logo-margin" data-bs-theme={"dark"}
                                  placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold text-uppercase">
                      Withington Hope CF
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav justify className="mt-1">
                      <LinkContainer to="/">
                        <Nav.Link className="me-md-4 me-sm-2 fs-5">Home</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/about">
                        <Nav.Link className="mx-md-4 mx-sm-2 fs-5">About</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/players">
                        <Nav.Link className="mx-md-4 mx-sm-2 fs-5">Players</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/matches">
                        <Nav.Link className="mx-md-4 mx-sm-2 fs-5">Matches</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="contact">
                        <Nav.Link className="mx-md-4 mx-sm-2 fs-5">Contact</Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
);

export default Header;