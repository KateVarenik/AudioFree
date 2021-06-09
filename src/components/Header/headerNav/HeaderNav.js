// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./HeaderNav.css";
import menuButton from "../../../img/menuIcon.svg";
import login from "../../../img/signinIcon.svg";

const MENU = [
  { to: "/", name: "Главная", exact: true },
  { to: "/sales", name: "Скидки", exact: false },
  { to: "/new", name: "Новинки", exact: false },
  { to: "/brands", name: "Бренды", exact: false },
  { to: "/blog", name: "Блог", exact: false },
  { to: "/promo", name: "Акции", exact: false },
];

export default function HeaderNav() {
  return (
    <div className="header__nav">
      <div className="header__container container">
        <Link to="/catalog" className="header__catalog">
          <img src={menuButton} alt="" className="header__catalog-button" />
          <span className="header__catalog-label">Каталог товаров</span>
        </Link>
        <ul className="header__menu">
          {MENU.map((link) => (
            <li key={link.name} className="header__menu-item">
              <NavLink
                to={link.to}
                className="header__menu-link"
                activeClassName="active"
                exact={link.exact}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="header__login">
          <img src={login} alt="" className="header__login-image" />
          <span className="header__login-label"> Вход/Регистрация</span>
        </div>
      </div>
    </div>
  );
}
