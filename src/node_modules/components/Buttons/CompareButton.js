import "./CompareButton.css";
import { useState } from "react";
import Compare from "../Icons/Compare";

export default function CompareButton() {
  const [isCompare, setIsCompare] = useState(false);
  return (
    <button
      className={`card__top-button ${isCompare && "active"}`}
      onClick={() => setIsCompare((prevIsCompare) => !prevIsCompare)}
    >
      <Compare />
    </button>
  );
}
