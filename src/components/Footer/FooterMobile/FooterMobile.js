import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Adress from "../../Contacts/Adress/Adress";
import Mail from "../../Contacts/Mail/Mail";
import Phone from "../../Contacts/Phone/Phone";
import "./FooterMobile.css";

export default function FooterMobile() {
  return (
    <div className="footer-mob">
      <div className="footer-mob__container container-s">
        <div className="footer-mob__store">
          <div className="footer-mob__title">Магазин</div>
          <ul>
            <li>
              <Link to="/" className="footer-mob__col-link">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="footer-mob__col-link">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link to="/guarantee" className="footer-mob__col-link">
                Гарантия и возврат
              </Link>
            </li>
            <li>
              <Link to="/pickup" className="footer-mob__col-link">
                Пункты самовывоза
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-mob__col-link">
                Отзывы
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-mob__col-link">
                Блог
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="footer-mob__col-link">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footer-mob__container container-s">
        <div className="footer-mob__contacts">
          <div className="footer-mob__title">Контакты</div>
          <div className="footer-mob__info">
            <Phone className="footer-mob__contacts-phone" />
            <Adress className="footer-mob__adress-dark" />
            <Mail className="footer-mob__mail-dark" />

            <div className="footer-mob__social footer__social">
              <Link to="/">
                <FontAwesomeIcon icon={faVk} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faViber} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer-mob__container container-s">
        <div className="footer-mob__text">Политика конфиденциальности</div>
      </div>
      <hr />
      <div className="footer-mob__container container-s">
        <div className="footer-mob__text">
          &copy; 2021 audiofree.ru Все права защищены
        </div>
      </div>
    </div>
  );
}
