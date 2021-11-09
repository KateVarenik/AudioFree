import "./CardProductMob.css";
import Photo from "./Photo/Photo";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";
import Title from "./Title/Title";
import AddToBasketButton from "../../Buttons/AddToBasketButton";

export default function CardProductMob({
  title,
  rate,
  image,
  currency,
  price,
}) {
  return (
    <div className="cardProductMob__wrapper">
      <AddToBasketButton className="addToBasket" />
      <Photo
        image={image}
        title={title}
        style={{ width: "130px", height: "130px" }}
      />
      <Title title={title} style={{ lineHeight: "16px" }} />
      <div className="card__info">
        <Rating rate={rate} />
        <Price
          currency={currency}
          price={price}
          className="cardProductMob__price"
        />
      </div>
    </div>
  );
}
