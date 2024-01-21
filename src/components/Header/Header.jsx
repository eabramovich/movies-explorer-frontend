import { React } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import AccountMenu from "../AccountMenu/AccountMenu";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function Header({ isLoggedIn }) {
  const location = useLocation();
  
  return (
    <header
      className={`section header ${
        (isLoggedIn && location.pathname !== '/') ? "header_theme_light" : "header_theme_dark"
      }`}
    >
      <Logo />
      {isLoggedIn && <NavigationMenu isLoggedIn={isLoggedIn} />}
      {isLoggedIn && <AccountMenu isLoggedIn={isLoggedIn} />}
      {!isLoggedIn && <ul className="header__auth-menu">
        <li className="header__auth-menu-link">Регистрация</li>
        <li className="header__auth-menu-link header__login-link">Войти</li>
      </ul>}
    </header>
  );
}

export default Header;
