import FooterGeneral from "../../components/Footer/FooterGeneral/FooterGeneral";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";

export const Pickup = () => {
  const STYLE = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  };
  return (
    <div style={STYLE}>
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
      Pickup
      <FooterGeneral />
    </div>
  );
};

export default Pickup;
