import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <span className="text-muted">
          © {currentYear} Ósma Londyńska Drużyna Harcerzy.
        </span>
      </Container>
    </footer>
  );
};

export default FooterComponent;
