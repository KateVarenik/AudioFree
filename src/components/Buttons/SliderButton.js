import "./SliderButton.css";

export default function SliderButton(props) {
  return (
    <button className={`slider__button ${props.className}`}>
      {props.children}
    </button>
  );
}
