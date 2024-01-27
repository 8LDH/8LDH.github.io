import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Harcownicy_czesc1 from "../images/documents/harcownicy1.png";
import Harcownicy_czesc2 from "../images/documents/harcownicy2.png";
import Sprawnosci from "../images/documents/sprawnosci.png";
import Stopnie from "../images/documents/cwik.png";
import "../styles/DocumentsCardComponentStyles.css"; // Import custom CSS for styling

function DocumentsCardComponent() {
  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2}>
        <Col>
          <Card className="mb-3">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={Harcownicy_czesc1}
                className="center-image"
              />
              <Card.Body>
                <Card.Title className="center-text">
                  Harcownicy Część I
                </Card.Title>
                <Button
                  variant="primary"
                  href="https://www.zhpharcerze.org/application/files/3214/4673/2356/Harcownicy_czesc1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  PDF
                </Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={Harcownicy_czesc2}
                className="center-image"
              />
              <Card.Body>
                <Card.Title className="center-text">
                  Harcownicy Część II
                </Card.Title>
                <Button
                  variant="primary"
                  href="https://www.zhpharcerze.org/application/files/5814/4673/2601/Harcownicy_czesc2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  PDF
                </Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={Stopnie}
                className="center-image"
              />
              <Card.Body>
                <Card.Title className="center-text">Stopnie</Card.Title>
                <Button
                  variant="primary"
                  href="https://www.zhpharcerze.org/dokumenty/stopnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  PDF
                </Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={Sprawnosci}
                className="center-image"
              />
              <Card.Body>
                <Card.Title className="center-text">Sprawności</Card.Title>
                <Button
                  variant="primary"
                  href="https://www.zhpharcerze.org/application/files/3814/4482/7062/Sprawnosci_Harcerzy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  PDF
                </Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DocumentsCardComponent;
