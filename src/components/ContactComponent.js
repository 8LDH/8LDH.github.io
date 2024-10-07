import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactComponent() {
  return (
    <div className="contact-info mb-4">
      <div className="row">
        <div className="col-md-6">
          <div className="address mb-4">
            <h3>Adres:</h3>
            St Mary’s and St John’s CE Upper School <br />
            10-2 Downage, London NW4 1AA
          </div>
          <div className="email mb-4">
            <h3>Adresy emailowe</h3>
            <ul>
              <li>
                Szczepowy: {""}
                <a href="mailto:bartek@osemka.co.uk">bartek@osemka.co.uk</a>
              </li>
              <li>
                Drużynowy: {""}
                <a href="mailto:wasiuk8ldh@gmail.com">wasiuk8ldh@gmail.com</a>
              </li>
              <li>
                Wódz Zuchów: {""}
                <a href="mailto:wyrwideby@gmail.com">wyrwideby@yahoo.com</a>
              </li>
              <li>
                Drużynowy Wędrowników: {""}
                <a href="mailto:wigrywedro@gmail.com">wigrywedro@gmail.com</a>
              </li>
              <li>
                Webmajster: {""}
                <a href="mailto:jan@osemka.co.uk">jan@osemka.co.uk</a>
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
