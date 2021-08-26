import "./MainTitle.css";
import { isMobile } from "react-device-detect";

export default function MainTitle(props) {
  return (
    <>
      {isMobile ? (
        <h2 className="title-s">{props.children}</h2>
      ) : (
        <h2 className="title-l">{props.children}</h2>
      )}
    </>
  );
}
