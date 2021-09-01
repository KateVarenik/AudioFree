import "./TestImage.css";
import man from "../../../img/testMan.png";

export default function TestImage(props) {
  return (
    <div className={`test-image__wrapper ${props.className}`}>
      <div className="test-image">
        <img src={man} alt="Наушники со скидкой" />
      </div>
    </div>
  );
}
