import React, { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Container, Card } from "react-bootstrap";

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
      <Container className="d-flex flex-column align-items-center">
        <Card className="p-3 mb-4 text-center" style={{ maxWidth: "540px", width: "100%" }}>
          <Card.Body>
            <Card.Title>Nasze zdjęcia na Instagramie</Card.Title>
            <Card.Text>
              Śledź naszą aktywność i zobacz najnowsze zdjęcia z naszych
              wypraw, obozów i zbiórek na naszym profilu Instagram.
            </Card.Text>
            <a
              href="https://www.instagram.com/8.ldh/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              @8.ldh na Instagramie
            </a>
          </Card.Body>
        </Card>
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
      </Container>
    </div>
  );
};

export default GalleryAlbumPage;
