import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    // <div className="filter-checkbox">
    //   {/* <label className="filter-checkbox__wrapper">
    //     <input
    //       type="checkbox"
    //       className="filter-checkbox__invisible-checkbox"
    //     />
    //     <span className="filter-checkbox__visible-checkbox-wrapper">
    //       <span className="filter-checkbox__visible-checkbox"></span>
    //     </span>
    //   </label> */}
    //   <span class="filter-checkbox__text">Короткометражки</span>
    // </div>
    //<div class="switch-container">
  <div className="movies-filter"> 
    <label className="movies-filter__switch">
        <input type="checkbox" className="movies-filter__checkbox"/>
        <span className="movies-filter__slider"></span>
    </label>
    <span className="movies-filter__label">Короткометражки:</span>
</div>
  );
}

export default FilterCheckbox;
