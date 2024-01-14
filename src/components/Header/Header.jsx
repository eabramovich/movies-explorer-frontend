import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import AccountMenu from "../AccountMenu/AccountMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function Header() {
  return (
    <header className="header">
     <Logo />
     {/* <NavigationMenu /> */}
      <ul className="header__auth-menu">
        <li className="header__auth-menu-link">Регистрация</li>
        <li className="header__auth-menu-link header__login-link">Войти</li>
      </ul>
    {/* <AccountMenu /> */}
    </header>
  );
}

export default Header;
