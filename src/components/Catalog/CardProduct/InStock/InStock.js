import "./InStock.css";
import check from "../../../../img/instock.svg";

export default function InStock() {
  return (
    <div className="inStock">
      <img src={check} alt="In stock" />
      <span>В наличии</span>
    </div>
  );
}
