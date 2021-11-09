import { isMobile } from "react-device-detect";
import "./guarantee.css";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import GuaranteeDesk from "./components/GuaranteeDesk/GuaranteeDesk";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import GuaranteeMob from "./components/GuaranteeMob/GuaranteeMob";
import FooterMobile from "../../components/Footer/FooterMobile/FooterMobile";

export const Guarantee = () => {
  return (
    <div className="guarantee">
      {isMobile ? (
        <>
          <HeaderMobile />
          <GuaranteeMob />
          <FooterMobile />
        </>
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />

          <GuaranteeDesk />

          <FooterGeneral />
        </>
      )}
    </div>
  );
};

export default Guarantee;
