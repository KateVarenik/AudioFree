import { Link } from "react-router-dom";
import PurpleButton from "../../../../components/Buttons/PurpleButton";
import Adress from "../../../../components/Contacts/Adress/Adress";
import Entity from "../../../../components/Contacts/Entity/Entity";
import Mail from "../../../../components/Contacts/Mail/Mail";
import Phone from "../../../../components/Contacts/Phone/Phone";
import Breadcrumb from "../../../../components/General/Breadcrumb/Breadcrumb";
import Flex from "../../../../components/General/Flex/Flex";
import PageTitle from "../../../../components/General/Title/PageTitle";
import ArrowLeft from "../../../../components/Icons/Arrow/ArrowLeft";
import "./ContactsMob.css";

export default function ContactsMob() {
  return (
    <>
      <div className="contacts-mob__container container-s">
        <Flex>
          <ArrowLeft style={{ paddingLeft: "10px", paddingRight: "17px" }} />
          <Breadcrumb>
            <Link to="/">Главная</Link>
            &nbsp; / &nbsp;
            <Link to="/contacts">Контакты</Link>
          </Breadcrumb>
        </Flex>

        <PageTitle style={{ padding: "18px 10px" }}>Контакты</PageTitle>
        <div className="contacts-mob__data">
          <Phone className="contacts__phone-dark" />
          <hr />
          <Adress className="contacts__white" />
          <hr />
          <Mail className="contacts__white" />
          <hr />
          <Entity className="contacts__entity-pd" />
          <hr style={{ marginTop: "24px" }} />
        </div>

        <div className="contacts-mob__form">
          <h2 className="contacts__form-title">Напишите нам:</h2>
          <p className="contacts__form-label">
            Заполните форму, наши специалисты, свяжутся с Вами в течение 15
            минут
          </p>
          <form>
            <input
              type="text"
              placeholder="Введите Ваше имя"
              className="contacts__form-input"
            />
            <input
              type="tel"
              placeholder="Введите Ваш телефон"
              className="contacts__form-input"
            />
            <PurpleButton className="contacts__form-button">
              Отправить
            </PurpleButton>
          </form>

          <p className="contacts__form-note">
            Нажимая кнопку "Отправить" Вы даёте свое согласие на обработку
            введенной персональной информации
          </p>
        </div>
      </div>
    </>
  );
}
