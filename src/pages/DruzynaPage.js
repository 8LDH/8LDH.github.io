import "bootstrap/dist/css/bootstrap.min.css";
import KomendaProfileComponent from "../components/KomendaProfileComponent";
import "../styles/ProfileImageStyles.css";
import ZastepyCardComponent from "../components/ZastepyCardComponent";
import ScrollToTop from "../components/ScrollToTop";

function DruzynaPage() {
  return (
    <div className="text-centered mb-4">
      <ScrollToTop />
      <h1 className="text-center mb-4">Nasza Drużyna</h1>
      <h2 className="text-center mb-4"> Temat Roku: Kamienie na Szaniec</h2>
      <h3 className="mb-4"> Komenda</h3>
      <div className="image-container">
        <KomendaProfileComponent className="centered-image" />
        <div className="text-centered mb-4"></div>
        <h3>Zastępy</h3>
        <div className="text-centered mb-4"></div>
        <ZastepyCardComponent />
      </div>
    </div>
  );
}

export default DruzynaPage;
