import { isMobile } from "react-device-detect";
import HeaderBody from "../headerBody/HeaderBody";
import HeaderInfo from "../headerInfo/HeaderInfo";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderNav from "../headerNav/HeaderNav";

export default function Header() {
  return (
    <header className="header">
      {isMobile ? (
        <>
          <HeaderInfo />
          <HeaderBody />
          <HeaderNav />
        </>
      ) : (
        <HeaderMobile />
      )}
    </header>
  );
}
