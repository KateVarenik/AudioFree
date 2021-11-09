import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Entity.css";

export default function Entity(props) {
  return (
    <div className={`contacts__entity ${props.className}`}>
      <div className="contacts__entity-image">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>

      <div className="contacts__entity-text">
        <p className="contacts__entity-title">Данные юридического лица</p>
        <p className="contacts__entity-data">
          ИП: Королевская <br /> ИНН: 780512128067 <br /> ОГРН: 319784700376930
        </p>
      </div>
    </div>
  );
}
