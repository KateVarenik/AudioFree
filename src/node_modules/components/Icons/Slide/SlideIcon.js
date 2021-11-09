import "./SlideIcon.css";
import Slide from "../../../img/slide.svg";

export default function SlideIcon() {
  return (
    <div className="slider-pointer">
      <img src={Slide} alt="Потяните вправо" />
    </div>
  );
}
