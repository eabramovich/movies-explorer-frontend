import React from "react";
import "./AccountMenu.css";
import accountIcon from "../../images/account_icon.svg";

function AccountMenu() {
  return (
    <ul className="account-menu">
      <li className="account-menu__link">
        Аккаунт
        <span className="account-menu__icon-frame">
          <img
            src={accountIcon}
            className="account-menu__icon"
            alt="Иконка аккаунта"
          />
        </span>
      </li>
    </ul>
  );
}

export default AccountMenu;
