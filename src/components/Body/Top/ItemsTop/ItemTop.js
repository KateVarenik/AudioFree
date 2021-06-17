import Photo from "../../../Catalog/CardProduct/Photo/Photo";
import Price from "../../../Catalog/CardProduct/Price/Price";
import Rating from "../../../Catalog/CardProduct/Rating/Rating";
import Title from "../../../Catalog/CardProduct/Title/Title";
import "./ItemTop.css";

export default function ItemTop({ image, title, rate, price, currency }) {
  return (
    <div className="item-top">
      <Photo
        image={image}
        style={{ minWidth: "123px", height: "123px", marginRight: "10px" }}
      />
      <div className="item-top__content">
        <Title title={title} />
        <Rating rate={rate} />
        <Price currency={currency} price={price} />
      </div>
    </div>
  );
}
