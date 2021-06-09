import { Link } from "react-router-dom";
import "./MoreModels.css";

export default function MoreModels() {
  return (
    <Link to="/catalog" className="interface__more">
      Смотреть больше моделей
    </Link>
  );
}
