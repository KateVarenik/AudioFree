import "./CardProduct.css";
import InStock from "./InStock/InStock";
import PurpleButton from "../../Buttons/PurpleButton";
import WhiteGrayButton from "../../Buttons/WhiteGrayButton";
import CompareButton from "../../Buttons/CompareButton";
import FavoriteButton from "../../Buttons/FavoriteButton";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import Title from "./Title/Title";
import Photo from "./Photo/Photo";
import CardWrapper from "../CardWrapper";

export default function CardProduct({
  title,
  rate,
  image,
  currency,
  price,
  className,
}) {
  return (
    <CardWrapper className="card__product">
      <div className="card__top">
        <InStock />
        <div className="card__top-buttons">
          <CompareButton />
          <FavoriteButton />
        </div>
      </div>
      <Photo image={image} title={title} />
      <Title title={title} />
      <div className="card__info">
        <Rating rate={rate} />
        <Price currency={currency} price={price} />
      </div>
      <div className="card__buttons">
        <PurpleButton>Купить в 1 клик</PurpleButton>
        <WhiteGrayButton>В корзину</WhiteGrayButton>
      </div>
    </CardWrapper>
  );
}
