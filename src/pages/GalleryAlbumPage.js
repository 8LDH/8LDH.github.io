import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { Container, Row, Col } from "react-bootstrap";

const LDH_POSTS = [
  "https://www.instagram.com/p/DM_a7WnIfFT/",
  "https://www.instagram.com/p/DNL5wIsoOe3/",
  "https://www.instagram.com/p/DNUHTrdIm_P/",
  "https://www.instagram.com/p/DNli7lhIVW3/",
  "https://www.instagram.com/p/DQ94hErgOkw/",
  "https://www.instagram.com/p/DSiLb89COOI/",
];

const WIGRY_POSTS = [
  "https://www.instagram.com/p/DBTzKT0omVN/",
  "https://www.instagram.com/p/DBerz_yIVl2/",
  "https://www.instagram.com/p/DBesF_zoxdV/",
  "https://www.instagram.com/p/DB6AziGIqgr/",
  "https://www.instagram.com/p/DCkg4lco8N_/",
  "https://www.instagram.com/p/DNUHTrdIm_P/",
];

const GalleryAlbumPage = () => {
  const [ldhPost] = useState(
    () => LDH_POSTS[Math.floor(Math.random() * LDH_POSTS.length)]
  );
  const [wigryPost] = useState(
    () => WIGRY_POSTS[Math.floor(Math.random() * WIGRY_POSTS.length)]
  );

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
    <div>
      <ScrollToTop />
      <h1 className="mb-4">Galeria</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="mb-3">
            <h3 className="text-center mb-3">Harcerze</h3>
            <div className="d-flex justify-content-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={ldhPost}
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
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <h3 className="text-center mb-3">Wędrownicy</h3>
            <div className="d-flex justify-content-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={wigryPost}
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryAlbumPage;
