import CardWrapper from "../../Catalog/CardWrapper";
import "./Odds.css";
import delivery from "../../../img/delivery.svg";
import prepay from "../../../img/money.svg";
import risks from "../../../img/shopping.svg";

export default function Odds() {
  return (
    <div className="odds">
      <div className="odds__container container">
        <div className="odds__content">
          <h3 className="odds__subtitle">
            Где выгодно купить качественные наушники?
          </h3>
          <h2 className="odds__title">
            Интернет-магазин AudioFree - магазин хороших покупок
          </h2>
          <p className="odds__text">
            Текст о том, что мы не просто так подбираем наушники, а ассортимент
            формируется исходя из спроса и новинок рынка, с учетом требований к
            качеству и по наличию популярных, топовых, классических позиций
          </p>
        </div>
        <div className="odds__items">
          <CardWrapper className="odds__item">
            <div className="odds__item-img">
              <img src={delivery} alt="Доставка 1-2 дня" />
            </div>

            <h4 className="odds__item-title">Доставка 1-2 дня</h4>
            <p className="odds__item-text">
              Команда "AudioFree" быстро соберет и доставит Вашу посылку - от 1
              до 2 дней по всей Росcии в зависимости от адреса
            </p>
          </CardWrapper>
          <CardWrapper className="odds__item">
            <div className="odds__item-img">
              <img src={prepay} alt="Предоплата 0 руб." />
            </div>

            <h4 className="odds__item-title">Предоплата 0 руб.</h4>
            <p className="odds__item-text">
              Никаких предоплат при доставке по Москве и Санкт-Петербургу -
              платите при получении, когда удостоверитесь в качестве покупки
            </p>
          </CardWrapper>
          <CardWrapper className="odds__item">
            <div className="odds__item-img">
              <img src={risks} alt="0 рисков при покупке" />
            </div>

            <h4 className="odds__item-title">0 рисков при покупке</h4>
            <p className="odds__item-text">
              При покупке в "Audio Free" Вы обязательно получите чек и
              гарантийный талон. Мы всегда соблюдаем все права потребителей
            </p>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}
