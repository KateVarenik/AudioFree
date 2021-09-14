import "./PageTitle.css";
import { isMobile } from "react-device-detect";

export default function PageTitle(props) {
  return (
    <h1
      className={`${isMobile ? "pageTitle-mob" : "pageTitle"} ${
        props.className
      }`}
      style={props.style}
    >
      {props.children}
    </h1>
  );
}
