import { React } from "react";
import { useLocation, Link} from "react-router-dom";
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
        <li className="header__auth-menu-item">
            <Link to="/register" className="header__auth-menu-link">Регистрация</Link>
          </li>
          <li className="header__auth-menu-item">
            <Link className="header__auth-menu-link header__login-link">Войти</Link>
          </li>
      </ul>}
    </header>
  );
}

export default Header;
