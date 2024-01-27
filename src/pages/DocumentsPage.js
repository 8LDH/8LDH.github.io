import "bootstrap/dist/css/bootstrap.min.css";
import DocumentsCardComponent from "../components/DocumentsCardComponent";
import ScrollToTop from "../components/ScrollToTop";

function DocumentsPage() {
  return (
    <div>
      <ScrollToTop />
      <h1>Dokumenty</h1>
      <DocumentsCardComponent />
    </div>
  );
}

export default DocumentsPage;
