import React from "react";
import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <nav>
      <ul className="navigation__menu">
        <li className="navigation__menu-link">Фильмы</li>
        <li className="navigation__menu-link">Сохранённые фильмы</li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
