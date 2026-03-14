import React, { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Container, Card, Row, Col } from "react-bootstrap";

const GalleryAlbumPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <h1 className="text-center mb-4">Galeria</h1>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={6} className="mb-3">
            <Card className="p-3 text-center h-100">
              <Card.Body>
                <Card.Title>8 LDH</Card.Title>
                <Card.Text>
                  Najnowsze zdjęcia z naszych wypraw, obozów i zbiórek.
                </Card.Text>
                <a
                  href="https://www.instagram.com/8.ldh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  @8.ldh
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="p-3 text-center h-100">
              <Card.Body>
                <Card.Title>Wędro — Wigry LDW</Card.Title>
                <Card.Text>
                  Zdjęcia i relacje z wędrówek i wypraw starszych harcerzy.
                </Card.Text>
                <a
                  href="https://www.instagram.com/wigry_ldw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  @wigry_ldw
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex justify-content-center mb-4">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/8.ldh/"
              data-instgrm-captioned
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow: "var(--shadow-md)",
                margin: "0 auto",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            ></blockquote>
          </Col>
          <Col md={6} className="d-flex justify-content-center mb-4">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/wigry_ldw/"
              data-instgrm-captioned
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow: "var(--shadow-md)",
                margin: "0 auto",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            ></blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryAlbumPage;
