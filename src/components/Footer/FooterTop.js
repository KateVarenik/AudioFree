import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import "./FooterTop.css";
import arrow from "../../img/arrow.svg";
import Phone from "../Contacts/Phone/Phone";
import Adress from "../Contacts/Adress/Adress";
import Mail from "../Contacts/Mail/Mail";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top__container container-l">
        <div className="footer-top__col">
          <div className="footer-top__title">Личный кабинет</div>
          <ul>
            <li>
              <Link to="/" className="footer-top__col-link">
                Зарегистрироваться
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Войти в аккаунт
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Отложенные товары
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Ваши заказы
              </Link>
            </li>
          </ul>
          <div className="footer-top__call">
            <form action="" name="back-call">
              <div className="footer-top__call-title">
                Закажите обратный звонок:
              </div>
              <div className="footer-top__call-num">
                <input type="text" placeholder="Ваш номер телефона" />
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-top__col">
          <div className="footer-top__title">Категории</div>
          <ul>
            <li>
              <Link to="/" className="footer-top__col-link">
                TRUE WIRELESS
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Гарнитуры
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Накладные
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Полноразмерные
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                С проводом
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                С шейным ободком
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-top__col">
          <div className="footer-top__title">Магазин</div>
          <ul>
            <li>
              <Link to="/" className="footer-top__col-link">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="footer-top__col-link">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link to="/guarantee" className="footer-top__col-link">
                Гарантия и возврат
              </Link>
            </li>
            <li>
              <Link to="/pickup" className="footer-top__col-link">
                Пункты самовывоза
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-top__col-link">
                Отзывы
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-top__col-link">
                Блог
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="footer-top__col-link">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-top__col">
          <div className="footer-top__title">Контакты</div>
          <div className="footer-top__contacts">
            <Phone className="footer-top__contacts-phone" />
            <Adress className="footer-top__adress-dark" />
            <Mail className="footer-top__mail-dark" />

            <div className="footer__social">
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
    </div>
  );
}
