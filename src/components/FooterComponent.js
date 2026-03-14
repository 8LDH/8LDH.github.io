import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import "../styles/FooterComponent.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <div className="footer-brand">
              <img src={logo} alt="8 LDH Logo" className="footer-logo" />
              <h5 className="footer-title">8 LDH</h5>
            </div>
            <p className="footer-description">
              Ósma Londyńska Drużyna Harcerzy im. Stefana Starzyńskiego.
              Harcerstwo w Londynie od 1959 roku.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/8.ldh/?hl=pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://www.youtube.com/@user-xi7uz4sq7p" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                YouTube
              </a>
            </div>
          </Col>

          <Col md={4}>
            <h5 className="footer-heading">Szybkie Linki</h5>
            <ul className="footer-links">
              <li><a href="/o-nas">Coś O Nas</a></li>

              <li><a href="/kalendarz">Kalendarz</a></li>
              <li><a href="/galeria">Galeria</a></li>
              <li><a href="/dokumenty">Dokumenty</a></li>
              <li><a href="/kontakty">Kontakty</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="footer-heading">Kontakt</h5>
            <p className="footer-contact-item">
              St Mary's and St John's CE Upper School<br />
              10-2 Downage, London NW4 1AA
            </p>
            <p className="footer-contact-item">
              Zbiórki: Co sobotę, 13:00 - 14:30
            </p>
            <p className="footer-contact-item">
              <a href="mailto:bartek@osemka.co.uk">bartek@osemka.co.uk</a>
            </p>
          </Col>
        </Row>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>&copy; {currentYear} Ósma Londyńska Drużyna Harcerzy.</span>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
