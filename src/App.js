import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DruzynaPage from "./pages/DruzynaPage";
import CalendarPage from "./pages/CalendarPage";
import GalleryAlbumPage from "./pages/GalleryAlbumPage";
import GalleryPage from "./pages/GalleryPage";
import DocumentsPage from "./pages/DocumentsPage";
import KphPage from "./pages/KphPage";
import LinksPage from "./pages/LinksPage";
import ContactPage from "./pages/ContactPage";
import NavbarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NavbarComponent />
        <Container>
          <Fade top distance="10%" duration={1500}>
            <div className="mt-from-navbar"></div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/o-nas" element={<AboutUsPage />} />
              <Route path="/druzyna" element={<DruzynaPage />} />
              <Route path="/kalendarz" element={<CalendarPage />} />
              <Route path="/galeria" element={<GalleryAlbumPage />} />
              <Route path="/galeria/:folderPath" element={<GalleryPage />} />
              <Route path="/dokumenty" element={<DocumentsPage />} />
              <Route path="/kph" element={<KphPage />} />
              <Route path="/linki" element={<LinksPage />} />
              <Route path="/kontakty" element={<ContactPage />} />
            </Routes>
          </Fade>
        </Container>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
