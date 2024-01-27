import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import CarouselComponent from "../components/CarouselComponent";
import HomeCardComponent from "../components/HomeCardComponent";
import { Container } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

function HomePage() {
  return (
    <div>
      <ScrollToTop />
      <h1 className="text-center">
        Ósma Londyńska Drużyna Harcerzy <br />
        <small>im. Stefana Starzyńskiego</small>
      </h1>
      <Container>
        <CarouselComponent />
        <HomeCardComponent />
      </Container>
    </div>
  );
}

export default HomePage;
