import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./MoreModels.css";

export default function MoreModels() {
  return (
    <Link
      to="/catalog"
      className={`interface__more ${isMobile && "interface__more-s"}`}
    >
      Смотреть больше моделей
    </Link>
  );
}
