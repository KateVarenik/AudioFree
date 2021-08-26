import Logo from "../General/Logo/Logo";
import "./FooterBottom.css";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom__container container-l">
        <ul className="footer-bottom__list">
          <li className="footer-bottom__item">
            &copy; 2021 audiofree.ru Все права защищены
          </li>
          <li className="footer-bottom__item">
            <Logo />
          </li>
          <li className="footer-bottom__item">Политика конфиденциальности</li>
        </ul>
      </div>
    </div>
  );
}
