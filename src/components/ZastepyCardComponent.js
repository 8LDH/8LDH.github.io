import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/LinksCardComponentStyles.css"; // Import your custom CSS

function ZastepyCardComponent() {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="card-title">Zastęp Zośka</Card.Title>
              <Card.Text>
                Zastepowy: Adam Makarewicz Ćw. <br />
                Pod-zastepowy: Michał Wasiuk Wyw.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="card-title">Zastęp Alek</Card.Title>
              <Card.Text>
                Zastepowy: Aleks Ugo Ćw. <br />
                Pod-zastepowy: Gabryś Dan Wyw.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="card-title">Zastęp Rudy</Card.Title>
              <Card.Text>
                Zastepowy: Łukasz Sadowski Ćw. <br />
                Pod-zastepowy: Antoś Kaptur Mł.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ZastepyCardComponent;
