import "./Logo.css";
import logo from "../../../img/headPhones.svg";

export default function Logo(props) {
  return (
    <div className={`logo ${props.className}`}>
      <img src={logo} alt="logo" />
      <span className="logo-name">AudioFree</span>
    </div>
  );
}
