import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../Icons/Arrow/ArrowLeft";
import "./BurgerMenu.css";

export default function BurgerMenu({
  header,
  items,
  className,
  active,
  setActive,
}) {
  return (
    <div
      className={active ? "menu-burger active" : "menu-burger"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div
        className="menu-burger__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-burger__header">
          <Link to="/">
            <ArrowLeft style={{ paddingRight: "29px" }} />
          </Link>

          {header}
        </div>
        <ul>
          {items.map((item) => (
            <li className={item.className} key={item.id}>
              {item.icon}
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
        <div className="contacts__phone-text menu-burger__contacts">
          <span className="contacts__phone-description">
            Бесплатный звонок по РФ
          </span>
          <a href="tel:88005519202" className="contacts__phone-number">
            8 800 551-92-02
          </a>
        </div>
      </div>
    </div>
  );
}
