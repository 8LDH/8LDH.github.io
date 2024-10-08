import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCardComponent() {
  const currentYear = new Date().getFullYear();
  const yearsRunning = currentYear - 1959;

  return (
    <div className="card-container">
      <Row xs={1} md={2} className="g-2">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <div className="p-3">
              <Card className="p-3">
                <Card.Body>
                  <Card.Title>
                    {idx === 0 ? "Czuwaj!" : "Aktualności"}
                  </Card.Title>
                  {idx === 0 ? (
                    <>
                      <Card.Text>
                        Witamy na stronie Ósmej Londyńskiej Drużyny Harcerzy.
                        Jesteśmy dumną drużyną harcerską, z ponad{" "}
                        <strong>{yearsRunning}</strong> latami historii, która
                        nieustannie rozwija się i przygotowuje na wielkie
                        wyzwania.
                      </Card.Text>
                      <Card.Text>
                        W tym roku szczególnie podekscytowani jesteśmy
                        nadchodzącym Zlotem Światowym, który odbędzie się w
                        Ameryce. To wydarzenie obiecuje niezapomniane przeżycia,
                        możliwość nawiązania kontaktów z harcerzami z całego
                        świata oraz okazję do reprezentowania naszej drużyny na
                        międzynarodowej arenie.
                      </Card.Text>
                      <Card.Text>
                        Ale to nie koniec naszych planów - w przyszłości czeka
                        nas wiele ekscytujących przygód. Na tej stronie dowiesz
                        się nie tylko o naszej bogatej przeszłości, ale także o
                        tym, co obecnie dzieje się w drużynie, naszych pasjach,
                        wyzwaniach i oczekiwaniach na przyszłość. Dołącz do
                        naszej harcerskiej przygody i razem z nami odkrywaj
                        świat!
                      </Card.Text>
                    </>
                  ) : (
                    <>
                      <Card.Text>
                        <strong>
                          <ul>
                            <li>27/12/23 – 30/12/23</li>
                            <li>Zimowisko - Paccar Scout Center, Anglia</li>
                          </ul>
                        </strong>
</Card.Text>
                    </>
                  )}
                  {idx === 0 ? (
                    <Card.Link href="/o-nas">Więcej o nas</Card.Link>
                  ) : null}
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeCardComponent;
