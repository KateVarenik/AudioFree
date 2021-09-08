import "./Flex.css";

export default function Flex(props) {
  return <div className={`flex ${props.className}`}>{props.children}</div>;
}
