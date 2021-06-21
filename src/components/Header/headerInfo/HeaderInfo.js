import { Link } from "react-router-dom";
import Logo from "../../General/Logo";
import "./HeaderInfo.css";

export default function HeaderInfo() {
  return (
    <div className="header__info">
      <div className="header__info-container container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <Logo className="header__logo-name" />
            <p className="header__logo-description">
              Интернет магазин беспроводных наушников по РФ
            </p>
          </div>
        </Link>
        <ul className="header__info-menu">
          <li>
            <Link to="/delivery" className="header__info-link">
              Доставка и оплата
            </Link>
          </li>
          <li>
            <Link to="/guarantee" className="header__info-link">
              Гарантия и возврат
            </Link>
          </li>
          <li>
            <Link to="/pickup" className="header__info-link">
              Пункты самовывоза
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="header__info-link">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
