import "./404.css";
import Header from "../../components/Header/header/Header";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import image404 from "../../img/404.svg";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Header />
      <div className="page-not-found__content">
        <img src={image404} alt="Page Not Found" />
      </div>

      <FooterGeneral />
    </div>
  );
};

export default PageNotFound;
