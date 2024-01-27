import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CarouselComponent.css";
import { Container } from "react-bootstrap";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/carousel", false, /\.(png|jpe?g|JPE?G|svg)$/)
);

function CarouselComponent() {
  return (
    <Container className="carousel-container">
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  );
}

export default CarouselComponent;
