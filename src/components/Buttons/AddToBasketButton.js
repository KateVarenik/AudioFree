import "./AddToBasketButton.css";
import { useState } from "react";
import AddToBasketIcon from "../Icons/AddToBasket";

export default function AddToBasketButton(props) {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <button
      className={`addToBasketButton ${isAdded && "active"} ${props.className}`}
      onClick={() => setIsAdded((prevIsAdded) => !prevIsAdded)}
    >
      <AddToBasketIcon />
    </button>
  );
}
