import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "../components/ScrollToTop";
import LinksCardComponent from "../components/LinksCardComponent";

function LinksPage() {
  return (
    <>
      <ScrollToTop />
      <h1>Linki</h1>
      <LinksCardComponent />
    </>
  );
}

export default LinksPage;
