import MainTitle from "../../General/Title/MainTitle";
import Subtitle from "../../General/Title/Subtitle";
import "./Odds.css";
import delivery from "../../../img/delivery.svg";
import prepay from "../../../img/money.svg";
import risks from "../../../img/shopping.svg";

export default function OddsMob() {
  return (
    <div className="odds__container-s container-s">
      <div className="odds__content-s">
        <Subtitle>Где выгодно купить качественные наушники?</Subtitle>
        <MainTitle>
          Интернет-магазин AudioFree - магазин хороших покупок
        </MainTitle>
        <p className="odds__text-s">
          Текст о том, что мы не просто так подбираем наушники, а ассортимент
          формируется исходя из спроса и новинок рынка, с учетом требований к
          качеству и по наличию популярных, топовых, классических позиций
        </p>
      </div>
      <div className="odds__items-s">
        <div className="odds__item-s">
          <div className="odds__item-img">
            <img src={delivery} alt="Доставка 1-2 дня" />
          </div>

          <h4 className="odds__item-title-s">Доставка 1-2 дня</h4>
          <p className="odds__item-text-s">
            Команда "AudioFree" быстро соберет и доставит Вашу посылку - от 1 до
            2 дней по всей Росcии в зависимости от адреса
          </p>
        </div>

        <div className="odds__item-s">
          <div className="odds__item-img">
            <img src={risks} alt="0 рисков при покупке" />
          </div>

          <h4 className="odds__item-title-s">0 рисков при покупке</h4>
          <p className="odds__item-text-s">
            При покупке в "Audio Free" Вы обязательно получите чек и гарантийный
            талон. Мы всегда соблюдаем все права потребителей
          </p>
        </div>

        <div className="odds__item-s">
          <div className="odds__item-img">
            <img src={prepay} alt="Предоплата 0 руб." />
          </div>

          <h4 className="odds__item-title-s">Предоплата 0 руб.</h4>
          <p className="odds__item-text-s">
            Никаких предоплат при доставке по Москве и Санкт-Петербургу -
            платите при получении, когда удостоверитесь в качестве покупки
          </p>
        </div>
      </div>
    </div>
  );
}
