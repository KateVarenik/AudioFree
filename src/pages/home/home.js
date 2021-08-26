import { isMobile } from "react-device-detect";
import "./home.css";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import BodyDesk from "../../components/BodyDesc/BodyMain/Body";
import BodyMobile from "../../components/BodyMobile/BodyMain/Body";

export const Home = () => {
  return (
    <div className="homepage">
      {isMobile ? (
        <>
          <HeaderMobile />
          <BodyMobile />
        </>
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
          <BodyDesk />
          <FooterGeneral />
        </>
      )}
    </div>
  );
};

export default Home;
