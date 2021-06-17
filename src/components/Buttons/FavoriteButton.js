import "./FavoriteButton.css";
import { useState } from "react";
import Heart from "../Icons/Heart";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      className={`card__top-button ${isFavorite && "active"}`}
      onClick={() => setIsFavorite((prevIsFavorite) => !prevIsFavorite)}
    >
      <Heart />
    </button>
  );
}
