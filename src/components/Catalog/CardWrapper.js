import "./CardWrapper.css";

export default function CardWrapper(props) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
