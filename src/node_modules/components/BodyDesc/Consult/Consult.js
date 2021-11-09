import "./Consult.css";
import consultant from "../../../img/consultant.png";
import GreenButton from "../../Buttons/GreenButton";

export default function Consult() {
  return (
    <div className="consult">
      <div className="consult__container container-l">
        <div className="consult__leftcol">
          <img src={consultant} alt="" />
        </div>
        <div className="consult__rightcol">
          <h3 className="consult__title">
            Персональный <span> Консультант на связи!</span>
          </h3>
          <p className="consult__text">
            Когда Вы совершаете покупки на сайте “AudioFree” - все Ваши заказы
            ведет личный менеджер, который поможет с выбором и оформлением
            заказа.
          </p>
          <h4 className="consult__subtitle">Приятных и безопасных покупок!</h4>
          <GreenButton
            style={{
              fontSize: "18px",
              lineHeight: "21px",
              padding: "26px 64px",
            }}
          >
            Получить консультацию
          </GreenButton>
        </div>
      </div>
    </div>
  );
}
