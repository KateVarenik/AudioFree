import { isMobile } from "react-device-detect";
import "./Subtitle.css";

export default function Subtitle(props) {
  return (
    <>
      {isMobile ? (
        <h3 className="subtitle-s">{props.children}</h3>
      ) : (
        <h3 className="subtitle-l">{props.children}</h3>
      )}
    </>
  );
}
