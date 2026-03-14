import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CarouselComponent.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function CarouselComponent() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Container className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DQ94hErgOkw/"
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
  );
}

export default CarouselComponent;
