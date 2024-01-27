import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function KphComponent() {
  return (
    <div className="mb-4">
      <Row>
        <Col xs={12} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Text>
                <p>
                  Być na bieżąco z pracą naszego KPH kliknij{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100034776956234"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tutaj...
                  </a>
                </p>
                <p>
                  Jako Organizacja Przyjaciół Harcerstwa (OPH) jesteśmy czwartą
                  gałęzią organizacyjną ZHP dołączając do Organizacji Harcerzy,
                  Organizacji Harcerek oraz Starszego Harcerstwa.
                </p>
                <p>
                  OPH określają i obowiązują dwa regulaminy: Regulamin Główny
                  ZHP (działającego poza granicami Kraju)
                </p>
                <p>
                  Regulamin Kola Przyjaciół Harcerstwa OPH zrzesza Kola
                  Przyjaciół Harcerstwa (KPH) działające przy jednostkach
                  harcerskich na danym terenie.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Cele KPH</Card.Title>
              <Card.Text>
                <p>
                  Celem każdego Kola oprócz propagowania idei harcerstwa jest
                  ścisła współpraca z jednostka lub jednostkami harcerskimi,
                  którymi się opiekuje, aby ułatwić im wykonywanie zadań i
                  programu pracy. Drużynom i Gromadom potrzebne jest nasze
                  wsparcie nie tylko moralne, ale i materialne oraz praktyczne:
                  pomagamy przy zakupie nowego sprzętu, opłacaniu pomieszczeń, w
                  których odbywają się zbiórki, dotujemy kolonie, obozy,
                  autokary na wycieczki; organizujemy posiłki oraz transport.
                </p>
                <p>
                  Naszym wsparciem finansowym otaczamy również tych, którzy
                  biorą udział we wszelkiego rodzaju szkoleniach, a bez których
                  nasze drużyny i gromady nie mogłyby funkcjonować.
                </p>
                <p>
                  Nie zapominamy również o naszych stanicach harcerskich,
                  których istnienie jest bardzo istotne dla działalności naszego
                  Związku. Jak każdy dom wymagają one remontów, napraw czy
                  zakupu nowego sprzętu. Taki wydatek często przerasta
                  możliwości finansowe stanicy.
                </p>
                <p>
                  Fundusze na nasza działalność pochodzą nie tylko ze składek
                  naszych członków, ale także (a może i nawet przede wszystkim)
                  z imprez takich jak zabawy, kiermasze, festyny, aukcje czy
                  loterie. Nasi działacze niestrudzenie poszukują nowych
                  sposobów wypracowywania dochodów współpracując ze szkołami i
                  parafiami, na terenie, których istnieją.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Członkowie KPH</Card.Title>
              <Card.Text>
                <p>
                  Członkiem KPH może być każdy, kto ukończył 18 lat i kto
                  akceptuje idee harcerstwa zawarte w Przyrzeczeniu i Prawie
                  Harcerskim.
                </p>
                <p>
                  Zachęcamy, aby członkami zostawał każdy rodzic skrzata, zucha,
                  harcerki czy harcerza. Zapraszamy również do współpracy
                  wszystkich sympatyków harcerstwa, którzy cenią harcerskie
                  metody wychowawcze.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Członkowie OPH</Card.Title>
              <Card.Text>
                <p>Członkowie OPH dzielą się na trzy kategorie:</p>
                <ol>
                  <li>Członkowie KPH </li>
                  <li>
                    Członkowie wspierający (osoby prawne lub fizyczne, które
                    wpłacają ustaloną składkę, lecz nie biorą czynnego udziału w
                    pracy Związku)
                  </li>
                  <li>Działacze/działaczki harcerskie OPH.</li>
                </ol>
                <p>
                  Działacze /działaczki harcerskie to członkowie KPH, którzy
                  zostali mianowani przez Przewodniczącego ZHP na wniosek
                  Przewodniczącego Okręgu za wieloletnia aktywna prace na
                  odpowiedzialnym stanowisku.” [1]
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default KphComponent;
