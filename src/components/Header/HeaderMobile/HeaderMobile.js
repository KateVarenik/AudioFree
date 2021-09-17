import "./HeaderMobile.css";
import searchIcon from "../../../img/searchIcon.svg";
import phone from "../../../img/phoneIcon.svg";
import { Link } from "react-router-dom";
import Basket from "../../Icons/Basket";
import login from "../../../img/signinIcon.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgermenuMain from "../../Icons/BurgermenuMain";
import BurgermenuCatalog from "../../Icons/BurgermenuCatalog";
import BurgermenuPromo from "../../Icons/BurgermenuPromo";
import BurgermenuRegistr from "../../Icons/BurgermenuRegistr";
import { useState } from "react";
import CloseBtn from "../../Icons/CloseBtn/CloseBtn";
import MenuButton from "../../Icons/MenuButton";

export default function HeaderMobile() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {
      value: "Главная",
      href: "/",
      icon: <BurgermenuMain />,
      className: "menu-burger__main-link",
      id: 1,
    },
    {
      value: "Каталог",
      href: "/catalog",
      icon: <BurgermenuCatalog />,
      className: "menu-burger__main-link",
      id: 2,
    },
    {
      value: "Акции",
      href: "/promo",
      icon: <BurgermenuPromo />,
      className: "menu-burger__main-link",
      id: 3,
    },
    {
      value: "Вход/регистрация",
      href: "/",
      icon: <BurgermenuRegistr />,
      className: "menu-burger__main-link",
      id: 4,
    },
    {
      value: "Доставка и оплата",
      href: "/delivery",
      className: "menu-burger__link",
      id: 5,
    },
    {
      value: "Гарантия и возврат",
      href: "/guarantee",
      className: "menu-burger__link",
      id: 6,
    },
    {
      value: "Пункты самовывоза",
      href: "/pickup",
      className: "menu-burger__link",
      id: 7,
    },
    {
      value: "Контакты",
      href: "/contacts",
      className: "menu-burger__link",
      id: 8,
    },
    {
      value: "Новинки",
      href: "/new",
      className: "menu-burger__link",
      id: 9,
    },
    {
      value: "Бренды",
      href: "/brands",
      className: "menu-burger__link",
      id: 10,
    },
    {
      value: "Блог",
      href: "/blog",
      className: "menu-burger__link",
      id: 11,
    },
  ];
  return (
    <div className="menu-mobile">
      <div className="menu-mobile__container">
        <div className="menu-mobile__navigation">
          <button
            className="menu-mobile__menu-btn"
            onClick={() => setMenuActive(!menuActive)}
          >
            {!menuActive ? <MenuButton /> : <CloseBtn />}
          </button>
          <BurgerMenu
            active={menuActive}
            setActive={setMenuActive}
            header={"Меню"}
            items={items}
          />
          <button className="menu-mobile__search">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="menu-mobile__logo"
        >
          AudioFree
        </Link>
        <div className="menu-mobile__statusbar">
          <a href="tel:88005519202" className="menu-mobile__phone-image">
            <img src={phone} alt="Phone" />
          </a>
          <div className="menu-mobile__basket">
            <Basket className="menu-mobile__basket-image" />
            <span className="menu-mobile__statusbar-quantity cart__quantity">
              1
            </span>
          </div>
          <div className="menu-mobile__login">
            <img src={login} alt="" className="menu-mobile__login-image" />
            <span className="menu-mobile__statusbar-quantity">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
