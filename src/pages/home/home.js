import { isMobile } from "react-device-detect";
import "./home.css";
import Body from "../../components/Body/BodyMain/Body";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderMobile from "../../components/Header/HeaderMobile/HeaderMobile";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";

export const Home = () => {
  return (
    <div className="homepage">
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
        </>
      )}

      <Body />
      <FooterGeneral />
    </div>
  );
};

export default Home;
