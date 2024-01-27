import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MapsComponent() {
  return (
    <div className="map-embed mb-4">
      <iframe
        title="Troop Location"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4957.789524469293!2d-0.23105909849633346!3d51.588492103218044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876117e75f6107f%3A0xb2950e0e61eb8498!2sSt%20Mary&#39;s%20and%20St%20John&#39;s%20CE%20School%20Primary!5e0!3m2!1sen!2suk!4v1706042778857!5m2!1sen!2suk"
      ></iframe>
    </div>
  );
}

export default MapsComponent;
