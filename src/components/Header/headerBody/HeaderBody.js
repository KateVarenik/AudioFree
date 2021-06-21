import "./HeaderBody.css";
import phone from "../../../img/phoneIcon.svg";
import searchIcon from "../../../img/searchIcon.svg";
import Compare from "../../Icons/Compare";
import Heart from "../../Icons/Heart";
import Basket from "../../Icons/Basket";

export default function HeaderBody() {
  return (
    <div className="header__body">
      <div className="header__body-container container">
        <div className="header__phone">
          <a href="tel:88005519202" className="header__phone-image">
            <img src={phone} alt="Phone" />
          </a>

          <div className="header__phone-text">
            <span className="header__phone-description">
              Бесплатный звонок по РФ
            </span>
            <a href="tel:88005519202" className="header__phone-number">
              8 800 551-92-02
            </a>
          </div>
        </div>
        <div className="header__search">
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder="Поиск товара" />
        </div>
        <div className="header__statusbar">
          <div className="header__statusbar-item compare">
            <Compare style={{ fontSize: "21px" }} />
            <span className="header__statusbar-item-quantity compare__quantity">
              10
            </span>
          </div>

          <div className="header__statusbar-item favorite">
            <Heart />
            <span className="header__statusbar-item-quantity favorite__quantity">
              1
            </span>
          </div>

          <div className="header__statusbar-item cart">
            <Basket />
            <span className="header__statusbar-item-quantity cart__quantity">
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
