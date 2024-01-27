import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../styles/ZastepyCardComponentStyles.css";

function LinksCardComponent() {
  return (
    <Container>
      <Row>
      <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>ZHP</Card.Title>
              <Card.Text>
                Linki do stron Związku Harcerstwa Polskiego i innych stron:
              </Card.Text>
              <div className="mb-2">
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip>
                      Związek Harcerstwa Polskiego poza granicami kraju
                    </Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    href="https://www.zhp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZHP PGK
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="mb-2">
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip>
                      Związek Harcerstwa Polskiego Główna Kwatera Harcerzy
                    </Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    href="https://www.zhp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZHP GKH
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.zhpwb.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZHP Okręg Wielka Brytania
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.zhpwb.org.uk/choragiew-harcerzy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZHP Chorągiew Harcerzy Wielka Brytania
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="http://www.hufiecwarszawa.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hufiec Warszawa
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://czuwajblog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Czuwaj Blog
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Social Media </Card.Title>
              <Card.Text>
                Linki do naszych social media, gdzie możesz zobzczyc nasze
                zdjęcia i filmy.
              </Card.Text>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.instagram.com/8.ldh/?hl=pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.youtube.com/@user-xi7uz4sq7p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Inne</Card.Title>
              <Card.Text>Dodatkowe linki, które mogą być przydatne.</Card.Text>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.polskaszkolawillesden.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polska Szkoła Sobotnia
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.facebook.com/profile.php?id=100034776956234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KPH Willesden Green
                </Button>
              </div>
              <div className="mb-2">
                <Button
                  variant="primary"
                  href="https://www.polishjesuits.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parafia na Willesden Green
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LinksCardComponent;
