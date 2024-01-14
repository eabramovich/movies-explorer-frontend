import React from "react";
import logo from "../../images/logo.svg";
import "./Logo.css";

function Logo() {
    return (
        <img src={logo} alt="Лого" className="logo" />
    );
}

export default Logo;