import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import "./FooterTop.css";
import arrow from "../../img/arrow.svg";
import phone from "../../img/contact.svg";
import place from "../../img/place.svg";
import email from "../../img/mail.svg";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top__container container">
        <div className="footer-top__col">
          <div className="footer-top__title">Личный кабинет</div>
          <ul>
            <li>
              <Link to="/">Зарегистрироваться</Link>
            </li>
            <li>
              <Link to="/">Войти в аккаунт</Link>
            </li>
            <li>
              <Link to="/">Отложенные товары</Link>
            </li>
            <li>
              <Link to="/">Ваши заказы</Link>
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
              <Link to="/">TRUE WIRELESS</Link>
            </li>
            <li>
              <Link to="/">Гарнитуры</Link>
            </li>
            <li>
              <Link to="/">Накладные</Link>
            </li>
            <li>
              <Link to="/">Полноразмерные</Link>
            </li>
            <li>
              <Link to="/">С проводом</Link>
            </li>
            <li>
              <Link to="/">С шейным ободком</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top__col">
          <div className="footer-top__title">Магазин</div>
          <ul>
            <li>
              <Link to="/">О компании</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка и оплата</Link>
            </li>
            <li>
              <Link to="/guarantee">Гарантия и возврат</Link>
            </li>
            <li>
              <Link to="/pickup">Пункты самовывоза</Link>
            </li>
            <li>
              <Link to="/">Отзывы</Link>
            </li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="footer-top__col">
          <div className="footer-top__title">Контакты</div>
          <div className="footer-top__contacts">
            <div className="footer-top__contacts-item">
              <a href="tel:88005519202" className="footer-top__phone-image">
                <img src={phone} alt="Phone" />
              </a>

              <div className="footer-top__phone-text">
                <span className="footer-top__phone-description">
                  Бесплатный звонок по РФ
                </span>
                <a href="tel:88005519202" className="footer-top__phone-number">
                  8 800 551-92-02
                </a>
              </div>
            </div>
            <div className="footer-top__contacts-item">
              <div className="footer-top__adress-image">
                <img src={place} alt="Place" />
              </div>

              <div className="footer-top__contacts-text">
                <p className="footer-top__adress-city">Санкт-Петербург,</p>
                <p className="footer-top__adress-street">Дачный пр. 21</p>
              </div>
            </div>
            <div className="footer-top__contacts-item">
              <a
                href="mailto:hello@audiofree.ru"
                className="footer-top__email-image"
              >
                <img src={email} alt="email" />
              </a>

              <div className="footer-top__contacts-text">
                <p className="footer-top__email-label">
                  По всем вопросам пишите:
                </p>
                <a
                  href="mailto:hello@audiofree.ru"
                  className="footer-top__email-adress"
                >
                  hello@audiofree.ru
                </a>
              </div>
            </div>

            <div className="footer-top__social">
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
