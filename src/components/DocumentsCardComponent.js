import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Harcownicy_czesc1 from "../images/documents/harcownicy1.png";
import Harcownicy_czesc2 from "../images/documents/harcownicy2.png";
import Sprawnosci from "../images/documents/sprawnosci.png";
import Stopnie from "../images/documents/cwik.png";
import "../styles/DocumentsCardComponentStyles.css";

const documents = [
  {
    title: "Harcownicy Część I",
    image: Harcownicy_czesc1,
    url: "https://www.zhpharcerze.org/application/files/3214/4673/2356/Harcownicy_czesc1.pdf",
  },
  {
    title: "Harcownicy Część II",
    image: Harcownicy_czesc2,
    url: "https://www.zhpharcerze.org/application/files/5814/4673/2601/Harcownicy_czesc2.pdf",
  },
  {
    title: "Stopnie",
    image: Stopnie,
    url: "https://www.zhpharcerze.org/dokumenty/stopnie",
  },
  {
    title: "Sprawności",
    image: Sprawnosci,
    url: "https://www.zhpharcerze.org/application/files/3814/4482/7062/Sprawnosci_Harcerzy.pdf",
  },
];

function DocumentsCardComponent() {
  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2}>
        {documents.map((doc) => (
          <Col key={doc.title}>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="document-card-link"
            >
              <Card className="mb-3">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={doc.image}
                    className="center-image"
                  />
                  <Card.Body>
                    <Card.Title className="center-text">{doc.title}</Card.Title>
                    <span className="document-open-label">Otwórz PDF →</span>
                  </Card.Body>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DocumentsCardComponent;
