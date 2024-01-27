import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCardComponent() {
  return (
    <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <div className="p-3">
            <Card className="p-3">
              <Card.Body>
                <Card.Text>
                  Ósemka powstała w 1959 roku na terenach Północno-Zachodniego
                  Londynu, przy Parafii Matki Bożej Miłosierdzia na Willesden
                  Green. Współpraca z Siostrzaną Drużyną Harcerek "Dunajec"
                  istnieje od pierwszych dni i stanowi ważną część naszej pracy
                  harcerskiej. Ósemka przeprowadziła ponad 50 obozów, a gromada
                  zuchów jest dobrze prowadzona, co daje dobrą nadzieję na
                  przyszłość Ósemki.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default HomeCardComponent;
