import "./Price.css";

export default function Price({ price, currency }) {
  return (
    <div
      className="card__info-price"
      style={{ fontSize: price.toString().length > 6 ? "22px" : "24px" }}
    >
      <span>
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: currency,
          maximumFractionDigits: 0,
        }).format(price)}{" "}
      </span>
    </div>
  );
}
