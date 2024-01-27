import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "../components/CalendarComponent";
import ScrollToTop from "../components/ScrollToTop";

function CalendarPage() {
  return (
    <div>
      <ScrollToTop />
      <h1>Kalendarz</h1>
      <CalendarComponent />
    </div>
  );
}

export default CalendarPage;
