import "bootstrap/dist/css/bootstrap.min.css";
import KphComponent from "../components/KphComponent";
import ScrollToTop from "../components/ScrollToTop";

function KphPage() {
  return (
    <>
      <ScrollToTop />
      <h1>Koło Przyjaciół Harcerstwa</h1>
      <KphComponent />
    </>
  );
}

export default KphPage;
