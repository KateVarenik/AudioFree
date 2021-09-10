import { isMobile } from "react-device-detect";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import "./contacts.css";
import ContactsDesc from "./components/ContactsDesc/ContactsDesc";
import ContactsMob from "./components/ContactsMob/ContactsMob";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import FooterMobile from "../../components/Footer/FooterMobile/FooterMobile";

export function Contacts() {
  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile />
          <ContactsMob />
          <FooterMobile />
        </>
      ) : (
        <div className="contacts">
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />

          <ContactsDesc />

          <FooterGeneral />
        </div>
      )}
    </>
  );
}

export default Contacts;
