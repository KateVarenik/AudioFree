import { Link } from "react-router-dom";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import Tablet from "../../img/tablet.svg";
import Calendar from "../../img/calendar.svg";
import Refresh from "../../img/refresh.svg";
import "./guarantee.css";
import CardWrapper from "../../components/Catalog/CardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Guarantee = () => {
  return (
    <div className="guarantee">
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
      <div className="guarantee__container container-l">
        <div className="guarantee__breadcrumb breadcrumb">
          <Link to="/">Главная</Link>
          &nbsp; / &nbsp;
          <Link to="/guarantee">Гарантия и возврат</Link>
        </div>

        <h1 className="guarantee__title">Гарантия и возврат</h1>

        <div className="guarantee__info">
          <CardWrapper className="guarantee__info-item">
            <div className="guarantee__info-title">
              <img src={Tablet} alt="Гарантийный талон" />
              <span>
                Гарантийный <br /> талон
              </span>
            </div>
            <div className="guarantee__info-context">
              <p>
                Вы можете принять решение о возврате любого изделия в течение
                гарантийного срока, установленного производителем на каждую
                конкретную модель.
              </p>
              <p>
                Началом гарантийного срока считается момент получения заказа,
                если сохранены товарный вид и потребительские свойства товаров,
                а также документ, подтверждающий факт и условия покупки.
              </p>
            </div>
          </CardWrapper>
          <CardWrapper className="guarantee__info-item">
            <div className="guarantee__info-title">
              <img src={Calendar} alt="Возврат в течение 14 дней" />
              <span>Возврат в течение 14 дней</span>
            </div>
            <div className="guarantee__info-context">
              <p>
                Возврат без указания причин или по причине неподходящего
                размера, цвета, типа осуществляется в течение 14 (четырнадцати)
                календарных дней с момента фактического получения Товара
                непосредственно от продавца или лиц представляющих Продавца.
              </p>
              <p>
                Возврату подлежит только стоимость товаров. Стоимость доставки
                не компенсируется.
              </p>
            </div>
          </CardWrapper>
          <CardWrapper className="guarantee__info-item">
            <div className="guarantee__info-title">
              <img src={Refresh} alt="Возврат брака" />
              <span>
                Возврат <br /> брака
              </span>
            </div>
            <div className="guarantee__info-context">
              <p>
                При обнаружении брака в процессе использования купленного
                устройства Вы вправе предъявить претензию, если брак обнаружен в
                течение гарантийного срока.
              </p>
              <p>
                Если обнаружился брак, стоимость доставки также подлежит
                возврату
              </p>
            </div>
          </CardWrapper>
        </div>

        <div className="guarantee__order">
          <h2 className="guarantee__order-title">Как оформить возврат?</h2>
          <div className="guarantee__order-items">
            <CardWrapper className="guarantee__order-item">
              <div className="guarantee__order-item-top">
                <div className="guarantee__order-item-step">01</div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="guarantee__order-item-icon"
                />
              </div>
              <p className="guarantee__order-item-text">
                Аккуратно упаковать товар в упаковку в полной комплектации
                товары, поставляемые в комплекте, необходимо возвращать также в
                комплекте).
              </p>
            </CardWrapper>
            <CardWrapper className="guarantee__order-item">
              <div className="guarantee__order-item-top">
                <div className="guarantee__order-item-step">02</div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="guarantee__order-item-icon"
                />
              </div>
              <p className="guarantee__order-item-text">
                Заполнить заявление о возврате (прикладывается к заказу или
                отправляется менеджером отдела контроля качества).
              </p>
            </CardWrapper>
            <CardWrapper className="guarantee__order-item">
              <div className="guarantee__order-item-top">
                <div className="guarantee__order-item-step">03</div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="guarantee__order-item-icon"
                />
              </div>
              <p className="guarantee__order-item-text">
                Приложить копию кассового чека, указать способ возврата денежных
                средств.
              </p>
            </CardWrapper>
            <CardWrapper className="guarantee__order-item">
              <div className="guarantee__order-item-top">
                <div className="guarantee__order-item-step">04</div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="guarantee__order-item-icon-down"
                />
              </div>
              <p className="guarantee__order-item-text">
                Согласовать с менеджером отдела контроля качества способ
                доставки возвращаемого или обмениваемого товара.
              </p>
            </CardWrapper>
          </div>
        </div>
      </div>
      <FooterGeneral />
    </div>
  );
};

export default Guarantee;
