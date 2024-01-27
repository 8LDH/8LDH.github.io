import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Bart from "../images/profiles/Bart.jpg";
import Wasiuk from "../images/profiles/Wasiuk.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileImageComponent() {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12} md={6}>
          <Figure>
            <Figure.Image src={Wasiuk} thumbnail />
            <Figure.Caption>
              Mateusz Wasiuk Ćw. <br />
              Drużynowy
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} md={6}>
          <Figure>
            <Figure.Image src={Bart} thumbnail />
            <Figure.Caption>
              Bartłomiej Rój Phm.
              <br />
              Szczepowy
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileImageComponent;
