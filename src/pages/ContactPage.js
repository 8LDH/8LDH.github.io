import "bootstrap/dist/css/bootstrap.min.css";
import MapsComponent from "../components/MapsComponent";
import ScrollToTop from "../components/ScrollToTop";
import ContactComponent from "../components/ContactComponent";

function ContactPage() {
  return (
    <div>
      <ScrollToTop />
      <h1>Kontakty</h1>
      <MapsComponent />
      <ContactComponent />
    </div>
  );
}

export default ContactPage;
