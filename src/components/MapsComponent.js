import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MapsComponent() {
  return (
    <div className="map-embed mb-4">
      <iframe
        title="Miejsce zbiórki"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="async"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.6844664888745!2d-0.22328889999999996!3d51.59234609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611a9649dabab%3A0x975f9cd11440b69f!2sSt%20Mary%E2%80%99s%20and%20St%20John%E2%80%99s%20CE%20upper%20school!5e0!3m2!1sen!2suk!4v1706544014559!5m2!1sen!2suk"
      ></iframe>
    </div>
  );
}

export default MapsComponent;
