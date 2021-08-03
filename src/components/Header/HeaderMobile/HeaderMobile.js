import "./HeaderMobile.css";
import menuButton from "../../../img/menuIcon.svg";
import searchIcon from "../../../img/searchIcon.svg";
import phone from "../../../img/phoneIcon.svg";
import { Link } from "react-router-dom";
import Basket from "../../Icons/Basket";
import login from "../../../img/signinIcon.svg";

export default function HeaderMobile() {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile__container">
        <div className="menu-mobile__navigation">
          <button className="menu-mobile__menu-btn">
            <img src={menuButton} alt="Menu button" />
          </button>
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
