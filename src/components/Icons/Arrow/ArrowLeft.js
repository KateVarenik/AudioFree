import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./ArrowLeft.css";

export default function ArrowLeft(props) {
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="arrow-left"
      style={props.style}
    />
  );
}
