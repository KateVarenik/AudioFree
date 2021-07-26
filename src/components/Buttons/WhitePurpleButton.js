import "./WhitePurpleButton.css";

export default function WhitePurpleButton(props) {
  return (
    <button
      className={`button__white-purple ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
