import "bootstrap/dist/css/bootstrap.min.css";
import ZastepyCardComponent from "../components/ZastepyCardComponent";
import ScrollToTop from "../components/ScrollToTop";

function DruzynaPage() {
  return (
    <div className="text-centered mb-4">
      <ScrollToTop />
      <h1 className="text-center mb-4">Nasza Drużyna</h1>
      <h3>Zastępy</h3>
      <ZastepyCardComponent />
    </div>
  );
}

export default DruzynaPage;
