import "./Phone.css";
import phoneImg from "../../../img/contact.svg";

export default function Phone(props) {
  return (
    <div className={`contacts__phone ${props.className}`}>
      <a href="tel:88005519202" className="contacts__phone-image">
        <img src={phoneImg} alt="Phone" />
      </a>

      <div className="contacts__phone-text">
        <span className="contacts__phone-description">
          Бесплатный звонок по РФ
        </span>
        <a href="tel:88005519202" className="contacts__phone-number">
          8 800 551-92-02
        </a>
      </div>
    </div>
  );
}
