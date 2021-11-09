import { isMobile } from "react-device-detect";
import "./404.css";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import image404 from "../../img/404.svg";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import FooterMobile from "../../components/Footer/FooterMobile/FooterMobile";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      {isMobile ? (
        <>
          <HeaderMobile />
          <div className="page-not-found__content">
            <img src={image404} alt="Page Not Found" />
          </div>
          <FooterMobile />
        </>
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
          <div className="page-not-found__content">
            <img src={image404} alt="Page Not Found" />
          </div>

          <FooterGeneral />
        </>
      )}
    </div>
  );
};

export default PageNotFound;
