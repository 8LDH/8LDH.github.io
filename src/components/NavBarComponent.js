import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import "../styles/NavBarComponent.css";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-container"
      expanded={expanded} // Place it here on the Navbar component
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink
                to="/"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Główna Strona
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/o-nas"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Coś O Nas
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/druzyna"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Nasza Drużyna
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/kalendarz"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Kalendarz
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/galeria"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Galeria
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/dokumenty"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Dokumenty
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/kph"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                KPH
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/linki"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Linki
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/kontakty"
                className="nav-link"
                activeclassname="active"
                onClick={handleNavClose}
              >
                Kontakty
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
