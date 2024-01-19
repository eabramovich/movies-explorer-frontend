import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer section">
      <h6 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h6>
      <div className="footer__content">
        <p className="footer__copyright">&copy; 2020</p>
        <nav>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="#" className="footer__nav-link">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
