import { Link } from "react-router-dom";
import "./HeaderInfo.css";

export default function HeaderInfo() {
  return (
    <div className="header__info">
      <div className="header__info-container container">
        <Link to="/">
          <div className="header__logo">
            <svg
              className="header__logo-icon"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.30664 9.84375C3.33953 9.84375 2.46094 10.6602 2.46094 11.6895V17.8418C2.46094 18.8352 3.33342 19.6875 4.30664 19.6875C5.3244 19.6875 6.15234 18.8596 6.15234 17.8418V11.6895C6.15234 10.6717 5.3244 9.84375 4.30664 9.84375Z"
                fill="white"
              />
              <path
                d="M10.541 0C4.77381 0 0 4.69178 0 10.459V10.4747C0.515731 10.0843 1.15057 9.84375 1.8457 9.84375H1.84689C2.35081 9.17466 3.11448 8.75696 3.9441 8.65623C4.7348 5.79776 7.43429 3.69141 10.541 3.69141C13.6477 3.69141 16.2652 5.79776 17.0559 8.65623C17.8856 8.75696 18.6492 9.17466 19.1531 9.84375H19.1543C19.8494 9.84375 20.4843 10.0843 21 10.4747V10.459C21 4.69178 16.3082 0 10.541 0Z"
                fill="white"
              />
              <path
                d="M16.6934 9.84375C15.6756 9.84375 14.8477 10.6717 14.8477 11.6895V17.8418C14.8477 18.8596 15.6756 19.6875 16.6934 19.6875C17.6812 19.6875 18.5391 18.8271 18.5391 17.8418V11.6895C18.5391 10.6512 17.6528 9.84375 16.6934 9.84375Z"
                fill="white"
              />
              <path
                d="M0 12.2637V15.9551C0 16.7558 0.5161 17.4311 1.23047 17.6856C1.23047 17.5687 1.23047 10.7282 1.23047 10.5331C0.5161 10.7877 0 11.4629 0 12.2637Z"
                fill="white"
              />
              <path
                d="M19.7695 10.5331C19.7695 11.4103 19.7695 17.4577 19.7695 17.6857C20.4839 17.4311 21 16.7559 21 15.9551V12.2637C21 11.4629 20.4839 10.7877 19.7695 10.5331Z"
                fill="white"
              />
            </svg>
            <span className="header__logo-name">AudioFree</span>
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
