import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Bart from "../images/profiles/Bart.jpg";
import Wasiuk from "../images/profiles/Wasiuk.jpg";
import Milosz from "../images/profiles/Milosz.png";
import Jan from "../images/profiles/Jan.png";
import Jacek from "../images/profiles/Jacek.png";
import Krystian from "../images/profiles/Krystian.png";
import Wuni from "../images/profiles/Dawid.png";
import Szymon from "../images/profiles/Szymon.png";
import Oliwer from "../images/profiles/Oliwer.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProfileImageStyles.css";

function KomendaProfileComponent() {
  return (
    <Container className="text-center">
      <Row>
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
        <Col xs={12} md={6}>
          <Figure>
            <Figure.Image src={Wasiuk} thumbnail />
            <Figure.Caption>
              Mateusz Wasiuk Ćw. <br />
              Drużynowy
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Figure>
            <Figure.Image src={Oliwer} thumbnail />
            <Figure.Caption>
              Oliwer Lewandowski Ćw.
              <br />
              Wódz Zuchów
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} md={4}>
          <Figure>
            <Figure.Image src={Milosz} thumbnail />
            <Figure.Caption>
              Miłosz Sadowski Ćw. <br />
              Drużynowy Wędrowników
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} md={4}>
          <Figure>
            <Figure.Image src={Jan} thumbnail />
            <Figure.Caption>
              Jan Andrzejczyk Pwd. <br />
              Webmajster
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Figure>
            <Figure.Image src={Jacek} thumbnail />
            <Figure.Caption>
              Jacek Krzystek <br />
              Przyboczny
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Figure>
            <Figure.Image src={Krystian} thumbnail />
            <Figure.Caption>
              Krystian Kasperski Ćw. <br />
              Przyboczny
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Figure>
            <Figure.Image src={Wuni} thumbnail />
            <Figure.Caption>
              Dawid Wuni Ćw. <br />
              Przyboczny
            </Figure.Caption>
          </Figure>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Figure>
            <Figure.Image src={Szymon} thumbnail />
            <Figure.Caption>
              Szymon Mizera Ćw. <br />
              Przyboczny
            </Figure.Caption>
          </Figure>
        </Col>
        {/* Additional columns can be added here following the same pattern */}
      </Row>
    </Container>
  );
}

export default KomendaProfileComponent;
