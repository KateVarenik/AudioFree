import { Link } from "react-router-dom";
import CardWrapper from "../../components/Catalog/CardWrapper";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import Shopping from "../../img/shopping.svg";
import Support from "../../img/support.svg";
import DeliveryIcon from "../../img/delivery.svg";
import Bags from "../../img/bags.svg";
import Cash from "../../img/cash.svg";
import Visa from "../../img/visa.svg";
import MasterCard from "../../img/mastercard.svg";
import Mir from "../../img/mir.svg";

import "./delivery.css";

export const Delivery = () => {
  return (
    <div className="delivery">
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
      <div className="delivery__container container">
        <div className="delivery__breadcrumb breadcrumb">
          <Link to="/">Главная</Link>
          &nbsp; / &nbsp;
          <Link to="/delivery">Доставка и оплата</Link>
        </div>

        <h1 className="delivery__title">Доставка и оплата</h1>

        <div className="delivery__info">
          <CardWrapper className="delivery__info-item">
            <div className="delivery__info-img">
              <img src={Shopping} alt="Принимаем заявки 24/7" />
            </div>
            <h4 className="delivery__info-title">Принимаем заявки 24/7</h4>
            <p className="delivery__info-desc">
              Принимаем ваши заявки на сайте круглосуточно
            </p>
          </CardWrapper>
          <CardWrapper className="delivery__info-item">
            <div className="delivery__info-img">
              <img src={Support} alt="Время работы" />
            </div>
            <h4 className="delivery__info-title">Время работы</h4>
            <p className="delivery__info-desc">
              Пн-Пт с 10:00 до 19:00 <br /> Сб-Вс с 11:00 до 17:00
            </p>
          </CardWrapper>
          <CardWrapper className="delivery__info-item">
            <div className="delivery__info-img">
              <img src={DeliveryIcon} alt="Время доставки" />
            </div>
            <h4 className="delivery__info-title">Время доставки</h4>
            <p className="delivery__info-desc">
              Курьерская доставка “до дверей” ежедневно, с 10:00 до 22:00
            </p>
          </CardWrapper>
          <CardWrapper className="delivery__info-item">
            <div className="delivery__info-img">
              <img src={Bags} alt="Самовывоз" />
            </div>
            <h4 className="delivery__info-title">Самовывоз</h4>
            <p className="delivery__info-desc">
              Самовывоз из выдачи заказов, в часы работы выбранного пункта
            </p>
          </CardWrapper>
        </div>

        <div className="delivery__cost">
          <CardWrapper>
            <div className="delivery__cost-item">
              <h4 className="delivery__cost-title">Бесплатно</h4>
              <p className="delivery__cost-desc">
                При заказе на сумму от 3 000 руб
              </p>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="delivery__cost-item">
              <h4 className="delivery__cost-title">От 300 руб.</h4>
              <p className="delivery__cost-desc">
                При заказе на сумму до 3 000 руб
              </p>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="delivery__cost-item">
              <h4 className="delivery__cost-title">Бесплатно</h4>
              <p className="delivery__cost-desc">
                Самовывоз из пункта выдачи заказов
              </p>
            </div>
          </CardWrapper>
        </div>

        <div className="delivery__payment">
          <h2 className="delivery__title">Оплата при получении</h2>
          <div className="delivery__payment-items">
            <CardWrapper className="delivery__payment-item">
              <div className="delivery__payment-image">
                <img src={Cash} alt="Наличные" />
              </div>
              <span className="delivery__payment-text">Наличные</span>
            </CardWrapper>
            <CardWrapper className="delivery__payment-item">
              <div className="delivery__payment-image">
                <img src={Visa} alt="Виза" />
              </div>
            </CardWrapper>
            <CardWrapper className="delivery__payment-item">
              <div className="delivery__payment-image">
                <img src={MasterCard} alt="Мастеркард" />
              </div>
            </CardWrapper>
            <CardWrapper className="delivery__payment-item">
              <div className="delivery__payment-image">
                <img src={Mir} alt="Мир" />
              </div>
            </CardWrapper>
          </div>
        </div>

        <div className="delivery__companies">
          <h2 className="delivery__title">
            Работаем со всеми проверенными компаниями
          </h2>
          <CardWrapper className="delivery__table">
            <table>
              <tbody>
                <tr>
                  <td className="delivery__company-bold">ООО «СДЭК»</td>
                  <td>ООО «ЖелДорЭкспедиция»</td>
                  <td>ООО «Байкал-Сервис»</td>
                  <td>ООО «ЖелДорЭкспедиция»</td>
                </tr>
                <tr>
                  <td className="delivery__company-bold">
                    {" "}
                    ООО «Деловые Линии»
                  </td>
                  <td>ЗАО «Беломортранс»</td>
                  <td>ООО «КИТ»</td>
                  <td>ООО «Пони Экспресс»</td>
                </tr>
                <tr>
                  <td>Flip post</td>
                  <td>ООО «Карго Логистика»</td>
                  <td>ООО «Центр Авто Перевозок»</td>
                  <td>ООО «Автотрейдинг»</td>
                </tr>
                <tr>
                  <td>ООО «М-Транс-Лайн»</td>
                  <td>ООО «Аэродар»</td>
                  <td>ООО «Мэйджор Экспресс»</td>
                  <td>«EMS Russian Post»</td>
                </tr>
                <tr>
                  <td>ООО «Экспресс-Почта»</td>
                  <td>Экспресс доставка «DPD»</td>
                  <td>ООО «СПСР-Экспресс»</td>
                  <td>ООО «УралТранСервис»</td>
                </tr>
                <tr>
                  <td>ООО «ВЛК- Карго»</td>
                  <td>ООО «Аэрогруз»</td>
                  <td>«Экспресс-Авто»</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>ООО «Аэрокарго»</td>
                  <td>ООО «Энергия»</td>
                  <td>ООО «ЖелДорАльянс»</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </CardWrapper>
        </div>
      </div>
      <FooterGeneral />
    </div>
  );
};

export default Delivery;
