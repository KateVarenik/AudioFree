import "./CardSale.css";
import SaleImage from "../../../img/sale.png";
import GreenButton from "../../Buttons/GreenButton";
import CardWrapper from "../CardWrapper";

export default function CardSale() {
  return (
    <CardWrapper className="card-sale">
      <img src={SaleImage} alt="" className="card-sale__image" />
      <span className="card-sale__title">Распродажа</span>
      <p className="card-sale__desc">
        За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
        версии появились по ошибке, некоторые - намеренно{" "}
      </p>
      <GreenButton>В каталог скидок</GreenButton>
    </CardWrapper>
  );
}
