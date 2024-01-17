import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a className="portfolio__project-link" href="#">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__project-link" href="#">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__project">
          <a className="portfolio__project-link" href="#">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
