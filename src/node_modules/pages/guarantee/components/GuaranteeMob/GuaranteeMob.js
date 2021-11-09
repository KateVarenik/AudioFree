import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/General/Breadcrumb/Breadcrumb";
import Flex from "../../../../components/General/Flex/Flex";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../../../components/General/Title/PageTitle";
import ArrowLeft from "../../../../components/Icons/Arrow/ArrowLeft";
import "./GuaranteeMob.css";
import Tablet from "../../../../img/tablet.svg";
import Calendar from "../../../../img/calendar.svg";
import Refresh from "../../../../img/refresh.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GuaranteeMob() {
  return (
    <div className="guarantee-mob__container container-s">
      <Flex>
        <ArrowLeft style={{ paddingLeft: "10px", paddingRight: "17px" }} />
        <Breadcrumb>
          <Link to="/">Главная</Link>
          &nbsp; / &nbsp;
          <Link to="/guarantee">Гарантия и возврат</Link>
        </Breadcrumb>
      </Flex>
      <PageTitle style={{ padding: "18px 10px", marginBottom: "14px" }}>
        Гарантия и возврат
      </PageTitle>

      <div className="guarantee-mob__info">
        <div className="guarantee-mob__info-item">
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
              Началом гарантийного срока считается момент получения заказа, если
              сохранены товарный вид и потребительские свойства товаров, а также
              документ, подтверждающий факт и условия покупки.
            </p>
          </div>
        </div>
        <div className="guarantee-mob__info-item">
          <div className="guarantee__info-title">
            <img src={Calendar} alt="Возврат в течение 14 дней" />
            <span>Возврат в течение 14 дней</span>
          </div>
          <div className="guarantee__info-context">
            <p>
              Возврат без указания причин или по причине неподходящего размера,
              цвета, типа осуществляется в течение 14 (четырнадцати) календарных
              дней с момента фактического получения Товара непосредственно от
              продавца или лиц представляющих Продавца.
            </p>
            <p>
              Возврату подлежит только стоимость товаров. Стоимость доставки не
              компенсируется.
            </p>
          </div>
        </div>
        <div className="guarantee-mob__info-item">
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
              Если обнаружился брак, стоимость доставки также подлежит возврату
            </p>
          </div>
        </div>
      </div>

      <h2 className="guarantee-mob__order-title">Как оформить возврат?</h2>
      <div className="guarantee-mob__order-items">
        <div className="guarantee-mob__order-item">
          <div className="guarantee__order-item-top">
            <div className="guarantee__order-item-step">01</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="guarantee__order-item-icon-down"
            />
          </div>
          <p className="guarantee__order-item-text">
            Аккуратно упаковать товар в упаковку в полной комплектации товары,
            поставляемые в комплекте, необходимо возвращать также в комплекте).
          </p>
        </div>
        <div className="guarantee-mob__order-item">
          <div className="guarantee__order-item-top">
            <div className="guarantee__order-item-step">02</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="guarantee__order-item-icon-down"
            />
          </div>
          <p className="guarantee__order-item-text">
            Заполнить заявление о возврате (прикладывается к заказу или
            отправляется менеджером отдела контроля качества).
          </p>
        </div>
        <div className="guarantee-mob__order-item">
          <div className="guarantee__order-item-top">
            <div className="guarantee__order-item-step">03</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="guarantee__order-item-icon-down"
            />
          </div>
          <p className="guarantee__order-item-text">
            Приложить копию кассового чека, указать способ возврата денежных
            средств.
          </p>
        </div>
        <div className="guarantee-mob__order-item">
          <div className="guarantee__order-item-top">
            <div className="guarantee__order-item-step">04</div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="guarantee__order-item-icon-down"
            />
          </div>
          <p className="guarantee__order-item-text">
            Согласовать с менеджером отдела контроля качества способ доставки
            возвращаемого или обмениваемого товара.
          </p>
        </div>
      </div>
    </div>
  );
}
