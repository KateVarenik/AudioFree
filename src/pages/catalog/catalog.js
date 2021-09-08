import { isMobile } from "react-device-detect";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";

import "./catalog.css";
import CatalogDesc from "./components/CatalogDesc/CatalogDesc";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import CatalogMob from "./components/CatalogMob/CatalogMob";
import FooterMobile from "../../components/Footer/FooterMobile/FooterMobile";

export const Catalog = () => {
  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile />
          <CatalogMob />
          <FooterMobile />
        </>
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
          <CatalogDesc />
          <FooterGeneral />
        </>
      )}
    </>
  );
};

export default Catalog;
