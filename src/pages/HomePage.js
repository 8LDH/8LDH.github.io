import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import HomeCardComponent from "../components/HomeCardComponent";
import CarouselComponent from "../components/CarouselComponent";
import { Container } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

function HomePage() {
  return (
    <div>
      <ScrollToTop />
      <h1 className="text-center">
        Ósma Londyńska Drużyna Harcerzy
      </h1>
      <p className="text-center page-hero-subtitle">
        im. Stefana Starzyńskiego
      </p>
      <CarouselComponent />
      <Container className="mb-5">
        <HomeCardComponent />
      </Container>
    </div>
  );
}

export default HomePage;
