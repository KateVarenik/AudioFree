import GreenButton from "../../Buttons/GreenButton";
import "./Test.css";
import man from "../../../img/testMan.png";

export default function Test() {
  return (
    <div className="test">
      <div className="test__container container">
        <div className="test__leftcol">
          <h3 className="test__title">
            <span>Подберем 5 лучших моделей </span>беспроводных наушников под
            Ваши цели
          </h3>
          <p className="test__content">
            Пройдите тест и получите <span>скидку до 10% </span> на первую
            покупку
          </p>
          <GreenButton
            style={{
              fontSize: "18px",
              lineHeight: "21px",
              padding: "26px 32px",
            }}
          >
            Пройти тест и получить скидку!
          </GreenButton>
        </div>
        <div className="test__rightcol">
          <div className="test__rightcol-img">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
