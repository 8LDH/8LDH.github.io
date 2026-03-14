import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsCardComponent from "../components/AboutUsCardComponent";
import DruzynowiTableComponent from "../components/DruzynowiTableComponent";
import SzczepowiTableComponent from "../components/SzczepowiTableComponent";
import ScrollToTop from "../components/ScrollToTop";

function AboutUsPage() {
  return (
    <div>
      <ScrollToTop />
      <h1>O nas</h1>
      <AboutUsCardComponent />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h3>Byli Drużynowi</h3>
            <div className="table-responsive-wrapper">
              <DruzynowiTableComponent />
            </div>
          </div>
          <div className="col-md-6">
            <h3>Byli Szczepowi</h3>
            <div className="table-responsive-wrapper">
              <SzczepowiTableComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
