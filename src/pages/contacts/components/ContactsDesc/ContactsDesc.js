import { Link } from "react-router-dom";
import PurpleButton from "../../../../components/Buttons/PurpleButton";
import CardWrapper from "../../../../components/Catalog/CardWrapper";
import Adress from "../../../../components/Contacts/Adress/Adress";
import Entity from "../../../../components/Contacts/Entity/Entity";
import Mail from "../../../../components/Contacts/Mail/Mail";
import Phone from "../../../../components/Contacts/Phone/Phone";
import "./ContactsDesc.css";

export default function ContactsDesc() {
  return (
    <div className="contacts__container container-l">
      <div className="delivery__breadcrumb breadcrumb">
        <Link to="/">Главная</Link>
        &nbsp; / &nbsp;
        <Link to="/contacts">Контакты</Link>
      </div>

      <CardWrapper className="contacts__info">
        <div className="contacts__data">
          <h1 className="contacts__title">Контакты</h1>
          <Phone className="contacts__phone-dark" />
          <hr />
          <Adress className="contacts__white" />
          <hr />
          <Mail className="contacts__white" />
          <hr />
          <Entity className="contacts__entity-pd" />
        </div>
        <div className="contacts__form">
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
      </CardWrapper>
    </div>
  );
}
