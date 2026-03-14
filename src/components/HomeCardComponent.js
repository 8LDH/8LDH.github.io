import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCardComponent() {
  const currentYear = new Date().getFullYear();
  const yearsRunning = currentYear - 1959;

  return (
    <div className="card-container">
      <Card className="p-3">
        <Card.Body>
          <Card.Title>Czuwaj!</Card.Title>
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
          <Card.Link href="/o-nas">Więcej o nas</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomeCardComponent;
