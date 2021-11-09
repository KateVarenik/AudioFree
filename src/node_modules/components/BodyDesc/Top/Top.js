import { Link } from "react-router-dom";
import ItemTop from "./ItemsTop/ItemTop";
import "./Top.css";
import CATALOG from "../../../Consts/catalog/catalog";
import PurpleButton from "../../Buttons/PurpleButton";
import CardWrapper from "../../Catalog/CardWrapper";

export default function Top() {
  return (
    <div className="top">
      <div className="top__container container-l">
        <div className="top__content">
          <h3 className="top__sibtitle">ТОП-2021</h3>
          <h2 className="top__title">
            лидеры предзаказов, обзоров и рекомендаций
          </h2>
        </div>

        <div className="top__items">
          {CATALOG.filter(({ isBanner }) => !isBanner)
            .filter((item, index) => index <= 8)
            .map((item) => (
              <CardWrapper className="top__item" key={item.id}>
                <Link to="/catalog">
                  <ItemTop {...item} />
                </Link>
              </CardWrapper>
            ))}
        </div>
        <Link to="/catalog" className="top__button-link">
          <PurpleButton className="top__button">
            Смотреть больше моделей
          </PurpleButton>
        </Link>
      </div>
    </div>
  );
}
