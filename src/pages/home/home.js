import Body from "../../components/Body/BodyMain/Body";
import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";

export const Home = () => {
  return (
    <div>
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
      <Body />
      <FooterGeneral />
    </div>
  );
};

export default Home;
