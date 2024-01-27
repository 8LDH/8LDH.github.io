import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactComponent() {
  return (
    <div className="contact-info mb-4">
      <div className="row">
        <div className="col-md-6">
          <div className="address mb-4">
            <h3>Adres:</h3>
            St Mary's and St John's CE School Primary <br />
            40 Wykeham Rd, London NW4 2SU
          </div>
          <div className="email mb-4">
            <h3>Adresy emailowe</h3>
            <ul>
              <li>
                Szczepowy: {""}
                <a href="mailto:leader1@example.com">leader1@example.com</a>
              </li>
              <li>
                Drużynowy: {""}
                <a href="mailto:troop@example.com">troop@example.com</a>
              </li>
              <li>
                Wódz Zuchów: {""}
                <a href="mailto:leader2@example.com">leader2@example.com</a>
              </li>
              <li>
                Drużynowy Wędrowników: {""}
                <a href="mailto:leader2@example.com">leader2@example.com</a>
              </li>
              <li>
                Webmajster: {""}
                <a href="mailto:leader2@example.com">leader2@example.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="meeting-info mb-4">
            <h3>Zbiorki:</h3>
            <p>Dni: Co sobote</p>
            <p>Godzina: 13:00 - 14:30</p>
            <p>Miejsce: Boisko w St Mary's and St John's CE School Primary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
