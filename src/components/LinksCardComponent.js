import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const sections = [
  {
    title: "ZHP",
    description: "Linki do stron Związku Harcerstwa Polskiego i innych stron:",
    links: [
      { name: "ZHP PGK", desc: "Związek Harcerstwa Polskiego poza granicami kraju", url: "https://www.zhp.org/" },
      { name: "ZHP GKH", desc: "Główna Kwatera Harcerzy", url: "https://www.zhp.org/" },
      { name: "ZHP Okręg Wielka Brytania", url: "https://www.zhpwb.org.uk/" },
      { name: "Chorągiew Harcerzy WB", url: "https://www.zhpwb.org.uk/choragiew-harcerzy" },
      { name: "Hufiec Warszawa", url: "http://www.hufiecwarszawa.org.uk/" },
      { name: "Czuwaj Blog", url: "https://czuwajblog.com/" },
    ],
  },
  {
    title: "Social Media",
    description: "Nasze social media — zdjęcia i filmy z życia drużyny.",
    links: [
      { name: "Instagram", desc: "@8.ldh", url: "https://www.instagram.com/8.ldh/?hl=pl" },
      { name: "YouTube", desc: "Kanał 8 LDH", url: "https://www.youtube.com/@user-xi7uz4sq7p" },
    ],
  },
  {
    title: "Inne",
    description: "Dodatkowe linki, które mogą być przydatne.",
    links: [
      { name: "Polska Szkoła Sobotnia", url: "https://www.polskaszkolawillesden.com/" },
      { name: "KPH Willesden Green", url: "https://www.facebook.com/profile.php?id=100034776956234" },
      { name: "Parafia na Willesden Green", url: "https://www.polishjesuits.co.uk/" },
    ],
  },
];

function LinksCardComponent() {
  return (
    <Container>
      <Row>
        {sections.map((section) => (
          <Col md={4} className="mb-3" key={section.title}>
            <Card>
              <Card.Body>
                <Card.Title>{section.title}</Card.Title>
                <Card.Text>{section.description}</Card.Text>
                <ul className="link-list">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="link-list-content">
                          <span className="link-list-name">{link.name}</span>
                          {link.desc && (
                            <span className="link-list-desc">{link.desc}</span>
                          )}
                        </span>
                        <span className="link-list-arrow">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LinksCardComponent;
