import "./GreenButton.css";

export default function GreenButton(props) {
  return (
    <button className="button__green" style={props.style}>
      {props.children}
    </button>
  );
}
