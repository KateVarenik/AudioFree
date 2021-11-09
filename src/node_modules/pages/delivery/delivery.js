import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import { isMobile } from "react-device-detect";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import DeliveryDesk from "./components/DeliveryDesk/DeliveryDesk";
import FooterMobile from "../../components/Footer/FooterMobile/FooterMobile";
import DeliveryMob from "./components/DeliveryMob/DeliveryMob";

export const Delivery = () => {
  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile />
          <DeliveryMob />
          <FooterMobile />
        </>
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
          <DeliveryDesk />
          <FooterGeneral />
        </>
      )}
    </>
  );
};

export default Delivery;
