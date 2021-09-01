import GreenButton from "../../Buttons/GreenButton";
import "./Test.css";
import TestTitle from "./TestTitle";
import TestContent from "./TestContent";
import TestImage from "./TestImage";

export default function Test() {
  return (
    <div className="test">
      <div className="test__container container-l">
        <div className="test__leftcol">
          <TestTitle />
          <TestContent />
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
        <TestImage />
      </div>
    </div>
  );
}
