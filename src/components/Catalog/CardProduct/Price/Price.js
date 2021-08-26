import "./Price.css";
import { isMobile } from "react-device-detect";

export default function Price({ price, currency, className }) {
  return (
    <div
      className={`card__info-price ${className}`}
      style={
        isMobile
          ? { fontSize: price.toString().length > 6 ? "14px" : "18px" }
          : { fontSize: price.toString().length > 6 ? "22px" : "24px" }
      }
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
