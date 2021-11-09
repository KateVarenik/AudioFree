import "./PurpleButton.css";

export default function PurpleButton(props) {
  return (
    <button className={`button__purple ${props.className}`}>
      {props.children}
    </button>
  );
}
