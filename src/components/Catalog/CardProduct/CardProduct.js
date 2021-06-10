import "./CardProduct.css";
import InStock from "./InStock/InStock";
import Compare from "../../Icons/Compare";
import Heart from "../../Icons/Heart";
import Star from "../../Icons/Star/Star";
import { useState } from "react";
import PurpleButton from "../../Buttons/PurpleButton";
import WhiteGrayButton from "../../Buttons/WhiteGrayButton";

export default function CardProduct({ price, title, rate, currency, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);

  return (
    <div className="card">
      <div className="card__top">
        <InStock />
        <div className="card__top-buttons">
          <button
            className={`card__top-button ${isCompare && "active"}`}
            onClick={() => setIsCompare((prevIsCompare) => !prevIsCompare)}
          >
            <Compare />
          </button>
          <button
            className={`card__top-button ${isFavorite && "active"}`}
            onClick={() => setIsFavorite((prevIsFavorite) => !prevIsFavorite)}
          >
            <Heart />
          </button>
        </div>
      </div>
      <div className="card__photo">
        <img src={image} alt={title} />
      </div>
      <div className="cart__title">
        <p>{title}</p>
      </div>
      <div className="card__info">
        <div className="card__info-rating">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Star key={i} className={rate > i ? "yellow" : "gray"} />
            ))}
        </div>
        <div
          className="card__info-price"
          style={{ fontSize: price.toString().length > 6 ? "22px" : "24px" }}
        >
          <span>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: currency,
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
        </div>
      </div>
      <div className="card__buttons">
        <PurpleButton>Купить в 1 клик</PurpleButton>
        <WhiteGrayButton>В корзину</WhiteGrayButton>
      </div>
    </div>
  );
}
