import TestContent from "../../BodyDesc/Test/TestContent";
import TestImage from "../../BodyDesc/Test/TestImage";
import TestTitle from "../../BodyDesc/Test/TestTitle";
import GreenButton from "../../Buttons/GreenButton";
import "./Test.css";

export default function TestMob() {
  return (
    <div className="test">
      <div className="test__container-s container-s">
        <TestTitle className="test__title-s" />
        <TestContent className='test__content-s' />
        <TestImage className='test-image__wrapper-s' />
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
    </div>
  );
}
