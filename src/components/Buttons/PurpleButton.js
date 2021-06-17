import "./PurpleButton.css";

export default function PurpleButton(props) {
  return (
    <button className="button__purple" style={props.style}>
      {props.children}
    </button>
  );
}
