import Star from "../../../Icons/Star/Star";

export default function Rating({ rate }) {
  return (
    <div className="card__info-rating">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Star key={i} className={rate > i ? "yellow" : "gray"} />
        ))}
    </div>
  );
}
