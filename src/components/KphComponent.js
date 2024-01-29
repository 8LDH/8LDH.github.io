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
                Być na bieżąco z pracą naszego KPH kliknij{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100034776956234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tutaj...
                </a>
              </Card.Text>
              <Card.Text>
                Jako Organizacja Przyjaciół Harcerstwa (OPH) jesteśmy czwartą
                gałęzią organizacyjną ZHP dołączając do Organizacji Harcerzy,
                Organizacji Harcerek oraz Starszego Harcerstwa.
              </Card.Text>
              <Card.Text>
                OPH określają i obowiązują dwa regulaminy: Regulamin Główny ZHP
                (działającego poza granicami Kraju)
              </Card.Text>
              <Card.Text>
                Regulamin Kola Przyjaciół Harcerstwa OPH zrzesza Kola Przyjaciół
                Harcerstwa (KPH) działające przy jednostkach harcerskich na
                danym terenie.
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
                Celem każdego Kola oprócz propagowania idei harcerstwa jest
                ścisła współpraca z jednostka lub jednostkami harcerskimi,
                którymi się opiekuje, aby ułatwić im wykonywanie zadań i
                programu pracy. Drużynom i Gromadom potrzebne jest nasze
                wsparcie nie tylko moralne, ale i materialne oraz praktyczne:
                pomagamy przy zakupie nowego sprzętu, opłacaniu pomieszczeń, w
                których odbywają się zbiórki, dotujemy kolonie, obozy, autokary
                na wycieczki; organizujemy posiłki oraz transport.
              </Card.Text>
              <Card.Text>
                Naszym wsparciem finansowym otaczamy również tych, którzy biorą
                udział we wszelkiego rodzaju szkoleniach, a bez których nasze
                drużyny i gromady nie mogłyby funkcjonować.
              </Card.Text>
              <Card.Text>
                Nie zapominamy również o naszych stanicach harcerskich, których
                istnienie jest bardzo istotne dla działalności naszego Związku.
                Jak każdy dom wymagają one remontów, napraw czy zakupu nowego
                sprzętu. Taki wydatek często przerasta możliwości finansowe
                stanicy.
              </Card.Text>
              <Card.Text>
                Fundusze na nasza działalność pochodzą nie tylko ze składek
                naszych członków, ale także (a może i nawet przede wszystkim) z
                imprez takich jak zabawy, kiermasze, festyny, aukcje czy
                loterie. Nasi działacze niestrudzenie poszukują nowych sposobów
                wypracowywania dochodów współpracując ze szkołami i parafiami,
                na terenie, których istnieją.
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
                Członkiem KPH może być każdy, kto ukończył 18 lat i kto
                akceptuje idee harcerstwa zawarte w Przyrzeczeniu i Prawie
                Harcerskim.
              </Card.Text>
              <Card.Text>
                Zachęcamy, aby członkami zostawał każdy rodzic skrzata, zucha,
                harcerki czy harcerza. Zapraszamy również do współpracy
                wszystkich sympatyków harcerstwa, którzy cenią harcerskie metody
                wychowawcze.
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
                Członkowie OPH dzielą się na trzy kategorie:
              </Card.Text>

              <ol>
                <li>Członkowie KPH </li>
                <li>
                  Członkowie wspierający (osoby prawne lub fizyczne, które
                  wpłacają ustaloną składkę, lecz nie biorą czynnego udziału w
                  pracy Związku)
                </li>
                <li>Działacze/działaczki harcerskie OPH.</li>
              </ol>

              <Card.Text>
                "Działacze /działaczki harcerskie to członkowie KPH, którzy
                zostali mianowani przez Przewodniczącego ZHP na wniosek
                Przewodniczącego Okręgu za wieloletnia aktywna prace na
                odpowiedzialnym stanowisku." [1]
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default KphComponent;
