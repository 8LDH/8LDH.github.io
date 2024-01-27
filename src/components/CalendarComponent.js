import React from "react";
import "../styles/CalendarComponentStyles.css";

const CalendarComponent = () => {
  return (
    <div>
      <div className="responsive-iframe-container big-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=800&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&hl=pl&src=OGthbGRoQGdtYWlsLmNvbQ&src=ZW4udWsjaG9saWRheUBncm91cC52LmCnhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
      <div className="responsive-iframe-container small-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=800&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&hl=pl&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=OGthbGRoQGdtYWlsLmNvbQ&src=ZW4udWsjaG9saWRheUBncm91cC52LmCnhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarComponent;
