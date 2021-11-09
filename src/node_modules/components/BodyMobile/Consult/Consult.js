import GreenButton from "../../Buttons/GreenButton";
import "./Consult.css";
import consultant from "../../../img/consultant.png";
import Subtitle from "../../General/Title/Subtitle";
import MainTitle from "../../General/Title/MainTitle";
import ConsultSubtitle from "../../BodyDesc/Consult/ConsultSubtitle";

export default function ConsultMob() {
  return (
    <div className="consult">
      <div className="consult__container-s container-s">
        <div className="consult__content-s">
          <Subtitle style={{ color: "#fff" }}>Персональный</Subtitle>
          <MainTitle style={{ color: "#fff", marginBottom: "18px" }}>
            Консультант на связи!
          </MainTitle>
          <p className="consult__text-s">
            Когда Вы совершаете покупки на сайте “AudioFree” - все Ваши заказы
            ведет личный менеджер, который поможет с выбором и оформлением
            заказа.
          </p>
          <ConsultSubtitle className="consult__subtitle-s" />
        </div>
        <div className="consult__image-wrapper">
          <img src={consultant} alt="Консультант на связи!" />
        </div>
        <GreenButton
          style={{
            fontSize: "18px",
            lineHeight: "21px",
            padding: "26px 64px",
            margin: "0 auto",
          }}
        >
          Получить консультацию
        </GreenButton>
      </div>
    </div>
  );
}
