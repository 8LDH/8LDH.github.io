import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsCardComponent from "../components/AboutUsCardComponent";
import ProfileImageComponent from "../components/ProfileImageComponent";
import "../styles/ProfileImageStyles.css";
import DruzynowiTableComponent from "../components/DruzynowiTableComponent";
import SzczepowiTableComponent from "../components/SzczepowiTableComponent";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";

function AboutUsPage() {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  return (
    <div>
      <ScrollToTop />
      <h1>O nas</h1>
      <AboutUsCardComponent />
      <div className="image-container">
        <ProfileImageComponent className="centered-image" />
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h3>Byli Drużynowi</h3>
            <DruzynowiTableComponent />
          </div>
          <div className="col-md-6">
            <h3>Byli Szczepowi</h3>
            <SzczepowiTableComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
