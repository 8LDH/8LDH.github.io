import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          © {currentYear} Ósma Londyńska Drużyna Harcerzy.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
