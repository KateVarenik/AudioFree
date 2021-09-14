import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/General/Breadcrumb/Breadcrumb";
import Flex from "../../../../components/General/Flex/Flex";
import PageTitle from "../../../../components/General/Title/PageTitle";
import ArrowLeft from "../../../../components/Icons/Arrow/ArrowLeft";
import "./DeliveryMob.css";
import Shopping from "../../../../img/shopping.svg";
import Support from "../../../../img/support.svg";
import DeliveryIcon from "../../../../img/delivery.svg";
import Bags from "../../../../img/bags.svg";
import Cash from "../../../../img/cash.svg";
import Visa from "../../../../img/visa.svg";
import MasterCard from "../../../../img/mastercard.svg";
import Mir from "../../../../img/mir.svg";

export default function DeliveryMob() {
  return (
    <>
      <div className="delivery-mob__container container-s">
        <Flex>
          <ArrowLeft style={{ paddingLeft: "10px", paddingRight: "17px" }} />
          <Breadcrumb>
            <Link to="/">Главная</Link>
            &nbsp; / &nbsp;
            <Link to="/delivery">Доставка и оплата</Link>
          </Breadcrumb>
        </Flex>
        <PageTitle style={{ padding: "18px 10px" }}>
          Доставка и оплата
        </PageTitle>
        <div className="delivery-mob__info">
          <div className="delivery-mob__info-item">
            <div className="delivery__info-img">
              <img src={Shopping} alt="Принимаем заявки 24/7" />
            </div>
            <h4 className="delivery__info-title">Принимаем заявки 24/7</h4>
            <p className="delivery__info-desc">
              Принимаем ваши заявки на сайте круглосуточно
            </p>
          </div>
          <div className="delivery-mob__info-item">
            <div className="delivery__info-img">
              <img src={Support} alt="Время работы" />
            </div>
            <h4 className="delivery__info-title">Время работы</h4>
            <p className="delivery__info-desc">
              Пн-Пт с 10:00 до 19:00 <br /> Сб-Вс с 11:00 до 17:00
            </p>
          </div>
          <div className="delivery-mob__info-item">
            <div className="delivery__info-img">
              <img src={DeliveryIcon} alt="Время доставки" />
            </div>
            <h4 className="delivery__info-title">Время доставки</h4>
            <p className="delivery__info-desc">
              Курьерская доставка “до дверей” ежедневно, с 10:00 до 22:00
            </p>
          </div>
          <div className="delivery-mob__info-item">
            <div className="delivery__info-img">
              <img src={Bags} alt="Самовывоз" />
            </div>
            <h4 className="delivery__info-title">Самовывоз</h4>
            <p className="delivery__info-desc">
              Самовывоз из выдачи заказов, в часы работы выбранного пункта
            </p>
          </div>
        </div>

        <div className="delivery-mob__cost">
          <div>
            <div className="delivery-mob__cost-item">
              <h4 className="delivery__cost-title">Бесплатно</h4>
              <p className="delivery__cost-desc">
                При заказе на сумму от 3 000 руб
              </p>
            </div>
          </div>
          <div>
            <div className="delivery-mob__cost-item">
              <h4 className="delivery__cost-title">От 300 руб.</h4>
              <p className="delivery__cost-desc">
                При заказе на сумму до 3 000 руб
              </p>
            </div>
          </div>
          <div>
            <div className="delivery-mob__cost-item">
              <h4 className="delivery__cost-title">Бесплатно</h4>
              <p className="delivery__cost-desc">
                Самовывоз из пункта выдачи заказов
              </p>
            </div>
          </div>
        </div>

        <div className="delivery-mob__payment">
          <h2 className="delivery-mob__title">Оплата при получении</h2>
          <div className="delivery-mob__payment-items">
            <div className="delivery-mob__payment-item">
              <div
                className="delivery-mob__payment-image"
                style={{ width: "34px" }}
              >
                <img src={Cash} alt="" />
              </div>
              <span className="delivery__payment-text">Наличные</span>
            </div>
            <div className="delivery-mob__payment-item">
              <div
                className="delivery-mob__payment-image"
                style={{ width: "78px" }}
              >
                <img src={Visa} alt="" />
              </div>
            </div>
            <div className="delivery-mob__payment-item">
              <div
                className="delivery-mob__payment-image"
                style={{ width: "64px" }}
              >
                <img src={MasterCard} alt="" />
              </div>
            </div>
            <div className="delivery-mob__payment-item">
              <div
                className="delivery-mob__payment-image"
                style={{ width: "87px" }}
              >
                <img src={Mir} alt="" />
              </div>
            </div>
          </div>
        </div>

        <h2 className="delivery-mob__title">
          Работаем со всеми проверенными компаниями
        </h2>

        <div className="delivery-mob__companies">
          <div className="delivery-mob__companies-block">
            <ul>
              <li style={{ fontWeight: 700 }}>ООО «СДЭК»</li>
              <hr />
              <li style={{ fontWeight: 700 }}>ООО «Деловые Линии»</li>
              <hr />
              <li>Flip post</li>
              <hr />
              <li>ООО «М-Транс-Лайн»</li>
              <hr />
              <li>ООО «Экспресс-Почта»</li>
              <hr />
              <li>ООО «ВЛК- Карго»</li>
              <hr />
              <li>ООО «Аэрокарго»</li>
            </ul>
          </div>
          <div className="delivery-mob__companies-block">
            <ul>
              <li>ООО «ЖелДорЭкспедиция»</li>
              <hr />
              <li>ЗАО «Беломортранс»</li>
              <hr />
              <li>ООО «Карго Логистика»</li>
              <hr />
              <li>ООО «Аэродар»</li>
              <hr />
              <li>Экспресс доставка «DPD»</li>
              <hr />
              <li>ООО «Аэрогруз»</li>
              <hr />
              <li>ООО «Энергия»</li>
            </ul>
          </div>
          <div className="delivery-mob__companies-block">
            <ul>
              <li>ООО «Байкал-Сервис»</li>
              <hr />
              <li>ООО «КИТ»</li>
              <hr />
              <li>ООО «Центр Авто Перевозок»</li>
              <hr />
              <li>ООО «Мэйджор Экспресс»</li>
              <hr />
              <li>ООО «СПСР-Экспресс»</li>
              <hr />
              <li>«Экспресс-Авто»</li>
              <hr />
              <li>ООО «ЖелДорАльянс»</li>
            </ul>
          </div>
          <div className="delivery-mob__companies-block">
            <ul>
              <li>ООО «ЖелДорЭкспедиция»</li>
              <hr />
              <li>ООО «Пони Экспресс»</li>
              <hr />
              <li>ООО «Автотрейдинг»</li>
              <hr />
              <li>«EMS Russian Post»</li>
              <hr />
              <li>ООО «УралТранСервис»</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
