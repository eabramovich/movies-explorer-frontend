import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__wrapper">
        <input
          type="checkbox"
          className="filter-checkbox__invisible-checkbox"
          checked
        />
        <span className="filter-checkbox__visible-checkbox-wrapper">
          <span className="filter-checkbox__visible-checkbox"></span>
        </span>
      </label>
      <span class="filter-checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
